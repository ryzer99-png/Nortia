// =========================================================
// NORTIA — Client-Side Interactions & Legal Gate Modal
// =========================================================

import { SITE_CONTENT } from '@data/content.js';

let pendingWhatsAppAction = null;

/**
 * Consulta si el usuario ya autorizó el tratamiento de datos en la sesión actual
 */
export function isConsentGranted() {
  try {
    return sessionStorage.getItem('habeasDataAccepted') === 'true' ||
           sessionStorage.getItem('nortia_data_consent') === 'true';
  } catch (e) {
    return false;
  }
}

/**
 * Guarda el consentimiento legal en sessionStorage
 */
export function saveConsentState(granted = true) {
  try {
    sessionStorage.setItem('habeasDataAccepted', granted ? 'true' : 'false');
    sessionStorage.setItem('nortia_data_consent', granted ? 'true' : 'false');
    if (granted) {
      sessionStorage.setItem('nortia_consent_timestamp', new Date().toISOString());
    }
  } catch (e) {
    console.warn('[NORTIA Legal] Storage no disponible:', e);
  }
}

/**
 * Construye la URL de WhatsApp enriquecida con el mensaje según tema y contexto
 */
export function buildWhatsAppUrl(topic = 'general', customMessage = '') {
  const phone = SITE_CONTENT.brand.phone;

  let activeTopic = topic;
  if (!activeTopic || activeTopic === 'general') {
    const path = typeof window !== 'undefined' ? window.location.pathname : '';
    if (path.includes('empresas') || path.includes('business')) activeTopic = 'empresas';
    else if (path.includes('personas') || path.includes('life')) activeTopic = 'personas';
    else if (path.includes('hogar') || path.includes('home')) activeTopic = 'hogar';
    else if (path.includes('movilidad') || path.includes('mobility')) activeTopic = 'movilidad';
    else if (path.includes('creditos') || path.includes('credit')) activeTopic = 'creditos';
  }

  const message = customMessage || SITE_CONTENT.whatsappMessages[activeTopic] || SITE_CONTENT.whatsappMessages.general;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Abre WhatsApp respetando el Gate Modal de Protección de Datos
 */
export function openWhatsApp(topic = 'general', customMessage = '', bypassGate = false) {
  if (!bypassGate && !isConsentGranted()) {
    pendingWhatsAppAction = { topic, customMessage };
    if (typeof window !== 'undefined' && typeof window.__openPrivacyModal === 'function') {
      window.__openPrivacyModal(pendingWhatsAppAction);
    }
    return;
  }

  const url = buildWhatsAppUrl(topic, customMessage);
  window.open(url, '_blank');
}

// Exponer globalmente
if (typeof window !== 'undefined') {
  window.openWhatsApp = openWhatsApp;
  window.isConsentGranted = isConsentGranted;
}

export function initInteractions() {
  // ── A. Modal de Aviso de Privacidad y Tratamiento de Datos (Gate Modal) ──
  const privacyModal = document.getElementById('privacy-policy-modal');
  const closePrivacyModalBtn = document.getElementById('close-privacy-modal-btn');
  const modalBackdrop = document.getElementById('privacy-modal-backdrop');
  const acceptModalBtn = document.getElementById('accept-and-close-modal-btn');

  function openPrivacyModal(pendingAction = null) {
    if (pendingAction) {
      pendingWhatsAppAction = pendingAction;
    }
    if (!privacyModal) return;

    // Asegurar que el scroll comience en la parte superior
    const modalBody = privacyModal.querySelector('.privacy-modal-body');
    if (modalBody) {
      modalBody.scrollTop = 0;
    }

    privacyModal.removeAttribute('hidden');
    // Forzar reflow para animación suave
    void privacyModal.offsetWidth;
    privacyModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    // Auto-focus para accesibilidad sin forzar salto de scroll
    if (closePrivacyModalBtn) {
      try {
        closePrivacyModalBtn.focus({ preventScroll: true });
      } catch (e) {
        closePrivacyModalBtn.focus();
      }
    }
  }

  function closePrivacyModal(clearPending = true) {
    if (!privacyModal) return;
    privacyModal.classList.remove('is-open');
    document.body.style.overflow = '';

    if (clearPending) {
      pendingWhatsAppAction = null;
    }

    setTimeout(() => {
      if (!privacyModal.classList.contains('is-open')) {
        privacyModal.setAttribute('hidden', '');
      }
    }, 250);
  }

  // Exponer métodos de apertura y cierre para el interceptor
  window.__openPrivacyModal = openPrivacyModal;
  window.__closePrivacyModal = closePrivacyModal;

  // Cancelar / Cerrar modal sin redirigir (X, clic exterior en backdrop, Escape)
  if (closePrivacyModalBtn) {
    closePrivacyModalBtn.addEventListener('click', () => closePrivacyModal(true));
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', () => closePrivacyModal(true));
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && privacyModal && privacyModal.classList.contains('is-open')) {
      closePrivacyModal(true);
    }
  });

  // Acción "Aceptar y Continuar": registrar consentimiento y ejecutar redirección inmediata
  if (acceptModalBtn) {
    acceptModalBtn.addEventListener('click', () => {
      // 1. Guardar consentimiento en sessionStorage
      saveConsentState(true);

      // 2. Extraer destino pendiente
      const targetAction = pendingWhatsAppAction;

      // 3. Cerrar el modal
      closePrivacyModal(false);
      pendingWhatsAppAction = null;

      // 4. Si viene de un botón de contacto/WhatsApp, redirigir inmediatamente
      if (targetAction) {
        const topic = targetAction.topic || 'general';
        const msg = targetAction.customMsg || targetAction.customMessage || '';
        const url = buildWhatsAppUrl(topic, msg);
        window.open(url, '_blank');
      }
    });
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

  // 2. Eventos de WhatsApp en todo el sitio con Flujo Interceptado (Gate Modal)
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.wa-btn, button, a');
    if (!trigger) return;

    // Si el link va a una subpágina o archivo, permitir navegación normal
    if (trigger.tagName === 'A' && trigger.getAttribute('href') && !trigger.getAttribute('href').startsWith('#') && !trigger.classList.contains('wa-btn')) {
      return;
    }

    const topic = trigger.getAttribute('data-wa-topic');
    const customMsg = trigger.getAttribute('data-wa-msg');
    const text = (trigger.textContent || '').trim();

    const isWhatsAppAction = trigger.classList.contains('wa-btn') || topic || customMsg || 
      text.includes('Hablar con un asesor') || text.includes('Cotizar por WhatsApp') || 
      text.includes('Solicitar asesoría') || text.includes('Cotizar este Plan') || 
      text.includes('Solicitar Asesoría') || text.includes('Quiero una asesoría') ||
      text.includes('Asesoría Privada') || text.includes('Solicitar crédito');

    if (isWhatsAppAction) {
      e.preventDefault();

      // Si ya autorizó previamente en la sesión, pasar directo a WhatsApp
      if (isConsentGranted()) {
        const url = buildWhatsAppUrl(topic || 'general', customMsg || '');
        window.open(url, '_blank');
        return;
      }

      // Si no ha autorizado, interceptar y abrir el Gate Modal con destino guardado
      openPrivacyModal({
        topic: topic || 'general',
        customMsg: customMsg || ''
      });
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

  }
}
