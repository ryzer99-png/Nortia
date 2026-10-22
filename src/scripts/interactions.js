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
  // ── A. Gestión de Consentimiento Legal (Ley 1581 de 2012) ──
  const consentInputs = document.querySelectorAll('.nortia-consent-input');
  const privacyModal = document.getElementById('privacy-policy-modal');
  const closePrivacyModalBtn = document.getElementById('close-privacy-modal-btn');
  const modalBackdrop = document.getElementById('privacy-modal-backdrop');
  const acceptModalBtn = document.getElementById('accept-and-close-modal-btn');

  function isConsentGranted() {
    try {
      if (sessionStorage.getItem('nortia_data_consent') === 'true') return true;
    } catch (e) {
      // Fallback si storage está bloqueado
    }
    const anyChecked = Array.from(consentInputs).some(input => input.checked);
    return anyChecked;
  }

  function applyConsent(granted = true) {
    try {
      sessionStorage.setItem('nortia_data_consent', granted ? 'true' : 'false');
      if (granted) {
        sessionStorage.setItem('nortia_consent_timestamp', new Date().toISOString());
      }
    } catch (e) {}

    consentInputs.forEach(input => {
      input.checked = granted;
    });

    // Ocultar cualquier tooltip de validación activo
    document.querySelectorAll('[data-consent-tooltip]').forEach(tooltip => {
      tooltip.classList.remove('is-visible');
    });
    document.querySelectorAll('[data-consent-container]').forEach(container => {
      container.classList.remove('shake-attention');
    });
  }

  // Restaurar consentimiento en la sesión si ya fue otorgado previamente
  if (isConsentGranted()) {
    applyConsent(true);
  }

  // Sincronizar estado entre todos los checkboxes de la página
  consentInputs.forEach(input => {
    input.addEventListener('change', () => {
      applyConsent(input.checked);
    });
  });

  // ── B. Control del Modal / Drawer de Privacidad ──
  function openPrivacyModal() {
    if (!privacyModal) return;

    // Asegurar que el scroll siempre comience arriba
    const modalBody = privacyModal.querySelector('.privacy-modal-body');
    if (modalBody) {
      modalBody.scrollTop = 0;
    }

    privacyModal.removeAttribute('hidden');
    // Forzar reflow para animación suave
    void privacyModal.offsetWidth;
    privacyModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    // Auto-focus para accesibilidad sin forzar scroll del viewport
    if (closePrivacyModalBtn) {
      try {
        closePrivacyModalBtn.focus({ preventScroll: true });
      } catch (e) {
        closePrivacyModalBtn.focus();
      }
    }
  }

  function closePrivacyModal() {
    if (!privacyModal) return;
    privacyModal.classList.remove('is-open');
    document.body.style.overflow = '';
    setTimeout(() => {
      if (!privacyModal.classList.contains('is-open')) {
        privacyModal.setAttribute('hidden', '');
      }
    }, 250);
  }

  // Disparadores para abrir el modal en enlaces legales
  document.addEventListener('click', (e) => {
    const legalTrigger = e.target.closest('[data-open-privacy-modal], .legal-policy-trigger, .legal-modal-trigger');
    if (legalTrigger) {
      e.preventDefault();
      openPrivacyModal();
    }
  });

  if (closePrivacyModalBtn) closePrivacyModalBtn.addEventListener('click', closePrivacyModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closePrivacyModal);

  if (acceptModalBtn) {
    acceptModalBtn.addEventListener('click', () => {
      applyConsent(true);
      closePrivacyModal();
    });
  }

  // Cerrar con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && privacyModal && privacyModal.classList.contains('is-open')) {
      closePrivacyModal();
    }
  });

  // Función para destacar el checkbox con micro-resaltado y animación
  function highlightConsentRequirement(sourceElement) {
    // Buscar el checkbox más cercano al botón o el primero disponible en la pantalla
    let targetWrapper = null;
    if (sourceElement) {
      const section = sourceElement.closest('section, .hero-content, .cta-content, .footer-inner') || document;
      targetWrapper = section.querySelector('[data-consent-container]');
    }
    if (!targetWrapper) {
      targetWrapper = document.querySelector('[data-consent-container]');
    }

    if (targetWrapper) {
      const tooltip = targetWrapper.querySelector('[data-consent-tooltip]');
      const checkbox = targetWrapper.querySelector('.nortia-consent-input');

      targetWrapper.classList.remove('shake-attention');
      void targetWrapper.offsetWidth; // reiniciar animación
      targetWrapper.classList.add('shake-attention');

      if (tooltip) {
        tooltip.classList.add('is-visible');
        setTimeout(() => {
          tooltip.classList.remove('is-visible');
        }, 4500);
      }

      if (checkbox) {
        checkbox.focus({ preventScroll: true });
      }

      // Scroll suave hacia el contenedor si no está visible
      const rect = targetWrapper.getBoundingClientRect();
      const inView = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
      if (!inView) {
        targetWrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      // Si no hay checkbox en la vista (por ej. botón flotante aislado), abrir el modal de consulta
      openPrivacyModal();
    }
  }

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

  // 2. Eventos de WhatsApp en todo el sitio con Validación de Ley 1581
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

    const isWhatsAppAction = trigger.classList.contains('wa-btn') || topic || customMsg || 
      text.includes('Hablar con un asesor') || text.includes('Cotizar por WhatsApp') || 
      text.includes('Solicitar asesoría') || text.includes('Cotizar este Plan') || 
      text.includes('Solicitar Asesoría') || text.includes('Quiero una asesoría') ||
      text.includes('Asesoría Privada') || text.includes('Solicitar crédito');

    if (isWhatsAppAction) {
      e.preventDefault();

      // Validación jurídica: verificar consentimiento activo antes de disparar el contacto
      if (!isConsentGranted()) {
        highlightConsentRequirement(trigger);
        return;
      }

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
