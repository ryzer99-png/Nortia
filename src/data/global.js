// =========================================================
// NORTIA — Configuración Global y Datos de Marca
// =========================================================

export const GLOBAL_DATA = {
  // Información de contacto y marca
  brand: {
    name: 'NORTIA',
    tagline: 'Te guiamos para proteger lo que más valoras',
    phone: '573239004028', // Número de WhatsApp (código de país 57 para Colombia)
    email: 'info@nortia.com.co',
    location: 'Colombia',
    copyrightYear: 2026
  },

  // Mensajes preconfigurados para WhatsApp según el contexto del usuario (enfoque de asesoría)
  whatsappMessages: {
    personas: 'Hola Nortia, me gustaría recibir asesoría personalizada para la protección de personas y familias (salud / vida).',
    hogar: 'Hola Nortia, me gustaría recibir asesoría e información sobre la protección de mi hogar y patrimonio.',
    empresas: 'Hola Nortia, busco asesoría corporativa para blindar y proteger mi empresa / pyme.',
    movilidad: 'Hola Nortia, me gustaría recibir asesoría sobre opciones de protección todo riesgo / SOAT para mi vehículo o moto.',
    general: 'Hola Nortia, quisiera hablar con un agente para conocer su portafolio de seguros y recibir asesoría.'
  },

  // Menú de navegación principal
  nav: [
    { label: 'Protección', href: '#coberturas', icon: 'shield' },
    { label: 'Prevención', href: '#editorial', icon: 'lightbulb' },
    { label: 'El Camino', href: '#camino', icon: 'alt_route' }
  ],

  // Textos generales de pie de página
  footer: {
    brandDesc: 'Te guiamos para proteger lo que más valoras. Acompañamiento experto y preventivo en seguros.',
    btnText: 'Hablar con un asesor',
    col1Title: 'Protección',
    col2Title: 'Nosotros',
    col3Title: 'Contacto',
    termsText: 'Términos y condiciones',
    privacyText: 'Política de privacidad'
  }
};
