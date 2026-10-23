// =========================================================
// NORTIA — Captura de Leads y Trazabilidad Legal (Ley 1581)
// =========================================================

/**
 * Prepara y enriquece el payload de un prospecto/lead con la
 * constancia jurídica de autorización requerida por la SIC y Ley 1581 de 2012.
 * 
 * @param {Object} leadData - Información suministrada por el usuario (nombre, teléfono, ramo, etc.)
 * @returns {Object} Payload listo para enviar a Supabase, CRM o Webhook
 */
export function buildLeadPayload(leadData = {}) {
  const timestamp = new Date().toISOString();
  
  return {
    ...leadData,
    autoriza_datos: true,
    origen: 'landing_web',
    fecha_autorizacion: timestamp,
    normativa_aceptada: 'Ley 1581 de 2012 / Decreto 1377 de 2013',
    canal_consentimiento: 'gate_modal_opt_in_web',
    ip_registro: typeof window !== 'undefined' ? (window.__client_ip || 'client_browser') : 'server',
    url_origen: typeof window !== 'undefined' ? window.location.href : 'https://nortia.com.co/'
  };
}

/**
 * Registra el evento de autorización de datos en la sesión actual
 */
export function saveConsentState(accepted = true) {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem('habeasDataAccepted', accepted ? 'true' : 'false');
    sessionStorage.setItem('nortia_data_consent', accepted ? 'true' : 'false');
    sessionStorage.setItem('nortia_consent_timestamp', new Date().toISOString());
  } catch (err) {
    console.warn('[NORTIA Legal] Storage no disponible:', err);
  }
}

/**
 * Consulta si el usuario ya autorizó el tratamiento en esta sesión
 */
export function hasConsented() {
  if (typeof window === 'undefined') return false;
  try {
    return sessionStorage.getItem('habeasDataAccepted') === 'true' ||
           sessionStorage.getItem('nortia_data_consent') === 'true';
  } catch {
    return false;
  }
}
