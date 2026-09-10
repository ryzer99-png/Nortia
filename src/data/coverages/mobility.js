// =========================================================
// NORTIA — Datos: Movilidad & Vehículos
// =========================================================

export const MOVILIDAD_DATA = {
  id: 'movilidad',
  url: '/movilidad',
  icon: 'directions_car',
  title: 'Movilidad y vehículos',
  frontDesc: 'Protección para la forma en que te movilizas, trabajas y disfrutas.',
  tags: ['Autos', 'Motos', 'Bicicletas', 'Plataformas'],
  backDesc: 'Cada persona se moviliza de una manera diferente. Por eso la protección también debe analizarse según el uso que le das a tu vehículo.',
  features: [
    'Automóvil familiar y de uso particular',
    'Moteros aventureros y moto trabajadores',
    'Ciclistas urbanos, de montaña y movilidad eléctrica'
  ],
  waTopic: 'movilidad',

  // Datos oficiales de riesgo
  riskSpotlight: {
    icon: 'directions_car',
    category: 'Movilidad y vehículos',
    title: 'Análisis de riesgo en movilidad',
    metric: '96.244 hurtos de motos en 2024',
    source: 'Fuente: Policía Nacional de Colombia 2024',
    meaning: 'En promedio, más de 260 motos y 45 vehículos son hurtados cada día en las carreteras del país.',
    why: 'Más allá del valor económico, tu vehículo es tu herramienta de trabajo o tu medio principal de transporte.',
    action: 'Comparar coberturas contra hurto, daños a terceros y responsabilidad civil según el uso real que le das.',
    waTopic: 'movilidad',
    waBtnText: 'Solicitar asesoría para vehículos'
  },

  // Contenido de la Subpágina Dedicada
  subpage: {
    breadcrumb: 'Movilidad y vehículos',
    badge: 'Línea movilidad',
    title: 'Seguro de autos, motos y movilidad',
    subtitle: 'Tranquilidad total al conducir con la mayor red de asistencia y protección económica contra accidentes y hurtos.',
    ctaHero: 'Solicitar asesoría para vehículos',
    riskBadge: 'Datos oficiales de riesgo',
    riskCtaBtn: 'Solicitar asesoría de movilidad en WhatsApp',

    // Sección de Tipos de Riesgo y Escenarios
    scenariosQuote: 'Cada persona se moviliza de una manera diferente. Por eso la protección también debe analizarse según el uso que le das a tu vehículo.',
    scenarios: [
      {
        icon: 'directions_car',
        title: 'Automóvil familiar y particular',
        desc: 'Viaja tranquilo con los que amas. Carro sustituto si te quedas varado, cobertura total ante choques o robos y asistencia en carretera 24/7.'
      },
      {
        icon: 'two_wheeler',
        title: 'Motero aventurero',
        desc: 'Tú concéntrate en la aventura, nosotros te cubrimos la espalda. Respaldo médico en ruta, grúa sin límite en todo el país y tu moto completamente blindada ante cualquier susto.'
      },
      {
        icon: 'delivery_dining',
        title: 'Moto trabajador',
        desc: 'Tu moto es el motor de tu hogar. Protégela ante robos, caídas y daños a terceros para que nunca dejes de rodar ni de generar.'
      },
      {
        icon: 'pedal_bike',
        title: 'Ciclista urbano y de montaña',
        desc: 'Rueda libre por la ciudad o la trocha. Tu bici asegurada dentro y fuera de casa, gastos médicos si te caes y respaldo ante cualquier percance.'
      },
      {
        icon: 'electric_scooter',
        title: 'Movilidad eléctrica',
        desc: 'Muévete con cero emisiones y cero estrés. Cobertura para tu patineta o scooter, grúa por descarga de batería y protección si ocurre un imprevisto.'
      }
    ],

    // Planes y Coberturas
    plansChip: 'Coberturas disponibles',
    plansTitle: 'Protección en cada kilómetro',
    plansSubtitle: 'Planes Todo Riesgo para autos, motocicletas y flotas en Colombia.',
    plans: [
      {
        title: 'Todo riesgo automóviles',
        desc: 'La protección más completa para tu vehículo particular o familiar ante pérdidas parciales o totales.',
        features: ['Pérdida total por choque o hurto al 100%', 'Responsabilidad Civil de hasta $4.000 millones', 'Vehículo sustituto mientras reparan el tuyo']
      },
      {
        title: 'Seguro para motocicletas',
        desc: 'Pólizas diseñadas para proteger a los motociclistas contra hurto, daños a terceros y gastos médicos.',
        features: ['Cobertura especializada contra hurto', 'Amparo patrimonial ante daños a terceros', 'Grúa y asistencia vial en ruta']
      },
      {
        title: 'Asistencia en viaje y SOAT digital',
        desc: 'Expedición inmediata de tu SOAT digital y servicios de grúa, conductor elegido y auxilio mecánico 24/7.',
        features: ['Conductor elegido ilimitado', 'Carro taller por batería o llanta desinflada', 'Trámite digital de SOAT al instante']
      }
    ],

    // FAQs
    faqsChip: 'Preguntas frecuentes',
    faqsTitle: 'Dudas habituales sobre seguros de vehículos',
    faqs: [
      {
        q: '¿El seguro Todo Riesgo reemplaza el SOAT?',
        a: 'No. El SOAT es un seguro obligatorio por ley que cubre lesiones corporales de personas. El seguro Todo Riesgo cubre el valor comercial de tu carro, pérdidas por hurto o choque y daños a terceros.'
      },
      {
        q: '¿Qué hago en caso de un choque o accidente?',
        a: 'Te comunicas a la línea de asistencia 24/7 de tu aseguradora o nos escribes por WhatsApp para acompañarte en el reporte y la gestión de la grúa.'
      },
      {
        q: '¿Qué vehículos puedo asegurar con una póliza Todo Riesgo?',
        a: 'Aseguramos automóviles particulares y familiares, camionetas, motocicletas de cualquier cilindraje, bicicletas y patinetas de movilidad eléctrica, tanto para uso personal como de trabajo.'
      },
      {
        q: '¿Qué amparos incluye un seguro para motocicletas?',
        a: 'Cubre pérdida total o parcial por hurto o daños, amparo patrimonial por daños a terceros (responsabilidad civil), gastos médicos y asistencia con grúa sin límite en todo el territorio nacional.'
      }
    ],
    finalCtaTitle: 'Conduce seguro con el respaldo de NORTIA.',
    finalCtaSubtitle: 'Te brindamos asesoría personalizada y comparamos entre las principales aseguradoras del país.',
    finalCtaBtn: 'Hablar con un asesor de movilidad'
  }
};
