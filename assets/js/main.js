// =========================================================
// NORTIA — Interactive JavaScript (Hydration & Data-Driven Engine)
// =========================================================

import { SITE_CONTENT } from './data/content.js';
import { ASSETS } from './data/assets.js';

export { SITE_CONTENT, ASSETS };

// --- Helper: Resolver propiedades anidadas ("hero.titleLine1") ---
function resolveProp(obj, path) {
  return path.split('.').reduce((prev, curr) => (prev ? prev[curr] : undefined), obj);
}

// --- WhatsApp Action Handler ---
export function openWhatsApp(topic = 'general', customMessage = '') {
  const phone = SITE_CONTENT.brand.phone;

  // Detección automática del contexto de página si es general
  let activeTopic = topic;
  if (!activeTopic || activeTopic === 'general') {
    const path = window.location.pathname;
    if (path.includes('empresas')) activeTopic = 'empresas';
    else if (path.includes('personas')) activeTopic = 'personas';
    else if (path.includes('hogar')) activeTopic = 'hogar';
    else if (path.includes('movilidad')) activeTopic = 'movilidad';
  }

  const message = customMessage || SITE_CONTENT.whatsappMessages[activeTopic] || SITE_CONTENT.whatsappMessages.general;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// Exponer globalmente
window.openWhatsApp = openWhatsApp;
window.NORTIA_CONTENT = SITE_CONTENT;
window.NORTIA_ASSETS = ASSETS;

// --- 1. Motor de Hidratación de Textos y Assets ---
function hydrateStaticBindings() {
  document.querySelectorAll('[data-text]').forEach(el => {
    const key = el.getAttribute('data-text');
    const val = resolveProp(SITE_CONTENT, key);
    if (val !== undefined) el.textContent = val;
  });

  document.querySelectorAll('[data-html]').forEach(el => {
    const key = el.getAttribute('data-html');
    const val = resolveProp(SITE_CONTENT, key);
    if (val !== undefined) el.innerHTML = val;
  });

  document.querySelectorAll('[data-asset]').forEach(el => {
    const key = el.getAttribute('data-asset');
    const val = resolveProp(ASSETS, key);
    if (val !== undefined) el.setAttribute('src', val);
  });
}

// --- 2. Renderizado Dinámico de Coberturas (Flip Cards en Home) ---
function renderCoberturas() {
  const grid = document.getElementById('coberturas-cards-grid');
  if (!grid || !SITE_CONTENT.coberturas?.cards) return;

  grid.innerHTML = SITE_CONTENT.coberturas.cards.map((card, index) => {
    const imgUrl = ASSETS.coberturas?.[card.id] || '';
    const delay = (index + 1) * 100;
    const subpageUrl = card.url || `./${card.id}.html`;

    return `
      <div id="${card.id}" class="flip-card scroll-reveal reveal-fade-up delay-${delay}" tabindex="0">
        <div class="flip-card-inner">
          <!-- Cara Frontal -->
          <div class="flip-card-front card-front">
            <div class="card-brand-badge" title="NORTIA">
              <img alt="NORTIA" src="${ASSETS.logos.favicon}">
            </div>
            <img class="card-cover-img" alt="${card.title}" src="${imgUrl}">
            <div class="gradient-overlay"></div>
            <div class="card-content">
              <div class="card-icon">
                <span class="material-symbols-outlined" style="font-size:24px">${card.icon}</span>
              </div>
              <h3>${card.title}</h3>
              <p>${card.frontDesc}</p>
              <div class="card-tags">
                ${card.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
              </div>
              <div class="card-flip-prompt" role="button" aria-label="Toca para voltear y leer qué incluye">
                <div class="prompt-left">
                  <span class="material-symbols-outlined prompt-icon">touch_app</span>
                  <span class="prompt-text">Toca para leer qué incluye</span>
                </div>
                <span class="material-symbols-outlined prompt-arrow">arrow_forward</span>
              </div>
            </div>
          </div>

          <!-- Cara Trasera -->
          <div class="flip-card-back card-back">
            <div class="card-back-main">
              <div class="back-header">
                <div class="card-back-icon">
                  <span class="material-symbols-outlined" style="font-size:24px">${card.icon}</span>
                </div>
                <h3>${card.title}</h3>
                <p class="desc">${card.backDesc}</p>
              </div>
              <ul class="card-features">
                ${card.features.map(f => `<li><span class="check">✓</span> <span>${f}</span></li>`).join('')}
              </ul>
            </div>
            <div class="card-back-actions">
              <a href="${subpageUrl}" class="btn-subpage-link">
                <span>Ver coberturas completas</span>
                <span class="material-symbols-outlined" style="font-size:16px">arrow_forward</span>
              </a>
              <button data-wa-topic="${card.waTopic}" class="wa-btn btn-wa" style="margin-top:0">
                <span class="material-symbols-outlined" style="font-size:18px">chat</span>
                <span>Cotizar por WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// --- 3. Renderizado Dinámico de Pasos (El Camino) ---
function renderCaminoSteps() {
  const container = document.getElementById('camino-steps-container');
  if (!container || !SITE_CONTENT.camino?.steps) return;

  container.innerHTML = SITE_CONTENT.camino.steps.map((step, idx) => {
    const isEven = idx % 2 === 1;
    const imgUrl = Array.isArray(ASSETS.camino) ? ASSETS.camino[idx] : (ASSETS.camino?.[`paso${idx+1}`] || '');

    return `
      <div class="path-step ${isEven ? 'step-even' : ''}">
        <div class="img-col scroll-reveal reveal-scale delay-200" style="position:relative">
          <div class="card-brand-badge" title="NORTIA">
            <img alt="NORTIA" src="${ASSETS.logos.favicon}">
          </div>
          <img alt="${step.title}" src="${imgUrl}">
        </div>
        <div class="text-col step-text scroll-reveal reveal-fade-up">
          <div class="step-badge"><span class="dot"></span><span>PASO ${step.number}</span></div>
          <h3>${step.title}</h3>
          <p>${step.desc}</p>
        </div>
      </div>
    `;
  }).join('');
}

// --- 4. Renderizado Dinámico de Métricas Oficiales en Home ---
function renderStatTabs() {
  const container = document.getElementById('stat-tabs-grid');
  const spotlight = SITE_CONTENT.datosOficiales?.riskSpotlight;
  if (!container || !spotlight) return;

  const entries = Object.entries(spotlight);
  container.innerHTML = entries.map(([key, data], idx) => {
    const delay = (idx + 1) * 100;
    const shortCategory = data.category.split(' ')[0];
    const subpageUrl = `./${key}.html`;

    return `
      <a href="${subpageUrl}" class="risk-tab-btn scroll-reveal reveal-fade-up delay-${delay}" style="text-decoration:none">
        <div>
          <div class="tab-top">
            <div class="tab-label">
              <span class="material-symbols-outlined" style="font-size:16px">${data.icon}</span>
              <span>${shortCategory}</span>
            </div>
          </div>
          <div class="tab-metric">${data.metric.split(' ')[0]}</div>
          <p class="tab-desc">${data.title}</p>
        </div>
        <div class="tab-footer">
          <span>Ver análisis y planes</span>
          <span class="material-symbols-outlined" style="font-size:16px">arrow_forward</span>
        </div>
      </a>
    `;
  }).join('');
}

// --- 5. Renderizado Dinámico de Subpáginas Dedicadas ---
function renderSubpageContent() {
  const plansContainer = document.getElementById('subpage-plans-container');
  const faqsContainer = document.getElementById('subpage-faqs-container');
  const scenariosContainer = document.getElementById('subpage-scenarios-container');
  const scenariosQuoteEl = document.getElementById('subpage-scenarios-quote');

  if (!plansContainer && !faqsContainer && !scenariosContainer) return;

  const path = window.location.pathname;
  let pageKey = 'personas';
  let targetNoun = 'Familia';
  if (path.includes('hogar')) { pageKey = 'hogar'; targetNoun = 'Hogar'; }
  else if (path.includes('empresas')) { pageKey = 'empresas'; targetNoun = 'Empresa'; }
  else if (path.includes('movilidad')) { pageKey = 'movilidad'; targetNoun = 'Vehículo'; }

  const subData = SITE_CONTENT.subpages?.[pageKey];
  if (!subData) return;

  // Renderizado de Cita de Contexto y Escenarios
  if (scenariosQuoteEl && subData.scenariosQuote) {
    scenariosQuoteEl.textContent = `“${subData.scenariosQuote}”`;
  }

  if (scenariosContainer && subData.scenarios) {
    scenariosContainer.innerHTML = subData.scenarios.map((item, idx) => {
      const ctaBtn = item.ctaText ? `
        <button data-wa-topic="${pageKey}" ${item.waMsg ? `data-wa-msg="${item.waMsg}"` : ''} class="wa-btn btn-scenario-cta">
          <span class="material-symbols-outlined">chat</span>
          <span>${item.ctaText}</span>
        </button>
      ` : '';

      return `
        <div class="scenario-item scroll-reveal reveal-fade-up delay-${(idx % 3 + 1) * 100}">
          <div class="item-icon">
            <span class="material-symbols-outlined">${item.icon || 'verified'}</span>
          </div>
          <div style="flex:1">
            <h4>${item.title}</h4>
            <p>${item.desc}</p>
            ${ctaBtn}
          </div>
        </div>
      `;
    }).join('');
  }

  // Renderizado de Planes
  if (plansContainer && subData.plans) {
    plansContainer.innerHTML = subData.plans.map((plan, idx) => {
      const planMsg = `Hola NORTIA, me gustaría recibir asesoría y cotizar el plan: ${plan.title} para mi ${targetNoun}.`;
      return `
        <div class="coverage-plan-card scroll-reveal reveal-fade-up delay-${(idx + 1) * 100}">
          <div>
            <h3>${plan.title}</h3>
            <p class="plan-desc">${plan.desc}</p>
            <ul class="coverage-feature-list">
              ${plan.features.map(f => `<li><span class="check">✓</span> <span>${f}</span></li>`).join('')}
            </ul>
          </div>
          <button data-wa-topic="${pageKey}" data-wa-msg="${planMsg}" class="wa-btn btn-wa">
            <span class="material-symbols-outlined" style="font-size:18px">chat</span>
            <span>Cotizar este Plan</span>
          </button>
        </div>
      `;
    }).join('');
  }

  // Renderizado de FAQs
  if (faqsContainer && subData.faqs) {
    faqsContainer.innerHTML = subData.faqs.map(faq => `
      <div class="faq-item">
        <h4>${faq.q}</h4>
        <p>${faq.a}</p>
      </div>
    `).join('');
  }
}

// --- 6. Inicialización General y Eventos ---
document.addEventListener('DOMContentLoaded', () => {
  // 1. Inyectar datos y renderizar componentes
  hydrateStaticBindings();
  renderCoberturas();
  renderCaminoSteps();
  renderStatTabs();
  renderSubpageContent();

  // 2. Mobile Drawer Navigation
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const navDrawer = document.getElementById('nav-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const drawerLinks = document.querySelectorAll('.nav-drawer-link');

  function openDrawer() {
    if (navDrawer && drawerBackdrop) {
      navDrawer.classList.add('is-open');
      drawerBackdrop.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (navDrawer && drawerBackdrop) {
      navDrawer.classList.remove('is-open');
      drawerBackdrop.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // 3. Eventos de WhatsApp en todo el sitio
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.wa-btn, button, a');
    if (!trigger) return;

    // Si el link va a una subpágina, permitir navegación normal
    if (trigger.tagName === 'A' && trigger.getAttribute('href') && !trigger.getAttribute('href').startsWith('#') && !trigger.classList.contains('wa-btn')) {
      return;
    }

    const topic = trigger.getAttribute('data-wa-topic');
    const customMsg = trigger.getAttribute('data-wa-msg');
    const text = trigger.textContent || '';

    if (trigger.classList.contains('wa-btn') || topic || customMsg || text.includes('Hablar con un asesor') || text.includes('Cotizar por WhatsApp') || text.includes('Cotizar este Plan') || text.includes('Quiero una asesoría')) {
      e.preventDefault();
      openWhatsApp(topic || 'general', customMsg || '');
    }
  });

  // 4. Flip Cards Handler (Touch & Desktop)
  document.querySelectorAll('.flip-card').forEach(card => {
    // Click / Tap para alternar vuelta (gira y regresa)
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.wa-btn') && !e.target.closest('a')) {
        card.classList.toggle('flipped');
      }
    });

    // Accesibilidad por teclado (Enter o Espacio)
    card.addEventListener('keydown', (e) => {
      if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('.wa-btn') && !e.target.closest('a')) {
        e.preventDefault();
        card.classList.toggle('flipped');
      }
    });

    // En dispositivos con cursor (mouse): al pasar el cursor gira, al salir regresa
    card.addEventListener('mouseenter', () => {
      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        card.classList.add('flipped');
      }
    });

    card.addEventListener('mouseleave', () => {
      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        card.classList.remove('flipped');
      }
    });
  });

  // 5. Smooth Scroll para anclas
  document.querySelectorAll('a[href^="#"]:not(.wa-btn)').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // 6. Observadores de Scroll Reveal y Progreso de El Camino
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!isReducedMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.1
    });

    document.querySelectorAll('.scroll-reveal').forEach(el => {
      revealObserver.observe(el);
    });

    const pathSteps = document.querySelectorAll('.path-step');
    const clipRect = document.getElementById('camino-clip-rect');
    const totalSteps = pathSteps.length || 5;

    if (pathSteps.length > 0) {
      const stepObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active-step');
          } else {
            entry.target.classList.remove('active-step');
          }
        });

        if (clipRect) {
          const activeCount = document.querySelectorAll('.path-step.active-step').length;
          const ratio = activeCount / totalSteps;
          clipRect.setAttribute('height', `${1500 * ratio}`);
        }
      }, {
        root: null,
        rootMargin: '0px 0px -15% 0px',
        threshold: 0.2
      });

      pathSteps.forEach(step => stepObserver.observe(step));
    }
  } else {
    document.querySelectorAll('.scroll-reveal').forEach(el => {
      el.classList.add('is-visible');
      el.style.opacity = '1';
      el.style.transform = 'none';
    });

    document.querySelectorAll('.path-step').forEach(el => {
      el.classList.add('active-step');
    });

    const progressLine = document.getElementById('camino-progress-line');
    if (progressLine) progressLine.style.height = '100%';
  }
});
