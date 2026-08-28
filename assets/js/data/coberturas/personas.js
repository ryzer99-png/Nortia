// =========================================================
// NORTIA — Datos: Personas y Familias
// =========================================================

export const PERSONAS_DATA = {
  id: 'personas',
  url: './personas.html',
  icon: 'family_restroom',
  title: 'Personas y Familias',
  frontDesc: 'Protege a quienes más quieres y aquello que les permite seguir adelante.',
  tags: ['Vida', 'Salud', 'Accidentes', 'Ingresos'],
  backDesc: 'Tu capacidad de trabajar, tus ingresos y tu salud también hacen parte de lo que debes proteger.',
  features: [
    'Vida y respaldo ante fallecimiento',
    'Salud especializada y medicina prepagada',
    'Accidentes personales y auxilio médico',
    'Protección de ingresos e invalidez'
  ],
  waTopic: 'personas',

  // Datos oficiales de riesgo
  riskSpotlight: {
    icon: 'person',
    category: 'Personas y Familias',
    title: 'Análisis de Riesgo en Personas',
    metric: '528.942 accidentes en 2024',
    source: 'Fuente: MinSalud – SGRL 2024',
    meaning: 'Cada día se califican en promedio más de 1.400 accidentes laborales en el país.',
    why: 'Un accidente o una enfermedad laboral puede afectar tu capacidad de generar ingresos de un día para otro.',
    action: 'Revisar qué coberturas de vida, salud y accidentes se ajustan a tu actividad y a tu familia.',
    waTopic: 'personas',
    waBtnText: 'Solicitar Asesoría para Personas'
  },

  // Contenido de la Subpágina Dedicada
  subpage: {
    badge: 'Línea Personas',
    title: 'Seguros para Personas y Familias',
    subtitle: 'Protege tu bienestar físico, tu capacidad de generar ingresos y el futuro de tus seres queridos con planes a tu medida.',
    ctaHero: 'Solicitar Asesoría para Personas',
    riskBadge: 'Datos Oficiales de Riesgo',
    riskCtaBtn: 'Cotizar Protección Familiar en WhatsApp',

    // Sección de Tipos de Riesgo y Escenarios
    scenariosQuote: 'Tu capacidad de trabajar, tus ingresos y tu salud también hacen parte de lo que debes proteger.',
    scenarios: [
      {
        icon: 'favorite',
        title: 'Vida e Invalidez',
        desc: 'Respaldo financiero para tu familia en caso de fallecimiento, invalidez accidental o enfermedad grave.'
      },
      {
        icon: 'medical_services',
        title: 'Salud & Medicina Prepagada',
        desc: 'Atención médica con libre elección de especialistas, clínicas preferenciales y urgencias sin filas.'
      },
      {
        icon: 'healing',
        title: 'Accidentes Personales',
        desc: 'Indemnizaciones económicas y reembolso de gastos médicos inmediatos ante cualquier eventualidad.'
      },
      {
        icon: 'payments',
        title: 'Protección de Ingresos',
        desc: 'Garantía de continuidad en tus ingresos habituales en caso de incapacidad médica temporal o prolongada.'
      },
      {
        icon: 'school',
        title: 'Rentas Educativas',
        desc: 'Fondos garantizados para la educación superior de tus hijos, pase lo que pase en el camino.'
      },
      {
        icon: 'flight',
        title: 'Asistencia Médica en Viaje',
        desc: 'Cobertura médica y repatriación internacional para ti y tu familia durante vacaciones o viajes de trabajo.'
      }
    ],

    // Planes y Coberturas
    plansChip: 'Coberturas Disponibles',
    plansTitle: 'Planes diseñados para tu tranquilidad',
    plansSubtitle: 'Opciones integrales adaptadas al momento de vida de tu familia.',
    plans: [
      {
        title: 'Salud & Medicina Prepagada',
        desc: 'Acceso directo a los mejores especialistas, clínicas de primer nivel y coberturas ambulatorias y hospitalarias sin trámites engorrosos.',
        features: ['Acceso a red médica preferencial', 'Cobertura nacional e internacional', 'Atención de urgencias 24/7']
      },
      {
        title: 'Seguro de Vida & Invalidez',
        desc: 'Respaldo financiero para tu familia en caso de fallecimiento, invalidez o enfermedades graves, garantizando su estabilidad económica.',
        features: ['Indemnización rápida para beneficiarios', 'Cobertura de enfermedades de alto costo', 'Protección de patrimonio familiar']
      },
      {
        title: 'Rentas & Educación Futura',
        desc: 'Garantiza que la educación de tus hijos continúe pase lo que pase, con planes de ahorro y protección educativa estructurada.',
        features: ['Fondos garantizados para universidad', 'Ahorro programado con rentabilidad', 'Asesoría pedagógica y patrimonial']
      }
    ],

    // FAQs
    faqsChip: 'Preguntas Frecuentes',
    faqsTitle: 'Dudas habituales sobre este seguro',
    faqs: [
      {
        q: '¿Qué diferencia hay entre una EPS y un Seguro de Salud privado?',
        a: 'Mientras la EPS cubre el plan obligatorio, el seguro de salud privado te da libre elección de médicos especialistas, habitaciones individuales, reembolsos y acceso directo sin autorizaciones previas.'
      },
      {
        q: '¿A qué edad es recomendable contratar un seguro de vida?',
        a: 'Entre más joven lo adquieras, más económica es la prima mensual y mayores son los beneficios acumulados sin preexistencias médicas.'
      }
    ],
    finalCtaTitle: 'Protege lo más valioso que tienes: tu familia.',
    finalCtaSubtitle: 'En NORTIA te ayudamos a comparar opciones para que tomes la mejor decisión sin pagar de más.',
    finalCtaBtn: 'Hablar con un asesor en WhatsApp'
  }
};
