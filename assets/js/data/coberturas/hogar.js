// =========================================================
// NORTIA — Datos: Hogar y Patrimonio
// =========================================================

export const HOGAR_DATA = {
  id: 'hogar',
  url: './hogar.html',
  icon: 'home_work',
  title: 'Hogar y Patrimonio',
  frontDesc: 'Protege el resultado de años de trabajo y esfuerzo.',
  tags: ['Sismo', 'Incendio', 'Inundación', 'Contenidos'],
  backDesc: 'No sería justo que años de esfuerzo pudieran perderse en segundos por un evento de la naturaleza sin siquiera haber revisado las alternativas de protección.',
  features: [
    'Sismo, terremoto y catástrofes naturales',
    'Incendio, rayo y explosión',
    'Inundación y daños por agua',
    'Estructura, contenidos y asistencias 24/7'
  ],
  waTopic: 'hogar',

  // Datos oficiales de riesgo
  riskSpotlight: {
    icon: 'home',
    category: 'Hogar y Patrimonio',
    title: 'Análisis de Riesgo en Hogar',
    metric: '9,3% de viviendas aseguradas',
    source: 'Fuente: Fasecolda, marzo 2026',
    meaning: 'De cada 10 viviendas en Colombia, menos de 1 cuenta con algún seguro de hogar. El 90,7% permanece desprotegido.',
    why: 'Un sismo, un incendio o una inundación pueden afectar tu vivienda sin previo aviso, y reconstruir rara vez es económico.',
    action: 'Conocer qué cubre un seguro de hogar y compararlo con el valor real de lo que ya construiste.',
    waTopic: 'hogar',
    waBtnText: 'Solicitar Asesoría para Hogar'
  },

  // Contenido de la Subpágina Dedicada
  subpage: {
    badge: 'Línea Hogar',
    title: 'Seguro de Hogar y Patrimonio',
    subtitle: 'Tu casa representa años de esfuerzo y construcción. Protégela contra desastres, imprevistos y daños a terceros.',
    ctaHero: 'Solicitar Asesoría para Hogar',
    riskBadge: 'Datos Oficiales de Riesgo',
    riskCtaBtn: 'Cotizar Seguro de Hogar en WhatsApp',

    // Sección de Tipos de Riesgo y Escenarios
    scenariosQuote: 'No sería justo que años de esfuerzo pudieran perderse en segundos por un evento de la naturaleza sin siquiera haber revisado las alternativas de protección.',
    scenarios: [
      {
        icon: 'landslide',
        title: 'Sismo y Terremoto',
        desc: 'Protección estructural completa para reconstrucción en caso de movimientos telúricos o sismos.'
      },
      {
        icon: 'local_fire_department',
        title: 'Incendio y Explosión',
        desc: 'Cobertura ante incendios accidentales, rayos o daños por humo tanto en la vivienda como en muebles.'
      },
      {
        icon: 'water_damage',
        title: 'Inundación y Daños por Agua',
        desc: 'Respaldo ante lluvias torrenciales, desbordamientos o rotura de tuberías internas del inmueble.'
      },
      {
        icon: 'apartment',
        title: 'Estructura y Edificación',
        desc: 'Protección de muros, techos, pisos e instalaciones fijas a su valor comercial real.'
      },
      {
        icon: 'tv',
        title: 'Contenidos y Tecnología',
        desc: 'Reposición de electrodomésticos, enseres y equipos electrónicos ante hurto calificado o cortocircuito.'
      },
      {
        icon: 'handshake',
        title: 'Responsabilidad Civil Familiar',
        desc: 'Amparo económico por daños o lesiones que tú, tus hijos o mascotas puedan causar a terceros o vecinos.'
      }
    ],

    // Planes y Coberturas
    plansChip: 'Coberturas Disponibles',
    plansTitle: 'Tu vivienda y enseres siempre seguros',
    plansSubtitle: 'Planes diseñados para propietarios e inquilinos en Colombia.',
    plans: [
      {
        title: 'Estructura & Edificación',
        desc: 'Cubre la estructura física de tu casa o apartamento frente a terremotos, incendios, inundaciones y eventos naturales.',
        features: ['Cobertura total por sismo o erupción', 'Protección contra daños por agua', 'Reconstrucción a valor comercial']
      },
      {
        title: 'Contenidos & Enseres',
        desc: 'Protege tus muebles, electrodomésticos, equipos de tecnología y joyas frente a hurtos calificados o daños accidentales.',
        features: ['Reposición de equipos electrónicos', 'Cobertura contra hurto dentro del predio', 'Protección ante variaciones de voltaje']
      },
      {
        title: 'Asistencias Domiciliarias 24/7',
        desc: 'Servicios de emergencia para tu hogar sin costo adicional cuando más lo necesitas.',
        features: ['Plomería y electricidad de emergencia', 'Cerrajería y rotura de vidrios', 'Alojamiento temporal por siniestro']
      }
    ],

    // FAQs
    faqsChip: 'Preguntas Frecuentes',
    faqsTitle: 'Dudas habituales sobre seguros de hogar',
    faqs: [
      {
        q: '¿Si vivo en arriendo puedo asegurar mis cosas?',
        a: 'Sí, puedes contratar una póliza exclusiva para "Contenidos", protegiendo tus muebles, tecnología y ropa sin necesidad de ser dueño del inmueble.'
      },
      {
        q: '¿El seguro de hogar incluye responsabilidad civil?',
        a: 'Sí, cubre los daños que tú, tu familia o tus mascotas puedan causar accidentalmente a vecinos o terceras personas.'
      }
    ],
    finalCtaTitle: 'Protege el techo que cobija a los tuyos.',
    finalCtaSubtitle: 'En NORTIA te guiamos paso a paso para asegurar tu patrimonio con claridad.',
    finalCtaBtn: 'Hablar con un asesor en WhatsApp'
  }
};
