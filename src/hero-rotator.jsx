import { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { translations } from '../script.js';
import { TextLines, useStaticText } from './text-effects.jsx';
import { heroSlides, rotationLabels } from './hero-slides.js';

const ROTATION_INTERVAL = 7000;

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
  const labels = rotationLabels[language];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
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
    if (paused || !visible || !inView) return;
    const timer = setTimeout(() => setIndex(current => (current + 1) % slides.length), ROTATION_INTERVAL);
    return () => clearTimeout(timer);
  }, [index, paused, visible, inView, slides.length]);

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
      <TextSlot slides={slides} field="title" index={index} hero animate={!staticText} />
    </h1>
    <p className="hero-text hero-text-slot">
      <TextSlot slides={slides} field="copy" index={index} animate={!staticText} />
    </p>
    <div className="hero-rotation-controls" role="group" aria-label={labels.controls}>
      <span className="hero-slide-count">{String(index + 1).padStart(2, '0')} <span>/ 04</span></span>
      <button type="button" onClick={() => setPaused(value => !value)} aria-pressed={paused} data-rotation-pause>
        <span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span> {paused ? labels.play : labels.pause}
      </button>
      <button type="button" onClick={() => setIndex(current => (current + 1) % slides.length)} aria-label={labels.next} data-rotation-next>
        <span aria-hidden="true">→</span>
      </button>
    </div>
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
