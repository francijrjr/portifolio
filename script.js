
const WHATSAPP_NUMBER = "5588921745890";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const totalVisitsEl = document.querySelector("[data-total-visits]");
const onlineVisitorsEl = document.querySelector("[data-online-visitors]");
const yearEl = document.querySelector("[data-year]");
const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu");

const VISITOR_TOTAL_KEY = "portfolio-total-visits-v1";
const SESSION_VISITED_KEY = "portfolio-session-seen-v1";
const PRESENCE_KEY = "portfolio-presence-v1";
const PRESENCE_TTL = 12000;
const PRESENCE_INTERVAL = 5000;

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

document.querySelectorAll(".project-card").forEach((card) => {
  const accent = card.dataset.accent;
  if (accent) card.style.setProperty("--project-accent", accent);
});

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  const whatsappMessage = encodeURIComponent(
    "Olá, Francinilton! Vi seu portfólio e gostaria de conversar sobre um projeto."
  );

  if (WHATSAPP_NUMBER) {
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
    link.target = "_blank";
    link.rel = "noreferrer";
    return;
  }

  link.addEventListener("click", (event) => {
    event.preventDefault();
    const note = document.querySelector("[data-whatsapp-note]");
    if (note) note.hidden = false;
  });
});

function closeMenu() {
  if (!menu || !menuButton) return;
  menu.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

menuButton?.addEventListener("click", () => {
  if (!menu) return;

  const isOpen = menuButton?.getAttribute("aria-expanded") === "true";
  menuButton?.setAttribute("aria-expanded", String(!isOpen));
  menu.classList.toggle("open", !isOpen);
  document.body.style.overflow = isOpen ? "" : "hidden";
});

menu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

function typeText(el) {
  const text = el.dataset.typed || "";
  if (!text) return;
  if (prefersReducedMotion) {
    el.textContent = text;
    return;
  }

  let index = 0;
  el.textContent = "";
  const timer = setInterval(() => {
    el.textContent = text.slice(0, index + 1);
    index += 1;
    if (index >= text.length) {
      clearInterval(timer);
    }
  }, 90);
}

function initSkillsTyper() {
  const el = document.querySelector(".skills-typed");
  if (!el) return;

  const skills = (el.dataset.skills || "")
    .split(",")
    .map((skill) => skill.trim())
    .filter(Boolean);

  if (!skills.length) return;

  if (prefersReducedMotion) {
    el.textContent = skills[0];
    return;
  }

  const TYPE_SPEED = 85;
  const DELETE_SPEED = 40;
  const HOLD_TIME = 1400;
  const NEXT_DELAY = 300;

  let skillIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = skills[skillIndex];

    if (!deleting) {
      charIndex += 1;
      el.textContent = current.slice(0, charIndex);

      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, HOLD_TIME);
        return;
      }

      setTimeout(tick, TYPE_SPEED);
      return;
    }

    charIndex -= 1;
    el.textContent = current.slice(0, charIndex);

    if (charIndex === 0) {
      deleting = false;
      skillIndex = (skillIndex + 1) % skills.length;
      setTimeout(tick, NEXT_DELAY);
      return;
    }

    setTimeout(tick, DELETE_SPEED);
  }

  tick();
}

function setCounterValue(element, value) {
  if (!element) return;
  element.textContent = new Intl.NumberFormat("pt-BR").format(value);
}

function readPresenceMap() {
  try {
    const raw = localStorage.getItem(PRESENCE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writePresenceMap(map) {
  try {
    localStorage.setItem(PRESENCE_KEY, JSON.stringify(map));
  } catch {
    // Ignore storage errors.
  }
}

function getTabId() {
  const key = "portfolio-tab-id";
  const existing = sessionStorage.getItem(key);
  if (existing) return existing;

  const generated = `tab-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  sessionStorage.setItem(key, generated);
  return generated;
}

function updateOnlineCount() {
  if (!onlineVisitorsEl) return;

  const now = Date.now();
  const entries = Object.entries(readPresenceMap());
  const filtered = entries.filter(([, timestamp]) => now - Number(timestamp) <= PRESENCE_TTL);
  const reduced = Object.fromEntries(filtered);

  writePresenceMap(reduced);
  setCounterValue(onlineVisitorsEl, Math.max(1, filtered.length));
}

function initPresenceTracker() {
  if (!onlineVisitorsEl) return;

  const tabId = getTabId();

  const ping = () => {
    const map = readPresenceMap();
    map[tabId] = Date.now();
    writePresenceMap(map);
    updateOnlineCount();
  };

  ping();
  const intervalId = window.setInterval(ping, PRESENCE_INTERVAL);

  const cleanup = () => {
    const map = readPresenceMap();
    delete map[tabId];
    writePresenceMap(map);
    updateOnlineCount();
    window.clearInterval(intervalId);
  };

  window.addEventListener("pagehide", cleanup, { once: true });
  window.addEventListener("beforeunload", cleanup, { once: true });
  window.addEventListener("storage", updateOnlineCount);

  if ("BroadcastChannel" in window) {
    const channel = new BroadcastChannel("portfolio-presence");
    channel.onmessage = () => ping();
    window.addEventListener("pagehide", () => channel.close(), { once: true });
  }
}

async function initVisitorTotals() {
  if (!totalVisitsEl) return;

  try {
    const response = await fetch("https://api.countapi.xyz/hit/fjsolution-portfolio/visits");
    if (!response.ok) throw new Error("countapi failed");

    const data = await response.json();
    setCounterValue(totalVisitsEl, Number(data.value) || 0);
    return;
  } catch {
    let total = Number(localStorage.getItem(VISITOR_TOTAL_KEY) || "0");
    const alreadyCounted = sessionStorage.getItem(SESSION_VISITED_KEY) === "1";

    if (!alreadyCounted) {
      total += 1;
      sessionStorage.setItem(SESSION_VISITED_KEY, "1");

      try {
        localStorage.setItem(VISITOR_TOTAL_KEY, String(total));
      } catch {
        // Ignore storage errors.
      }
    }

    setCounterValue(totalVisitsEl, total);
  }
}

function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const composedMessage = [
      "Olá, Francinilton!",
      "",
      name ? `Nome: ${name}` : null,
      email ? `E-mail: ${email}` : null,
      message ? `Mensagem: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(composedMessage || "Olá, Francinilton! Vi seu portfólio e gostaria de conversar.")}`;
    window.open(whatsappUrl, "_blank", "noreferrer");

    form.reset();
  });
}

async function initMotion() {
  const revealNodes = document.querySelectorAll(".reveal");

  if (prefersReducedMotion) {
    revealNodes.forEach((node) => node.classList.add("visible"));
    const typed = document.querySelector(".typed");
    if (typed) typed.textContent = typed.dataset.typed || "";
    return;
  }

  try {
    const { inView, stagger, animate } = await import("https://cdn.jsdelivr.net/npm/motion@11/+esm");

    const typed = document.querySelector(".typed");
    if (typed) typeText(typed);

    inView(
      ".reveal",
      ({ target }) => {
        target.classList.add("visible");
      },
      { amount: 0.15 }
    );

    inView(".skills-shell", () => {
      animate(
        ".skill-group",
        { opacity: [0, 1], y: [20, 0] },
        { delay: stagger(0.08), duration: 0.45, easing: "ease-out" }
      );
    });

    inView(".project-grid", () => {
      animate(
        ".project-card",
        { opacity: [0, 1], y: [24, 0] },
        { delay: stagger(0.1), duration: 0.5, easing: "ease-out" }
      );
    });

    inView(".contact-layout", () => {
      animate(
        ".contact-copy-panel, .contact-form",
        { opacity: [0, 1], y: [18, 0] },
        { delay: stagger(0.12), duration: 0.45, easing: "ease-out" }
      );
    });

    document.querySelectorAll(".button, .social-pill, .whatsapp-button, .contact-link, .run-link").forEach((element) => {
      element.addEventListener("mouseenter", () => animate(element, { scale: 1.03 }, { duration: 0.15 }));
      element.addEventListener("mouseleave", () => animate(element, { scale: 1 }, { duration: 0.15 }));
    });
  } catch {
    revealNodes.forEach((node) => node.classList.add("visible"));
    const typed = document.querySelector(".typed");
    if (typed) typeText(typed);
  }
}

initSkillsTyper();
initContactForm();
initPresenceTracker();
initVisitorTotals();
initMotion();

if (window.lucide) {
  window.lucide.createIcons();
}