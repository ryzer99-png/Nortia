// =========================================================
// NORTIA — Configuración Global y Datos de Marca
// =========================================================

export const GLOBAL_DATA = {
  // Información de contacto y marca
  brand: {
    name: 'NORTIA',
    tagline: 'Encuentra tu Norte',
    phone: '573239004028', // Número de WhatsApp (código de país 57 para Colombia)
    email: 'info@nortia.com.co',
    location: 'Colombia',
    copyrightYear: 2026
  },

  // Mensajes preconfigurados para WhatsApp según el contexto del usuario
  whatsappMessages: {
    personas: 'Hola nortia, me gustaría recibir asesoría personalizada para la protección de personas y familias (salud / vida).',
    hogar: 'Hola nortia, me gustaría cotizar y recibir información sobre el seguro de hogar y patrimonio.',
    empresas: 'Hola nortia, busco asesoría corporativa para blindar y cotizar seguros para mi empresa / pyme.',
    movilidad: 'Hola nortia, me interesa cotizar un seguro todo riesgo / SOAT para mi vehículo o moto.',
    general: 'Hola nortia, quisiera hablar con un asesor para conocer sus opciones de seguros y recibir una cotización.'
  },

  // Menú de navegación principal
  nav: [
    { label: 'Protección', href: '#coberturas', icon: 'shield' },
    { label: 'Prevención', href: '#editorial', icon: 'lightbulb' },
    { label: 'El Camino', href: '#camino', icon: 'alt_route' }
  ],

  // Textos generales de pie de página
  footer: {
    brandDesc: 'Encontrando claridad para proteger lo que realmente importa. Acompañamiento experto y preventivo en seguros.',
    btnText: 'Hablar con un asesor',
    col1Title: 'Protección',
    col2Title: 'Nosotros',
    col3Title: 'Contacto',
    termsText: 'Términos y condiciones',
    privacyText: 'Política de privacidad'
  }
};
