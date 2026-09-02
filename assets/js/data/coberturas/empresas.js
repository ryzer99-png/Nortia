// =========================================================
// NORTIA — Datos: Empresas y pymes
// =========================================================

export const EMPRESAS_DATA = {
  id: 'empresas',
  url: './empresas.html',
  icon: 'domain',
  title: 'Empresas y pymes',
  frontDesc: 'Protege tu negocio, tus personas y aquello que has construido.',
  tags: ['Patrimonio', 'RCE', 'Empleados', 'Continuidad'],
  backDesc: 'Tu empresa es el resultado de años de trabajo, inversión, decisiones y personas que dependen de ella.',
  features: [
    'Patrimonio y blindaje de activos empresariales',
    'Responsabilidad civil extracontractual',
    'Empleados: salud colectiva, accidentes y ARL',
    'Continuidad del negocio y riesgos operacionales'
  ],
  waTopic: 'empresas',

  // Datos oficiales de riesgo
  riskSpotlight: {
    icon: 'domain',
    category: 'Empresas y pymes',
    title: 'Análisis de riesgo corporativo',
    metric: '1.347.043 empresas afiliadas',
    source: 'Fuente: MinSalud – SGRL 2024',
    meaning: 'Millones de trabajadores en Colombia dependen de la cobertura de riesgos laborales de su empresa.',
    why: 'Un accidente laboral no gestionado puede representar procesos legales, costos médicos y afectación operativa.',
    action: 'Revisar si tu empresa tiene las coberturas adecuadas para su tamaño, sector y nivel de actividad.',
    waTopic: 'empresas',
    waBtnText: 'Solicitar asesoría para empresas'
  },

  // Contenido de la Subpágina Dedicada
  subpage: {
    badge: 'Línea corporativa',
    title: 'Seguros para empresas y pymes',
    subtitle: 'Blindaje jurídico, financiero y operativo para garantizar que tu negocio nunca detenga su crecimiento.',
    ctaHero: 'Solicitar asesoría corporativa',
    riskBadge: 'Datos oficiales de riesgo',
    riskCtaBtn: 'Cotizar seguros empresariales en WhatsApp',

    // Sección de Tipos de Riesgo y Escenarios
    scenariosQuote: 'Tu empresa es el resultado de años de trabajo, inversión, decisiones y personas que dependen de ella.',
    scenarios: [
      {
        icon: 'store',
        title: 'Patrimonio empresarial',
        desc: 'Tu empresa te costó perseverancia y visión. Protege tu oficina, bodega e inventarios para que ningún siniestro detenga tu crecimiento.'
      },
      {
        icon: 'gavel',
        title: 'Responsabilidad civil (RCE)',
        desc: 'Opera con total confianza. Si un cliente o tercero sufre un tropiezo o daño en tus instalaciones, asumimos los costos legales e indemnizaciones.'
      },
      {
        icon: 'badge',
        title: 'Bienestar de empleados',
        desc: 'El mejor talento se cuida de verdad. Pólizas de salud, vida y asesoría en ARL que motivan a tu equipo y protegen a quienes lo hacen posible.'
      },
      {
        icon: 'precision_manufacturing',
        title: 'Equipos y maquinaria',
        desc: 'Las máquinas y servidores que mueven tu operación, a prueba de fallos. Reparación o reemplazo ágil ante sobrecargas o roturas súbitas.'
      },
      {
        icon: 'trending_up',
        title: 'Continuidad del negocio',
        desc: 'Si te toca pausar la operación por una emergencia, no te ahogas. Cubrimos nóminas, arriendos e ingresos para que abras de nuevo con solidez.'
      },
      {
        icon: 'local_shipping',
        title: 'Riesgos operacionales y carga',
        desc: 'Tus despachos protegidos de bodega a cliente final. Carga segura en carretera ante vuelcos, hurtos o imprevistos de ruta.'
      }
    ],

    // Planes y Coberturas
    plansChip: 'Soluciones corporativas',
    plansTitle: 'Continuidad y respaldo para tu negocio',
    plansSubtitle: 'Pólizas para contratos, empleados y activos empresariales.',
    plans: [
      {
        title: 'Pólizas de cumplimiento',
        desc: 'Garantiza la seriedad de ofertas, buen manejo de anticipos y cumplimiento de contratos comerciales y estatales.',
        features: ['Emisión ágil para licitaciones', 'Pólizas de salarios y prestaciones', 'Estabilidad de obra y calidad de servicio']
      },
      {
        title: 'Responsabilidad civil extracontractual',
        desc: 'Protege a tu empresa frente a reclamos por daños materiales o corporales a terceros derivados de tu actividad comercial.',
        features: ['Cobertura en predios, labores y operaciones', 'Protección ante productos defectuosos', 'Defensa legal y gastos judiciales']
      },
      {
        title: 'Todo riesgo daño material y pymes',
        desc: 'Protege las instalaciones de tu empresa, maquinaria, inventarios e interrupción del negocio (lucro cesante).',
        features: ['Cobertura de maquinaria y equipos', 'Protección ante incendio y catástrofes', 'Indemnización por días de cierre forzado']
      }
    ],

    // FAQs
    faqsChip: 'Preguntas frecuentes',
    faqsTitle: 'Dudas habituales sobre seguros empresariales',
    faqs: [
      {
        q: '¿Qué tan rápido se puede emitir una póliza de cumplimiento?',
        a: 'Con la documentación básica de tu empresa, gestionamos la aprobación y expedición en menos de 24 a 48 horas.'
      },
      {
        q: '¿Puedo armar un paquete a la medida de mi presupuesto?',
        a: 'Por supuesto. Evaluamos el tamaño y nivel de riesgo de tu negocio para pagar únicamente por las coberturas que realmente necesitas.'
      }
    ],
    finalCtaTitle: 'Protege el futuro y la solvencia de tu empresa.',
    finalCtaSubtitle: 'En NORTIA estructuramos programas de seguros a la medida de tu sector y operación.',
    finalCtaBtn: 'Hablar con un asesor corporativo'
  }
};
