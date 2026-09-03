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
    category: 'Hogar y patrimonio',
    title: 'Análisis de riesgo en hogar',
    metric: '9,3% de viviendas aseguradas',
    source: 'Fuente: Fasecolda, marzo 2026',
    meaning: 'De cada 10 viviendas en Colombia, menos de 1 cuenta con algún seguro de hogar. El 90,7% permanece desprotegido.',
    why: 'Un sismo, un incendio o una inundación pueden afectar tu vivienda sin previo aviso, y reconstruir rara vez es económico.',
    action: 'Conocer qué cubre un seguro de hogar y compararlo con el valor real de lo que ya construiste.',
    waTopic: 'hogar',
    waBtnText: 'Solicitar asesoría para hogar'
  },

  // Contenido de la Subpágina Dedicada
  subpage: {
    badge: 'Línea hogar',
    title: 'Seguro de hogar y patrimonio',
    subtitle: 'Tu casa representa años de esfuerzo y construcción. Protégela contra desastres, imprevistos y daños a terceros.',
    ctaHero: 'Solicitar asesoría para hogar',
    riskBadge: 'Datos oficiales de riesgo',
    riskCtaBtn: 'Cotizar seguro de hogar en WhatsApp',

    // Sección de Tipos de Riesgo y Escenarios
    scenariosQuote: 'No sería justo que años de esfuerzo pudieran perderse en segundos por un evento de la naturaleza sin siquiera haber revisado las alternativas de protección.',
    scenarios: [
      {
        icon: 'landslide',
        title: 'Sismo y terremoto',
        desc: 'Años de esfuerzo no se caen en unos segundos. Recursos garantizados para reparar o reconstruir tu casa si la tierra decide temblar.'
      },
      {
        icon: 'local_fire_department',
        title: 'Incendio y explosión',
        desc: 'Desde un cortocircuito hasta un rayo imprevisto. Recuperas cada espacio y cada mueble de tu casa sin tocar tus ahorros familiares.'
      },
      {
        icon: 'water_damage',
        title: 'Inundación y daños por agua',
        desc: 'Un tubo roto o una temporada de lluvias no tienen que arruinar tus pisos. Reparaciones de plomería rápidas y reposición de enseres sin dolores de cabeza.'
      },
      {
        icon: 'apartment',
        title: 'Estructura y edificación',
        desc: 'El techo que cobija a tu familia, completamente blindado. Muros, pisos y acabados protegidos a su valor real ante cualquier evento.'
      },
      {
        icon: 'tv',
        title: 'Contenidos y tecnología',
        desc: 'Tus pantallas, computadores y muebles favoritos a salvo. Si hay un apagón con daño o entran a robar, te los reponemos sin rodeos.'
      },
      {
        icon: 'handshake',
        title: 'Responsabilidad civil familiar',
        desc: 'Si el balón rompe el ventanal del vecino o tu mascota causa un daño accidental, nosotros respondemos por ti sin fricciones ni líos.'
      }
    ],

    // Planes y Coberturas
    plansChip: 'Coberturas disponibles',
    plansTitle: 'Tu vivienda y enseres siempre seguros',
    plansSubtitle: 'Planes diseñados para propietarios e inquilinos en Colombia.',
    plans: [
      {
        title: 'Estructura y edificación',
        desc: 'Cubre la estructura física de tu casa o apartamento frente a terremotos, incendios, inundaciones y eventos naturales.',
        features: ['Cobertura total por sismo o erupción', 'Protección contra daños por agua', 'Reconstrucción a valor comercial']
      },
      {
        title: 'Contenidos y enseres',
        desc: 'Protege tus muebles, electrodomésticos, equipos de tecnología y joyas frente a hurtos calificados o daños accidentales.',
        features: ['Reposición de equipos electrónicos', 'Cobertura contra hurto dentro del predio', 'Protección ante variaciones de voltaje']
      },
      {
        title: 'Asistencias domiciliarias 24/7',
        desc: 'Servicios de emergencia para tu hogar sin costo adicional cuando más lo necesitas.',
        features: ['Plomería y electricidad de emergencia', 'Cerrajería y rotura de vidrios', 'Alojamiento temporal por siniestro']
      }
    ],

    // FAQs
    faqsChip: 'Preguntas frecuentes',
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
