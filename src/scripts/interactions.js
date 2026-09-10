// =========================================================
// NORTIA — Client-Side Interactions
// =========================================================

import { SITE_CONTENT } from '@data/content.js';

export function openWhatsApp(topic = 'general', customMessage = '') {
  const phone = SITE_CONTENT.brand.phone;

  let activeTopic = topic;
  if (!activeTopic || activeTopic === 'general') {
    const path = window.location.pathname;
    if (path.includes('empresas') || path.includes('business')) activeTopic = 'empresas';
    else if (path.includes('personas') || path.includes('life')) activeTopic = 'personas';
    else if (path.includes('hogar') || path.includes('home')) activeTopic = 'hogar';
    else if (path.includes('movilidad') || path.includes('mobility')) activeTopic = 'movilidad';
    else if (path.includes('creditos') || path.includes('credit')) activeTopic = 'creditos';
  }

  const message = customMessage || SITE_CONTENT.whatsappMessages[activeTopic] || SITE_CONTENT.whatsappMessages.general;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// Exponer globalmente
if (typeof window !== 'undefined') {
  window.openWhatsApp = openWhatsApp;
}

export function initInteractions() {
  // 1. Mobile Drawer Navigation
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

  // 2. Eventos de WhatsApp en todo el sitio
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

    if (trigger.classList.contains('wa-btn') || topic || customMsg || text.includes('Hablar con un asesor') || text.includes('Cotizar por WhatsApp') || text.includes('Solicitar asesoría') || text.includes('Cotizar este Plan') || text.includes('Solicitar Asesoría') || text.includes('Quiero una asesoría')) {
      e.preventDefault();
      openWhatsApp(topic || 'general', customMsg || '');
    }
  });

  // 3. Flip Cards Handler (Touch & Desktop)
  document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.wa-btn') && !e.target.closest('a')) {
        card.classList.toggle('flipped');
      }
    });

    card.addEventListener('keydown', (e) => {
      if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('.wa-btn') && !e.target.closest('a')) {
        e.preventDefault();
        card.classList.toggle('flipped');
      }
    });

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

  // 4. Smooth Scroll para anclas
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

  // 5. Observadores de Scroll Reveal y Progreso de El Camino
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
}
