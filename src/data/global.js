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
    copyrightYear: 2026,
    social: {
      instagram: 'https://www.instagram.com/nortiaseguros/',
      facebook: 'https://www.facebook.com/profile.php?id=61593321252648'
    }
  },

  // Mensajes preconfigurados para WhatsApp con constancia expresa de aceptación Ley 1581 de 2012
  whatsappMessages: {
    personas: 'Hola NORTIA, deseo cotizar mi seguro de Personas / Salud / Vida. He leído y acepto la política de tratamiento de datos para recibir mi asesoría.',
    hogar: 'Hola NORTIA, deseo cotizar mi seguro de Hogar y patrimonio. He leído y acepto la política de tratamiento de datos para recibir mi asesoría.',
    empresas: 'Hola NORTIA, deseo cotizar el seguro para mi Empresa / Pyme. He leído y acepto la política de tratamiento de datos para recibir mi asesoría.',
    movilidad: 'Hola NORTIA, deseo cotizar mi seguro de Auto / Movilidad. He leído y acepto la política de tratamiento de datos para recibir mi asesoría.',
    creditos: 'Hola NORTIA, deseo cotizar las opciones de crédito y financiación. He leído y acepto la política de tratamiento de datos para recibir mi asesoría.',
    general: 'Hola NORTIA, deseo cotizar mi asesoría en seguros. He leído y acepto la política de tratamiento de datos para recibir mi asesoría.'
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
    privacyText: 'Política de Tratamiento de Datos Personales | NORTIA Seguros'
  }
};
