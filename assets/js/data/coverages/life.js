// =========================================================
// NORTIA — Datos: Personas y Familias
// =========================================================

export const PERSONAS_DATA = {
  id: 'personas',
  url: './life.html',
  icon: 'family_restroom',
  title: 'Personas y familias',
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
    category: 'Personas y familias',
    title: 'Análisis de riesgo en personas',
    metric: '528.942 accidentes en 2024',
    source: 'Fuente: MinSalud – SGRL 2024',
    meaning: 'Cada día se califican en promedio más de 1.400 accidentes laborales en el país.',
    why: 'Un accidente o una enfermedad laboral puede afectar tu capacidad de generar ingresos de un día para otro.',
    action: 'Revisar qué coberturas de vida, salud y accidentes se ajustan a tu actividad y a tu familia.',
    waTopic: 'personas',
    waBtnText: 'Solicitar asesoría para personas'
  },

  // Contenido de la Subpágina Dedicada
  subpage: {
    breadcrumb: 'Personas y familias',
    badge: 'Línea personas',
    title: 'Seguros para personas y familias',
    subtitle: 'Protege tu bienestar físico, tu capacidad de generar ingresos y el futuro de tus seres queridos con planes a tu medida.',
    ctaHero: 'Solicitar asesoría para personas',
    riskBadge: 'Datos oficiales de riesgo',
    riskCtaBtn: 'Cotizar protección familiar en WhatsApp',

    // Sección de Tipos de Riesgo y Escenarios
    scenariosQuote: 'Tu capacidad de trabajar, tus ingresos y tu salud también hacen parte de lo que debes proteger.',
    scenarios: [
      {
        icon: 'favorite',
        title: 'Vida e invalidez',
        desc: 'La certeza de que a los tuyos nunca les faltará nada. Un fondo seguro que protege su calidad de vida y sus sueños, pase lo que pase.'
      },
      {
        icon: 'medical_services',
        title: 'Salud y medicina prepagada',
        desc: 'Salud sin esperas ni autorizaciones eternas. Acceso directo a los mejores especialistas, las mejores clínicas del país y trato humano cuando más lo necesitas.'
      },
      {
        icon: 'healing',
        title: 'Accidentes personales',
        desc: 'La vida da giros en un segundo. Cuentas con reembolso médico inmediato y respaldo económico para recuperarte con total calma.'
      },
      {
        icon: 'payments',
        title: 'Protección de ingresos',
        desc: 'Si una pausa médica te frena, tus ingresos no se detienen. Mantén tus cuentas al día y tu tranquilidad intacta mientras vuelves al ruedo.'
      },
      {
        icon: 'school',
        title: 'Rentas educativas',
        desc: 'El futuro profesional de tus hijos escrito en piedra. Su universidad asegurada desde hoy, sin importar los giros del destino.'
      },
      {
        icon: 'flight',
        title: 'Asistencia médica en viaje',
        desc: 'Empaca maletas sin preocupaciones. Asistencia médica en cualquier rincón del mundo, cobertura por pérdida de equipaje y emergencias resueltas.'
      },
      {
        icon: 'local_hospital',
        title: 'Renta diaria por hospitalización',
        desc: 'Un respiro económico cada día que estés internado, ayudándote a cubrir los gastos del día a día para que solo pienses en sanar.'
      }
    ],

    // Planes y Coberturas
    plansChip: 'Coberturas disponibles',
    plansTitle: 'Planes diseñados para tu tranquilidad',
    plansSubtitle: 'Opciones integrales adaptadas al momento de vida de tu familia.',
    plans: [
      {
        title: 'Salud y medicina prepagada',
        desc: 'Acceso directo a los mejores especialistas, clínicas de primer nivel y coberturas ambulatorias y hospitalarias sin trámites engorrosos.',
        features: ['Acceso a red médica preferencial', 'Cobertura nacional e internacional', 'Atención de urgencias 24/7']
      },
      {
        title: 'Seguro de vida e invalidez',
        desc: 'Respaldo financiero para tu familia en caso de fallecimiento, invalidez o enfermedades graves, garantizando su estabilidad económica.',
        features: ['Indemnización rápida para beneficiarios', 'Cobertura de enfermedades de alto costo', 'Protección de patrimonio familiar']
      },
      {
        title: 'Rentas y educación futura',
        desc: 'Garantiza que la educación de tus hijos continúe pase lo que pase, con planes de ahorro y protección educativa estructurada.',
        features: ['Fondos garantizados para universidad', 'Ahorro programado con rentabilidad', 'Asesoría pedagógica y patrimonial']
      }
    ],

    // FAQs
    faqsChip: 'Preguntas frecuentes',
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
