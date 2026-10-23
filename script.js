const WHATSAPP_NUMBER = "5588921745890";

const translations = {
  pt: {
    "brand.subtitle": "Full Stack ",
    "nav.about": "sobre.tsx",
    "nav.projects": "projetos/",
    "nav.process": "processo.md",
    "nav.contact": "contato.sh",
    "hero.eyebrow": "Desenvolvimento com visão de produto",
    "hero.title": "Código que entende o negócio.<br />Decisões que viram produto.",
    "hero.copy": "Eu construo interfaces, APIs e análises que traduzem complexidade em soluções claras, rápidas e confiáveis.",
    "hero.cta.projects": "Ver projetos",
    "hero.cta.contact": "Falar comigo",
    "hero.stat.role.label": "Cargo",
    "hero.stat.role.value": "Full Stack Developer",
    "hero.stat.location.label": "Base",
    "hero.stat.location.value": "Crato, CE",
    "hero.stat.focus.label": "Foco",
    "hero.stat.focus.value": "Produto, dados e UX",
    "hero.panel.label": "workspace / summary",
    "hero.panel.kicker": "Atuação atual",
    "hero.panel.title": "Full Stack Developer",
    "hero.panel.copy": "Conecto implementação, análise e decisão técnica em projetos que exigem clareza e segurança.",
    "hero.panel.footer.left.label": "Build",
    "hero.panel.footer.left.value": "Interfaces, APIs e dados",
    "hero.panel.footer.right.label": "Status",
    "hero.panel.footer.right.value": "Aberto para projetos",
    "about.heading": "Uma base técnica, um olhar de produto.",
    "about.subheading": "Meu trabalho combina execução, leitura de contexto e escolhas de design que reduzem atrito para o usuário e para o time.",
    "about.photoLabel": "Foto profissional",
    "about.role": "Full Stack Developer",
    "about.body1": "Atuo na ponte entre produto e implementação, transformando necessidades em fluxos claros, sistemas estáveis e interfaces legíveis.",
    "about.body2": "Hoje meu foco é entregar software que seja útil de verdade: bem estruturado, escalável e fácil de evoluir.",
    "about.links.github": "GitHub",
    "about.links.linkedin": "LinkedIn",
    "about.links.email": "E-mail",
    "about.story.one.title": "Foco em clareza",
    "about.story.one.copy": "Cada tela precisa explicar o próximo passo sem esforço.",
    "about.story.two.title": "Arquitetura prática",
    "about.story.two.copy": "Escolhas técnicas simples o bastante para manter o ritmo e robustas o bastante para crescer.",
    "about.story.three.title": "Entrega orientada a valor",
    "about.story.three.copy": "O objetivo é sempre reduzir ruído e aumentar a confiança do time e do usuário.",
    "about.badges.one": "React + TypeScript",
    "about.badges.two": "Node.js + Express",
    "about.badges.three": "Python + SQL",
    "about.badges.four": "UX + Produto",
    "skills.heading": "Habilidades organizadas por contexto",
    "skills.subheading": "Quatro grupos visuais para navegar rapidamente pelo que eu faço melhor.",
    "skills.frontend.title": "Frontend",
    "skills.frontend.copy": "Interfaces responsivas, composição de componentes, performance e consistência visual.",
    "skills.backend.title": "Backend & APIs",
    "skills.backend.copy": "Camadas de regra de negócio, autenticação, serviços REST e integração entre sistemas.",
    "skills.data.title": "Dados & ML",
    "skills.data.copy": "Leitura de dados, indicadores, modelos preditivos e dashboards para apoiar decisão.",
    "skills.product.title": "Análise & Produto",
    "skills.product.copy": "Levantamento de requisitos, desenho de fluxo, priorização e arquitetura de solução.",
    "projects.heading": "Projetos que mostram problema, solução e resultado.",
    "projects.subheading": "Sem demo falsa, sem promessa vazia. Cada card comunica o contexto real e o que foi entregue.",
    "projects.problem": "Problema",
    "projects.solution": "Solução",
    "projects.result": "Resultado",
    "projects.nr1.title": "Canal seguro de denúncias e gestão de riscos.",
    "projects.nr1.problem": "Criar um fluxo anônimo, auditável e organizado para relatos ocupacionais.",
    "projects.nr1.solution": "Estruturação de formulário, painel administrativo, trilha de auditoria e experiência clara para quem reporta.",
    "projects.nr1.result": "Processo mais confiável, rastreável e compatível com o uso real do sistema.",
    "projects.med.title": "Predição de escassez de medicamentos.",
    "projects.med.problem": "Antecipar consumo e risco para apoiar a gestão pública de saúde.",
    "projects.med.solution": "Pipeline de dados, classificação de risco e dashboard com leituras rápidas para decisão.",
    "projects.med.result": "Dados brutos viraram apoio prático para análise e priorização.",
    "projects.mix.title": "Verificação de misturas químicas com leitura instantânea.",
    "projects.mix.problem": "Explicar riscos de combinações químicas com rapidez e linguagem acessível.",
    "projects.mix.solution": "Busca por substância, histórico, alertas visuais e interface modular para navegação simples.",
    "projects.mix.result": "Um front-end direto, legível e focado em consulta segura.",
    "projects.rooms.title": "Controle de salas, autenticação e relatórios em tempo real.",
    "projects.rooms.problem": "Organizar a gestão de ambientes com acesso, monitoramento e controle operacional.",
    "projects.rooms.solution": "Fluxos de login, relatórios em PDF e acompanhamento de temperatura com integração em tempo real.",
    "projects.rooms.result": "A rotina ficou mais rastreável, visual e conectada ao uso do dia a dia.",
    "projects.code": "GitHub",
    "projects.readme": "Notas",
    "projects.access": "Solicitar acesso",
    "projects.contact": "Contato",
    "process.heading": "Um processo simples para reduzir ruído e aumentar entrega.",
    "process.subheading": "Da descoberta ao ajuste final, com foco em decisões visíveis e comunicação direta.",
    "process.one.title": "Entender",
    "process.one.copy": "Contexto, restrições, público e problema real antes de escrever a primeira linha.",
    "process.two.title": "Estruturar",
    "process.two.copy": "Fluxos, arquitetura e prioridade viram um plano enxuto e executável.",
    "process.three.title": "Construir",
    "process.three.copy": "Entrega em blocos curtos, com validação visual e técnica ao longo do caminho.",
    "process.four.title": "Evoluir",
    "process.four.copy": "Uso real, ajustes e aprendizado contínuo para manter a solução útil.",
    "contact.heading": "Vamos tirar do papel.",
    "contact.subheading": "Se você quer produto, integração ou uma solução mais clara, eu respondo no WhatsApp, por e-mail ou LinkedIn.",
    "contact.whatsapp.label": "Canal principal",
    "contact.whatsapp.cta": "Chamar no WhatsApp",
    "contact.email.label": "E-mail",
    "contact.linkedin.label": "LinkedIn",
    "form.name.label": "Nome",
    "form.name.placeholder": "Seu nome",
    "form.email.label": "E-mail",
    "form.email.placeholder": "frjuniorfrjr@gmail.com",
    "form.message.label": "Mensagem",
    "form.message.placeholder": "Explique brevemente o que você precisa.",
    "form.submit": "Preparar mensagem no WhatsApp",
    "form.note": "Revise sua mensagem no WhatsApp antes de enviar.",
    "footer.counter": "Visitantes",
    "footer.counterTitle": "Acessos ao portfólio",
    "footer.total": "Total",
    "footer.online": "Online",
  },
  en: {
    "brand.subtitle": "Full Stack Developer",
    "nav.about": "about.tsx",
    "nav.projects": "projects/",
    "nav.process": "process.md",
    "nav.contact": "contact.sh",
    "hero.eyebrow": "Development with a product mindset",
    "hero.title": "Code that understands the business.<br />Decisions that become product.",
    "hero.copy": "I build interfaces, APIs, and analysis that turn complexity into clear, fast, and reliable solutions.",
    "hero.cta.projects": "View projects",
    "hero.cta.contact": "Contact me",
    "hero.stat.role.label": "Role",
    "hero.stat.role.value": "Full Stack Developer",
    "hero.stat.location.label": "Base",
    "hero.stat.location.value": "Crato, CE",
    "hero.stat.focus.label": "Focus",
    "hero.stat.focus.value": "Product, data, and UX",
    "hero.panel.label": "workspace / summary",
    "hero.panel.kicker": "Current role",
    "hero.panel.title": "Systems Analyst at UNILEÃO",
    "hero.panel.copy": "I connect implementation, analysis, and technical decisions in projects that demand clarity and confidence.",
    "hero.panel.footer.left.label": "Build",
    "hero.panel.footer.left.value": "Interfaces, APIs, and data",
    "hero.panel.footer.right.label": "Status",
    "hero.panel.footer.right.value": "Open for projects",
    "about.heading": "A technical base with a product mindset.",
    "about.subheading": "My work combines delivery, context reading, and design decisions that reduce friction for users and teams.",
    "about.photoLabel": "Professional photo",
    "about.role": "Full Stack Developer",
    "about.body1": "I work between product and implementation, turning needs into clear flows, stable systems, and readable interfaces.",
    "about.body2": "My current focus is shipping software that is genuinely useful: well structured, scalable, and easy to evolve.",
    "about.links.github": "GitHub",
    "about.links.linkedin": "LinkedIn",
    "about.links.email": "Email",
    "about.story.one.title": "Clarity first",
    "about.story.one.copy": "Every screen should explain the next step without effort.",
    "about.story.two.title": "Practical architecture",
    "about.story.two.copy": "Technical choices simple enough to keep momentum and solid enough to grow.",
    "about.story.three.title": "Value-driven delivery",
    "about.story.three.copy": "The goal is always to reduce noise and increase trust for the team and the user.",
    "about.badges.one": "React + TypeScript",
    "about.badges.two": "Node.js + Express",
    "about.badges.three": "Python + SQL",
    "about.badges.four": "UX + Product",
    "skills.heading": "Skills organized by context",
    "skills.subheading": "Four visual groups to quickly navigate what I do best.",
    "skills.frontend.title": "Frontend",
    "skills.frontend.copy": "Responsive interfaces, component composition, performance, and visual consistency.",
    "skills.backend.title": "Backend & APIs",
    "skills.backend.copy": "Business rules, authentication, REST services, and system integration.",
    "skills.data.title": "Data & ML",
    "skills.data.copy": "Data reading, indicators, predictive models, and dashboards for decision support.",
    "skills.product.title": "Analysis & Product",
    "skills.product.copy": "Requirements gathering, flow design, prioritization, and solution architecture.",
    "projects.heading": "Projects that show problem, solution, and result.",
    "projects.subheading": "No fake demos, no empty promise. Each card communicates the real context and what was delivered.",
    "projects.problem": "Problem",
    "projects.solution": "Solution",
    "projects.result": "Result",
    "projects.nr1.title": "Safe reporting channel and risk management.",
    "projects.nr1.problem": "Create an anonymous, auditable, and organized flow for occupational reports.",
    "projects.nr1.solution": "Form structure, admin dashboard, audit trail, and a clear reporting experience.",
    "projects.nr1.result": "A more reliable, traceable process aligned with the system's real usage.",
    "projects.med.title": "Prediction of medicine shortages.",
    "projects.med.problem": "Anticipate consumption and risk to support public health management.",
    "projects.med.solution": "Data pipeline, risk classification, and a dashboard for fast decision-making.",
    "projects.med.result": "Raw data became practical support for analysis and prioritization.",
    "projects.mix.title": "Chemical mixture verification with instant reading.",
    "projects.mix.problem": "Explain chemical combination risks quickly and in accessible language.",
    "projects.mix.solution": "Substance search, history, visual alerts, and modular navigation.",
    "projects.mix.result": "A direct, readable front end focused on safe lookup.",
    "projects.rooms.title": "Room control, authentication, and real-time reports.",
    "projects.rooms.problem": "Organize room management with access, monitoring, and operational control.",
    "projects.rooms.solution": "Login flows, PDF reports, and temperature tracking with real-time integration.",
    "projects.rooms.result": "Daily operations became more traceable, visual, and connected.",
    "projects.code": "GitHub",
    "projects.readme": "Notes",
    "projects.access": "Request access",
    "projects.contact": "Contact",
    "process.heading": "A simple process to reduce noise and increase delivery.",
    "process.subheading": "From discovery to final polish, focused on visible decisions and direct communication.",
    "process.one.title": "Understand",
    "process.one.copy": "Context, constraints, audience, and the real problem before the first line of code.",
    "process.two.title": "Structure",
    "process.two.copy": "Flows, architecture, and priority become a lean executable plan.",
    "process.three.title": "Build",
    "process.three.copy": "Short delivery blocks with visual and technical validation along the way.",
    "process.four.title": "Evolve",
    "process.four.copy": "Real usage, adjustments, and continuous learning to keep the solution useful.",
    "contact.heading": "Let's make it real.",
    "contact.subheading": "If you want product, integration, or a clearer solution, I reply on WhatsApp, email, or LinkedIn.",
    "contact.whatsapp.label": "Main channel",
    "contact.whatsapp.cta": "Message on WhatsApp",
    "contact.email.label": "Email",
    "contact.linkedin.label": "LinkedIn",
    "form.name.label": "Name",
    "form.name.placeholder": "Your name",
    "form.email.label": "Email",
    "form.email.placeholder": "frjuniorfrjr@gmail.com",
    "form.message.label": "Message",
    "form.message.placeholder": "Briefly explain what you need.",
    "form.submit": "Prepare WhatsApp message",
    "form.note": "Review your message in WhatsApp before sending it.",
    "footer.counter": "Visitors",
    "footer.counterTitle": "Portfolio visits",
    "footer.total": "Total",
    "footer.online": "Online",
  },
  es: {
    "brand.subtitle": "Full Stack Developer",
    "nav.about": "sobre.tsx",
    "nav.projects": "proyectos/",
    "nav.process": "proceso.md",
    "nav.contact": "contacto.sh",
    "hero.eyebrow": "Desarrollo con visión de producto",
    "hero.title": "Código que entiende el negocio.<br />Decisiones que se vuelven producto.",
    "hero.copy": "Construyo interfaces, APIs y análisis que transforman la complejidad en soluciones claras, rápidas y confiables.",
    "hero.cta.projects": "Ver proyectos",
    "hero.cta.contact": "Contactarme",
    "hero.stat.role.label": "Rol",
    "hero.stat.role.value": "Full Stack Developer",
    "hero.stat.location.label": "Base",
    "hero.stat.location.value": "Crato, CE",
    "hero.stat.focus.label": "Enfoque",
    "hero.stat.focus.value": "Producto, datos y UX",
    "hero.panel.label": "workspace / summary",
    "hero.panel.kicker": "Situación actual",
    "hero.panel.title": "Analista de Sistemas en UNILEÃO",
    "hero.panel.copy": "Conecto implementación, análisis y decisión técnica en proyectos que exigen claridad y confianza.",
    "hero.panel.footer.left.label": "Build",
    "hero.panel.footer.left.value": "Interfaces, APIs y datos",
    "hero.panel.footer.right.label": "Estado",
    "hero.panel.footer.right.value": "Abierto a proyectos",
    "about.heading": "Una base técnica con mirada de producto.",
    "about.subheading": "Mi trabajo combina ejecución, lectura de contexto y decisiones de diseño que reducen fricción para usuarios y equipos.",
    "about.photoLabel": "Foto profesional",
    "about.role": "Full Stack Developer",
    "about.body1": "Trabajo entre producto e implementación, convirtiendo necesidades en flujos claros, sistemas estables e interfaces legibles.",
    "about.body2": "Hoy mi enfoque es entregar software realmente útil: bien estructurado, escalable y fácil de evolucionar.",
    "about.links.github": "GitHub",
    "about.links.linkedin": "LinkedIn",
    "about.links.email": "Correo",
    "about.story.one.title": "Claridad primero",
    "about.story.one.copy": "Cada pantalla debe explicar el siguiente paso sin esfuerzo.",
    "about.story.two.title": "Arquitectura práctica",
    "about.story.two.copy": "Decisiones técnicas lo bastante simples para mantener el ritmo y sólidas para crecer.",
    "about.story.three.title": "Entrega orientada a valor",
    "about.story.three.copy": "El objetivo es siempre reducir ruido y aumentar la confianza del equipo y del usuario.",
    "about.badges.one": "React + TypeScript",
    "about.badges.two": "Node.js + Express",
    "about.badges.three": "Python + SQL",
    "about.badges.four": "UX + Producto",
    "skills.heading": "Habilidades organizadas por contexto",
    "skills.subheading": "Cuatro grupos visuales para navegar rápidamente por lo que hago mejor.",
    "skills.frontend.title": "Frontend",
    "skills.frontend.copy": "Interfaces responsivas, composición de componentes, rendimiento y consistencia visual.",
    "skills.backend.title": "Backend & APIs",
    "skills.backend.copy": "Capas de negocio, autenticación, servicios REST e integración entre sistemas.",
    "skills.data.title": "Datos & ML",
    "skills.data.copy": "Lectura de datos, indicadores, modelos predictivos y paneles para apoyar decisiones.",
    "skills.product.title": "Análisis & Producto",
    "skills.product.copy": "Levantamiento de requisitos, diseño de flujo, priorización y arquitectura de solución.",
    "projects.heading": "Proyectos que muestran problema, solución y resultado.",
    "projects.subheading": "Sin demo falsa, sin promesas vacías. Cada tarjeta comunica el contexto real y lo que se entregó.",
    "projects.problem": "Problema",
    "projects.solution": "Solución",
    "projects.result": "Resultado",
    "projects.nr1.title": "Canal seguro de denuncias y gestión de riesgos.",
    "projects.nr1.problem": "Crear un flujo anónimo, auditable y organizado para reportes laborales.",
    "projects.nr1.solution": "Estructura de formulario, panel administrativo, trazabilidad y experiencia clara para quien reporta.",
    "projects.nr1.result": "Un proceso más confiable, rastreable y alineado con el uso real del sistema.",
    "projects.med.title": "Predicción de escasez de medicamentos.",
    "projects.med.problem": "Anticipar consumo y riesgo para apoyar la gestión pública de salud.",
    "projects.med.solution": "Pipeline de datos, clasificación de riesgo y dashboard para decisiones rápidas.",
    "projects.med.result": "Los datos en bruto se convirtieron en apoyo práctico para análisis y priorización.",
    "projects.mix.title": "Verificación de mezclas químicas con lectura instantánea.",
    "projects.mix.problem": "Explicar riesgos de combinaciones químicas con rapidez y lenguaje accesible.",
    "projects.mix.solution": "Búsqueda por sustancia, historial, alertas visuales e interfaz modular.",
    "projects.mix.result": "Un front-end directo, legible y centrado en consulta segura.",
    "projects.rooms.title": "Control de salas, autenticación e informes en tiempo real.",
    "projects.rooms.problem": "Organizar la gestión de ambientes con acceso, monitoreo y control operativo.",
    "projects.rooms.solution": "Flujos de login, reportes PDF y seguimiento de temperatura con integración en tiempo real.",
    "projects.rooms.result": "La rutina quedó más trazable, visual y conectada con el uso diario.",
    "projects.code": "GitHub",
    "projects.readme": "Notas",
    "projects.access": "Solicitar acceso",
    "projects.contact": "Contacto",
    "process.heading": "Un proceso simple para reducir ruido y aumentar la entrega.",
    "process.subheading": "De la descubierta al ajuste final, con foco en decisiones visibles y comunicación directa.",
    "process.one.title": "Entender",
    "process.one.copy": "Contexto, restricciones, público y problema real antes de escribir la primera línea.",
    "process.two.title": "Estructurar",
    "process.two.copy": "Flujos, arquitectura y prioridad se convierten en un plan breve y ejecutable.",
    "process.three.title": "Construir",
    "process.three.copy": "Entrega en bloques cortos, con validación visual y técnica durante el camino.",
    "process.four.title": "Evolucionar",
    "process.four.copy": "Uso real, ajustes y aprendizaje continuo para mantener la solución útil.",
    "contact.heading": "Vamos a llevarlo a la realidad.",
    "contact.subheading": "Si quieres producto, integración o una solución más clara, respondo por WhatsApp, correo o LinkedIn.",
    "contact.whatsapp.label": "Canal principal",
    "contact.whatsapp.cta": "Escribir por WhatsApp",
    "contact.email.label": "Correo",
    "contact.linkedin.label": "LinkedIn",
    "form.name.label": "Nombre",
    "form.name.placeholder": "Tu nombre",
    "form.email.label": "Correo",
    "form.email.placeholder": "frjuniorfrjr@gmail.com",
    "form.message.label": "Mensaje",
    "form.message.placeholder": "Explica brevemente lo que necesitas.",
    "form.submit": "Preparar mensaje en WhatsApp",
    "form.note": "Revisa tu mensaje en WhatsApp antes de enviarlo.",
    "footer.counter": "Visitantes",
    "footer.counterTitle": "Visitas al portafolio",
    "footer.total": "Total",
    "footer.online": "En línea",
  },
};

const languageAliases = {
  pt: "pt",
  "pt-br": "pt",
  "pt-br.pt": "pt",
  en: "en",
  es: "es",
};

function normalizeLanguage(language) {
  const key = (language || "pt").toLowerCase();
  const normalized = languageAliases[key] || key.split("-")[0];
  return translations[normalized] ? normalized : "pt";
}

function applyTranslations(language) {
  const bundle = translations[language] || translations.pt;
  document.documentElement.lang = language === "pt" ? "pt-BR" : language === "en" ? "en" : "es";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    if (element.closest('[data-hero-intro][data-text-mounted="true"]')) return;
    const key = element.getAttribute("data-i18n");
    const value = bundle[key];
    if (typeof value === "string") {
      if (element.hasAttribute("data-text-effect")) {
        element.dataset.motionText = value;
        if (element.dataset.textMounted === "true") return;
      }
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    if (element.closest('[data-hero-intro][data-text-mounted="true"]')) return;
    const key = element.getAttribute("data-i18n-html");
    const value = bundle[key];
    if (typeof value === "string") {
      if (element.hasAttribute("data-text-effect")) {
        element.dataset.motionText = value;
        if (element.dataset.textMounted === "true") return;
      }
      element.innerHTML = value;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    const value = bundle[key];
    if (typeof value === "string") {
      element.setAttribute("placeholder", value);
    }
  });

  document.querySelectorAll("[data-lang-btn]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langBtn === language);
    button.setAttribute("aria-pressed", String(button.dataset.langBtn === language));
  });

  window.localStorage.setItem("portfolio-language", language);
  window.dispatchEvent(new Event("portfolio:language-change"));
}

function initLanguageSwitch() {
  const preferred = normalizeLanguage(window.localStorage.getItem("portfolio-language") || navigator.language);
  applyTranslations(preferred);

  document.querySelectorAll("[data-lang-btn]").forEach((button) => {
    button.addEventListener("click", () => applyTranslations(button.dataset.langBtn || "pt"));
  });
}

function initRevealAnimations() {
  const targets = document.querySelectorAll(".reveal");
  if (!targets.length || !("IntersectionObserver" in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach((element) => element.classList.add("visible"));
    return;
  }

  document.documentElement.classList.add("motion-ready");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  targets.forEach((element) => observer.observe(element));
}

function initWhatsAppLinks() {
  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    link.href = `https://wa.me/${WHATSAPP_NUMBER}`;
    link.target = "_blank";
    link.rel = "noreferrer";
  });
}

function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const language = normalizeLanguage(window.localStorage.getItem("portfolio-language") || document.documentElement.lang);
    const prefix = language === "en" ? "Hello, I came from your portfolio and would like to talk about:"
      : language === "es" ? "Hola, vengo de tu portafolio y me gustaría hablar sobre:"
      : "Olá, vim do seu portfólio e gostaria de falar sobre:";

    const composedMessage = [
      prefix,
      `Nome: ${name || "-"}`,
      `E-mail: ${email || "-"}`,
      `Mensagem: ${message || "-"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(composedMessage)}`;
    window.open(whatsappUrl, "_blank", "noreferrer");
  });
}

function initYear() {
  const year = document.querySelector("[data-year]");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
}

function formatCounter(value) {
  return new Intl.NumberFormat(document.documentElement.lang || "pt-BR").format(value);
}

function getLocalVisitCount() {
  const countKey = "portfolio-local-visit-count";
  const sessionKey = "portfolio-visit-counted";
  let count = Number(window.localStorage.getItem(countKey)) || 0;

  if (!window.sessionStorage.getItem(sessionKey)) {
    count += 1;
    window.localStorage.setItem(countKey, String(count));
    window.sessionStorage.setItem(sessionKey, "true");
  }

  return Math.max(count, 1);
}

async function initVisitorCounter() {
  const totalElement = document.querySelector("[data-visitor-total]");
  const onlineElement = document.querySelector("[data-visitor-online]");
  if (!totalElement || !onlineElement) return;

  totalElement.textContent = formatCounter(getLocalVisitCount());
  onlineElement.textContent = "1";

  if (window.location.protocol === "file:") return;

  try {
    const response = await fetch("https://visitor.6developer.com/visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        domain: window.location.hostname,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        page_path: window.location.pathname,
        page_title: document.title,
        referrer: "",
        search_query: "",
      }),
    });

    if (!response.ok) throw new Error("Visitor counter unavailable");
    const data = await response.json();
    const total = Number(data.totalCount ?? data.total ?? data.count);
    const online = Number(data.onlineCount ?? data.online ?? data.currentVisitors);

    if (Number.isFinite(total)) totalElement.textContent = formatCounter(total);
    if (Number.isFinite(online)) onlineElement.textContent = formatCounter(Math.max(online, 1));
  } catch {
    // The local value keeps both counters readable if the service is unavailable.
  }
}

initLanguageSwitch();
initWhatsAppLinks();
initContactForm();
initRevealAnimations();
initYear();
initVisitorCounter();

export { translations };
