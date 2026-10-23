import { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'motion/react';
import { translations } from '../script.js';
import { TextLines, useStaticText } from './text-effects.jsx';
import { heroSlides, heroTitleVariants } from './hero-slides.js';

const WORD_INTERVAL = 3200;
const VARIATIONS_PER_MESSAGE = 3;

function MorphingTitle({ text, animate }) {
  return text.split(/<br\s*\/?\s*>/i).map((line, lineIndex) => (
    <span className={`text-line hero-title-line${lineIndex ? ' text-line-accent' : ''}`} key={lineIndex}>
      {line.split(' ').map((word, wordIndex, words) => {
        const content = word + (wordIndex < words.length - 1 ? '\u00a0' : '');
        // Stable words keep their DOM nodes and animation state across variations.
        return animate ? (
          <motion.span
            className="hero-title-word"
            key={`${wordIndex}-${word}`}
            initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >{content}</motion.span>
        ) : <span className="hero-title-word" key={`${wordIndex}-${word}`}>{content}</span>;
      })}
    </span>
  ));
}

// Invisible copies reserve the tallest slide, including after font loading or
// resizing. Only the active text is exposed to assistive technology.
function TextSlot({ slides, field, index, hero, animate }) {
  return <>
    {slides.map((slide, position) => (
      <span className="hero-text-measure" aria-hidden="true" key={position}>
        <TextLines text={slide[field]} hero={hero} />
      </span>
    ))}
    <span className="hero-text-active" key={index}>
      <TextLines text={slides[index][field]} hero={hero} animate={animate} />
    </span>
  </>;
}

function HeroRotator({ language }) {
  const bundle = translations[language];
  const slides = [
    { eyebrow: bundle['hero.eyebrow'], title: bundle['hero.title'], copy: bundle['hero.copy'] },
    ...heroSlides[language],
  ];
  const [step, setStep] = useState(0);
  const index = Math.floor(step / VARIATIONS_PER_MESSAGE);
  const variation = step % VARIATIONS_PER_MESSAGE;
  const titles = slides.map((slide, i) => [slide.title, ...heroTitleVariants[language][i]]);
  const [visible, setVisible] = useState(!document.hidden);
  const [inView, setInView] = useState(!('IntersectionObserver' in window));
  const staticText = useStaticText();
  const container = useRef(null);

  useEffect(() => {
    const onVisibility = () => setVisible(!document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.1 })
      : null;
    if (observer) observer.observe(container.current);
    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      observer?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!visible || !inView) return;
    const timer = setTimeout(() => setStep(current => (current + 1) % (slides.length * VARIATIONS_PER_MESSAGE)), WORD_INTERVAL);
    return () => clearTimeout(timer);
  }, [step, visible, inView, slides.length]);

  return <div
    ref={container}
    className="hero-rotation"
    aria-live="off"
  >
    <p className="eyebrow">
      <span aria-hidden="true">›_</span>
      <span className="hero-text-slot">
        <TextSlot slides={slides} field="eyebrow" index={index} animate={!staticText} />
      </span>
    </p>
    <h1 className="hero-title hero-text-slot" data-text-mounted="true">
      {titles.flat().map((title, position) => (
        <span className="hero-text-measure" aria-hidden="true" key={position}>
          <MorphingTitle text={title} animate={false} />
        </span>
      ))}
      <span className="hero-text-active" key={index}>
        <MorphingTitle text={titles[index][variation]} animate={!staticText} />
      </span>
    </h1>
    <p className="hero-text hero-text-slot">
      <TextSlot slides={slides} field="copy" index={index} animate={!staticText} />
    </p>
  </div>;
}

export function initHeroRotation() {
  const element = document.querySelector('[data-hero-intro]');
  if (!element) return;
  const root = createRoot(element);
  element.dataset.textMounted = 'true';
  const render = () => {
    const language = document.documentElement.lang.split('-')[0];
    // Reset both text and timer on language changes; a single timer drives all fields.
    root.render(<HeroRotator key={language} language={language} />);
  };
  render();
  window.addEventListener('portfolio:language-change', render);
}
