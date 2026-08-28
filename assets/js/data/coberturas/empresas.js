// =========================================================
// NORTIA — Datos: Empresas & PyMEs
// =========================================================

export const EMPRESAS_DATA = {
  id: 'empresas',
  url: './empresas.html',
  icon: 'domain',
  title: 'Empresas & PyMEs',
  frontDesc: 'Protege tu negocio, tus personas y aquello que has construido.',
  tags: ['Patrimonio', 'RCE', 'Empleados', 'Continuidad'],
  backDesc: 'Tu empresa es el resultado de años de trabajo, inversión, decisiones y personas que dependen de ella.',
  features: [
    'Patrimonio y blindaje de activos empresariales',
    'Responsabilidad civil extracontractual',
    'Empleados: Salud colectiva, accidentes y ARL',
    'Continuidad del negocio y riesgos operacionales'
  ],
  waTopic: 'empresas',

  // Datos oficiales de riesgo
  riskSpotlight: {
    icon: 'domain',
    category: 'Empresas & PyMEs',
    title: 'Análisis de Riesgo Corporativo',
    metric: '1.347.043 empresas afiliadas',
    source: 'Fuente: MinSalud – SGRL 2024',
    meaning: 'Millones de trabajadores en Colombia dependen de la cobertura de riesgos laborales de su empresa.',
    why: 'Un accidente laboral no gestionado puede representar procesos legales, costos médicos y afectación operativa.',
    action: 'Revisar si tu empresa tiene las coberturas adecuadas para su tamaño, sector y nivel de actividad.',
    waTopic: 'empresas',
    waBtnText: 'Solicitar Asesoría para Empresas'
  },

  // Contenido de la Subpágina Dedicada
  subpage: {
    badge: 'Línea Corporativa',
    title: 'Seguros para Empresas & PyMEs',
    subtitle: 'Blindaje jurídico, financiero y operativo para garantizar que tu negocio nunca detenga su crecimiento.',
    ctaHero: 'Solicitar Asesoría Corporativa',
    riskBadge: 'Datos Oficiales de Riesgo',
    riskCtaBtn: 'Cotizar Seguros Empresariales en WhatsApp',

    // Sección de Tipos de Riesgo y Escenarios
    scenariosQuote: 'Tu empresa es el resultado de años de trabajo, inversión, decisiones y personas que dependen de ella.',
    scenarios: [
      {
        icon: 'store',
        title: 'Patrimonio Empresarial',
        desc: 'Protección de inmuebles, bodegas, inventarios y activos físicos ante siniestros imprevistos.'
      },
      {
        icon: 'gavel',
        title: 'Responsabilidad Civil (RCE)',
        desc: 'Blindaje financiero y cobertura de defensa jurídica ante demandas por daños a terceros o clientes.'
      },
      {
        icon: 'badge',
        title: 'Bienestar de Empleados',
        desc: 'Planes colectivos de salud, seguros de vida grupal y asesoría preventiva en riesgos laborales (ARL).'
      },
      {
        icon: 'precision_manufacturing',
        title: 'Equipos y Maquinaria',
        desc: 'Cobertura especializada ante rotura de maquinaria, fallas eléctricas o daño en equipos de computación.'
      },
      {
        icon: 'trending_up',
        title: 'Continuidad del Negocio',
        desc: 'Indemnización por pérdida de beneficios y costos fijos durante el cierre forzado tras un siniestro (lucro cesante).'
      },
      {
        icon: 'local_shipping',
        title: 'Riesgos Operacionales y Carga',
        desc: 'Protección de mercancías en tránsito, transportes de carga y operaciones comerciales.'
      }
    ],

    // Planes y Coberturas
    plansChip: 'Soluciones Corporativas',
    plansTitle: 'Continuidad y respaldo para tu negocio',
    plansSubtitle: 'Pólizas para contratos, empleados y activos empresariales.',
    plans: [
      {
        title: 'Pólizas de Cumplimiento',
        desc: 'Garantiza la seriedad de ofertas, buen manejo de anticipos y cumplimiento de contratos comerciales y estatales.',
        features: ['Emisión ágil para licitaciones', 'Pólizas de salarios y prestaciones', 'Estabilidad de obra y calidad de servicio']
      },
      {
        title: 'Responsabilidad Civil Extracontractual',
        desc: 'Protege a tu empresa frente a reclamos por daños materiales o corporales a terceros derivados de tu actividad comercial.',
        features: ['Cobertura en predios, labores y operaciones', 'Protección ante productos defectuosos', 'Defensa legal y gastos judiciales']
      },
      {
        title: 'Todo Riesgo Daño Material & PyME',
        desc: 'Protege las instalaciones de tu empresa, maquinaria, inventarios e interrupción del negocio (lucro cesante).',
        features: ['Cobertura de maquinaria y equipos', 'Protección ante incendio y catástrofes', 'Indemnización por días de cierre forzado']
      }
    ],

    // FAQs
    faqsChip: 'Preguntas Frecuentes',
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
