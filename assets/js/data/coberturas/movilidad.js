// =========================================================
// NORTIA — Datos: Movilidad & Vehículos
// =========================================================

export const MOVILIDAD_DATA = {
  id: 'movilidad',
  url: './movilidad.html',
  icon: 'directions_car',
  title: 'Movilidad & Vehículos',
  frontDesc: 'Protección para la forma en que te movilizas, trabajas y disfrutas.',
  tags: ['Autos', 'Motos', 'Bicicletas', 'Plataformas'],
  backDesc: 'Cada persona se moviliza de una manera diferente. Por eso la protección también debe analizarse según el uso que le das a tu vehículo.',
  features: [
    'Automóvil familiar y de uso particular',
    'Vehículo de trabajo o plataformas digitales',
    'Moteros viajeros y moteros que trabajan',
    'Ciclistas urbanos, de montaña y patinetas'
  ],
  waTopic: 'movilidad',

  // Datos oficiales de riesgo
  riskSpotlight: {
    icon: 'directions_car',
    category: 'Movilidad & Vehículos',
    title: 'Análisis de Riesgo en Movilidad',
    metric: '96.244 hurtos de motos en 2024',
    source: 'Fuente: Policía Nacional de Colombia 2024',
    meaning: 'En promedio, más de 260 motos y 45 vehículos son hurtados cada día en las carreteras del país.',
    why: 'Más allá del valor económico, tu vehículo es tu herramienta de trabajo o tu medio principal de transporte.',
    action: 'Comparar coberturas contra hurto, daños a terceros y responsabilidad civil según el uso real que le das.',
    waTopic: 'movilidad',
    waBtnText: 'Solicitar Asesoría para Vehículos'
  },

  // Contenido de la Subpágina Dedicada
  subpage: {
    badge: 'Línea Movilidad',
    title: 'Seguro de Autos, Motos y Movilidad',
    subtitle: 'Tranquilidad total al conducir con la mayor red de asistencia y protección económica contra accidentes y hurtos.',
    ctaHero: 'Solicitar Asesoría para Vehículos',
    riskBadge: 'Datos Oficiales de Riesgo',
    riskCtaBtn: 'Cotizar Seguro de Autos/Motos en WhatsApp',

    // Sección de Tipos de Riesgo y Escenarios
    scenariosQuote: 'Cada persona se moviliza de una manera diferente. Por eso la protección también debe analizarse según el uso que le das a tu vehículo.',
    scenarios: [
      {
        icon: 'directions_car',
        title: 'Automóvil Familiar y Particular',
        desc: 'Protección integral Todo Riesgo ante pérdidas totales o parciales por choque o hurto y vehículo sustituto.'
      },
      {
        icon: 'local_taxi',
        title: 'Vehículo de Trabajo o Plataformas',
        desc: 'Pólizas diseñadas para conductores de Uber, DiDi, taxis o utilitarios con coberturas de lucro cesante y RCE.'
      },
      {
        icon: 'two_wheeler',
        title: 'Motero Viajero y Rutero',
        desc: 'Amparo contra hurto calificado, asistencia médica en carretera y grúa ilimitada a nivel nacional.'
      },
      {
        icon: 'delivery_dining',
        title: 'Motero que Trabaja',
        desc: 'Planes económicos y de respuesta ágil para motocicletas utilizadas como herramienta diaria de ingresos.'
      },
      {
        icon: 'pedal_bike',
        title: 'Ciclista Urbano y de Montaña',
        desc: 'Protección ante robo de bicicleta dentro o fuera del hogar, daños por caída y responsabilidad civil.'
      },
      {
        icon: 'electric_scooter',
        title: 'Patineta y Micro-movilidad Eléctrica',
        desc: 'Cobertura de daños a terceros, accidentes personales y asistencias para tu medio de transporte urbano.'
      }
    ],

    // Planes y Coberturas
    plansChip: 'Coberturas Disponibles',
    plansTitle: 'Protección en cada kilómetro',
    plansSubtitle: 'Planes Todo Riesgo para autos, motocicletas y flotas en Colombia.',
    plans: [
      {
        title: 'Todo Riesgo Automóviles',
        desc: 'La protección más completa para tu vehículo particular o familiar ante pérdidas parciales o totales.',
        features: ['Pérdida total por choque o hurto al 100%', 'Responsabilidad Civil de hasta $4.000 millones', 'Vehículo sustituto mientras reparan el tuyo']
      },
      {
        title: 'Seguro para Motocicletas',
        desc: 'Pólizas diseñadas para proteger a los motociclistas contra hurto, daños a terceros y gastos médicos.',
        features: ['Cobertura especializada contra hurto', 'Amparo patrimonial ante daños a terceros', 'Grúa y asistencia vial en ruta']
      },
      {
        title: 'Asistencia en Viaje & SOAT Digital',
        desc: 'Expedición inmediata de tu SOAT digital y servicios de grúa, conductor elegido y auxilio mecánico 24/7.',
        features: ['Conductor elegido ilimitado', 'Carro taller por batería o llanta desinflada', 'Trámite digital de SOAT al instante']
      }
    ],

    // FAQs
    faqsChip: 'Preguntas Frecuentes',
    faqsTitle: 'Dudas habituales sobre seguros de vehículos',
    faqs: [
      {
        q: '¿El seguro Todo Riesgo reemplaza el SOAT?',
        a: 'No. El SOAT es un seguro obligatorio por ley que cubre lesiones de personas. El seguro Todo Riesgo cubre el valor de tu carro, hurto, choques y daños a otros vehículos.'
      },
      {
        q: '¿Qué hago en caso de un choque o accidente?',
        a: 'Te comunicas a la línea de asistencia 24/7 de tu aseguradora o nos escribes por WhatsApp para acompañarte en el reporte y la gestión de la grúa.'
      }
    ],
    finalCtaTitle: 'Conduce seguro con el respaldo de NORTIA.',
    finalCtaSubtitle: 'Te ayudamos a cotizar y comparar entre las principales aseguradoras del país.',
    finalCtaBtn: 'Hablar con un asesor de movilidad'
  }
};
