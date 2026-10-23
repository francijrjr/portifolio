import { Component, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import BlurText from './components/react-bits/BlurText.jsx';

// Only the explicitly marked text nodes belong to React; the page stays static.
const roots = new Map();
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

export function useStaticText() {
  const [reduced, setReduced] = useState(motionPreference.matches);
  useEffect(() => {
    const update = () => setReduced(motionPreference.matches);
    motionPreference.addEventListener('change', update);
    return () => motionPreference.removeEventListener('change', update);
  }, []);
  return reduced || !('IntersectionObserver' in window);
}

export function TextLines({ text, hero, animate = false }) {
  const lines = text.split(/<br\s*\/?\s*>/i);
  return lines.map((line, index) => {
    const className = `text-line${hero && index > 0 ? ' text-line-accent' : ''}`;
    return animate ? (
      <BlurText
        key={`${index}-${line}`}
        as="span"
        text={line}
        className={className}
        delay={hero ? 65 : 40}
        direction="bottom"
        distance={hero ? 20 : 12}
        blur={6}
        stepDuration={0.22}
        threshold={0.15}
      />
    ) : <span key={index} className={className}>{line}</span>;
  });
}

class TextFallback extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    return this.state.failed
      ? <TextLines text={this.props.text} hero={this.props.hero} />
      : this.props.children;
  }
}

function AnimatedText({ text, hero }) {
  const staticText = useStaticText();
  return <TextLines text={text} hero={hero} animate={!staticText} />;
}

function renderTexts() {
  document.querySelectorAll('[data-text-effect]').forEach((element) => {
    const text = element.dataset.motionText || element.textContent.trim().replace(/\s+/g, ' ');
    if (!roots.has(element)) {
      roots.set(element, createRoot(element));
      element.dataset.textMounted = 'true';
    }
    const hero = element.dataset.textEffect === 'hero';
    roots.get(element).render(
      <TextFallback text={text} hero={hero}>
        <AnimatedText text={text} hero={hero} />
      </TextFallback>
    );
  });
}

export function initTextEffects() {
  renderTexts();
  window.addEventListener('portfolio:language-change', renderTexts);
}
