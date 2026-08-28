// =========================================================
// NORTIA — Configuración Global y Datos de Marca
// =========================================================

export const GLOBAL_DATA = {
  // Información de contacto y marca
  brand: {
    name: 'NORTIA',
    tagline: 'Encuentra tu Norte',
    phone: '573000000000', // Número de WhatsApp (código de país 57 para Colombia)
    email: 'contacto@nortia.com',
    location: 'Colombia',
    copyrightYear: 2026
  },

  // Mensajes preconfigurados para WhatsApp según el contexto del usuario
  whatsappMessages: {
    personas: 'Hola NORTIA, me gustaría recibir asesoría personalizada para la protección de Personas y Familias (Salud / Vida).',
    hogar: 'Hola NORTIA, me gustaría cotizar y recibir información sobre el seguro de Hogar y Patrimonio.',
    empresas: 'Hola NORTIA, busco asesoría corporativa para blindar y cotizar seguros para mi Empresa / PyME.',
    movilidad: 'Hola NORTIA, me interesa cotizar un seguro Todo Riesgo / SOAT para mi Vehículo o Moto.',
    general: 'Hola NORTIA, quisiera hablar con un asesor para conocer sus opciones de seguros y recibir una cotización.'
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
    termsText: 'Términos y Condiciones',
    privacyText: 'Política de Privacidad'
  }
};
