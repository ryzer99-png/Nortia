// =========================================================
// NORTIA — Datos: Crédito y Alternativas de Financiación SURA
// =========================================================

export const CREDITOS_DATA = {
  id: 'creditos',
  url: '/creditos',
  icon: 'payments',
  title: 'Crédito y financiación',
  frontDesc: 'Crédito vehicular 100% digital, compra de cartera y libre inversión con prenda.',
  tags: ['100% Digital', '3 Bancos', 'Compra Cartera', 'Prenda'],
  backDesc: 'Estudiamos tu solicitud simultáneamente con Sufi, Banco de Occidente y Banco de Bogotá con un solo formulario digital para conseguirte la mejor tasa.',
  features: [
    'Compra de carro, moto o camión nuevo o usado',
    'Compra de cartera para bajar tu cuota mensual actual',
    'Libre inversión dejando tu vehículo en prenda (y lo sigues usando)',
    'Aprobación ágil, sin filas y desembolso rápido'
  ],
  waTopic: 'creditos',

  // Datos oficiales y comparativa de crédito
  riskSpotlight: {
    icon: 'trending_down',
    category: 'Alternativas de financiación',
    title: 'Optimización de deuda y crédito vehicular',
    metric: '3 bancos en 1 solo trámite digital',
    source: 'Aliados: Sufi, Banco de Occidente, Banco de Bogotá',
    meaning: 'Un solo formulario permite que tres entidades líderes compitan por ofrecerte la cuota más cómoda y la mejor tasa.',
    why: 'Muchos usuarios pagan de más por no comparar opciones o se ven obligados a vender su vehículo cuando necesitan liquidez.',
    action: 'Solicitar un estudio de crédito 100% digital para compra, compra de cartera o libre inversión con garantía prendaria.',
    waTopic: 'creditos',
    waBtnText: 'Solicitar estudio de crédito por WhatsApp'
  },

  // Contenido de la Subpágina Dedicada (/creditos)
  subpage: {
    breadcrumb: 'Crédito y financiación',
    badge: 'Alternativas financieras SURA',
    title: 'Crédito vehicular y libre inversión',
    subtitle: 'Proceso 100% digital, estudio simultáneo con 3 entidades financieras líderes y desembolso ágil para estrenar o aliviar tus finanzas.',
    ctaHero: 'Solicitar asesoría de crédito',
    riskBadge: '3 entidades bancarias en simultáneo',
    riskCtaBtn: 'Hablar con un asesor de crédito en WhatsApp',

    // Escenarios de Financiación
    scenariosQuote: 'Ya sea para estrenar el vehículo de tus sueños, reducir la cuota mensual de tu crédito actual o conseguir liquidez sin vender tu carro, existe una solución a tu medida.',
    scenarios: [
      {
        icon: 'directions_car',
        title: 'Estrenar carro particular o familiar',
        desc: 'Financia hasta el 100% de tu vehículo nuevo o usado con cuotas fijas y plazos adaptados a tu presupuesto.'
      },
      {
        icon: 'two_wheeler',
        title: 'Tu próxima moto',
        desc: 'Crédito ágil para motos de alto y bajo cilindraje, aventura o movilidad urbana diaria con trámite 100% digital.'
      },
      {
        icon: 'local_shipping',
        title: 'Vehículo de trabajo o camión para tu empresa',
        desc: 'Adquiere tu camión de carga o utilitario comercial para expandir tu negocio con condiciones favorables de crédito.'
      },
      {
        icon: 'price_change',
        title: 'Compra de cartera vehicular',
        desc: 'Si la cuota de tu carro te pesa, compramos tu deuda con otra entidad para bajar tu tasa de interés y aliviar tu flujo de caja.'
      },
      {
        icon: 'account_balance_wallet',
        title: 'Libre inversión dejando tu carro en prenda',
        desc: 'Obtén dinero en efectivo a tasas preferenciales dejando tu vehículo como garantía prendaria, ¡y lo sigues utilizando normalmente!'
      }
    ],

    // Planes y Modalidades de Crédito
    plansChip: 'Modalidades de crédito',
    plansTitle: 'Soluciones de financiación a tu alcance',
    plansSubtitle: 'Elige la alternativa que mejor se adapte a tus necesidades de movilidad o liquidez.',
    plans: [
      {
        title: 'Crédito de Compra de Vehículo',
        desc: 'Para carros, camionetas, motos y camiones nuevos o usados.',
        features: [
          'Aprobación rápida 100% digital',
          'Estudio simultáneo con Sufi, Banco de Occidente y Bogotá',
          'Financiación para vehículos particulares y comerciales'
        ]
      },
      {
        title: 'Compra de Cartera Vehicular',
        desc: 'Mejora tu tasa actual y baja el valor de tu cuota mensual.',
        features: [
          'Traslado de saldo desde cualquier entidad financiera',
          'Reducción inmediata en tu desembolso mensual',
          'Acompañamiento integral sin costo de intermediación'
        ]
      },
      {
        title: 'Libre Inversión con Prenda',
        desc: 'Dinero en efectivo sin necesidad de vender tu vehículo.',
        features: [
          'Dejas el vehículo como respaldo y lo sigues conduciendo',
          'Tasas mucho más bajas que un crédito de consumo habitual',
          'Destina los recursos a pagar deudas, tu negocio o remodelar'
        ]
      }
    ],

    // Sección de Crédito Detallada (SubpageVehicleCredit)
    vehicleCredit: {
      chip: 'Alternativas de Crédito & Financiación',
      title: 'Crédito para vehículo: 100% digital y aprobación rápida',
      subtitle: 'Con un solo formulario estudiamos tu crédito simultáneamente con 3 entidades financieras aliadas para ampliar tus opciones y conseguirte la mejor tasa.',
      pillars: [
        {
          icon: 'devices',
          title: '100% Digital',
          desc: 'Todo el proceso desde tu celular o computador, sin filas ni papeleo engorroso.'
        },
        {
          icon: 'bolt',
          title: 'Aprobación Rápida',
          desc: 'Estudio ágil con respuesta en tiempo récord para que no detengas tus planes.'
        },
        {
          icon: 'account_balance',
          title: '3 Bancos en 1 Trámite',
          desc: 'Sufi, Banco de Occidente y Banco de Bogotá compitiendo por ofrecerte la mejor tasa.'
        },
        {
          icon: 'payments',
          title: 'Desembolso Ágil',
          desc: 'Acompañamiento paso a paso desde la radicación hasta el desembolso final.'
        }
      ],
      options: [
        {
          id: 'compra-vehiculo',
          badge: 'Estrena sin complicaciones',
          title: 'Compra de Vehículo',
          subtitle: 'Carro, moto o camión nuevo o usado',
          desc: 'Financia el automóvil familiar de tus sueños, tu próxima moto o el camión de trabajo para llevar tu empresa más lejos.',
          tags: ['Carro particular', 'Motos', 'Camiones de trabajo', 'Nuevos y usados'],
          features: [
            'Financiación para vehículos nuevos y usados de cualquier marca',
            'Opciones para carros particulares, motos y transporte comercial o de carga',
            'Acompañamiento experto y resolución de dudas durante todo el camino'
          ],
          ctaText: 'Solicitar crédito de compra',
          waMsg: 'Hola NORTIA, me gustaría recibir asesoría para solicitar un crédito de compra de vehículo (carro / moto / camión).'
        },
        {
          id: 'compra-cartera',
          badge: '¿Cuota pesada?',
          title: 'Compra de Cartera Vehicular',
          subtitle: 'Mejora tu tasa actual y baja tu cuota',
          desc: '¿La cuota de tu carro está pesando más de la cuenta? Revisamos las alternativas para ajustar tu crédito y darle un respiro a tus finanzas.',
          tags: ['Baja tu cuota', 'Mejora tu tasa', 'Unifica compromisos'],
          features: [
            'Compramos la deuda de tu crédito actual con otra entidad',
            'Posibilidad de reducir sustancialmente el valor mensual de tu cuota',
            'Alivia tu flujo de caja con mejores condiciones y tasas competitivas'
          ],
          ctaText: 'Mejorar mi tasa actual',
          waMsg: 'Hola NORTIA, me gustaría recibir asesoría para compra de cartera vehicular y mejorar la tasa de mi crédito actual.'
        },
        {
          id: 'libre-inversion-prenda',
          badge: 'Liquidez inmediata',
          title: 'Libre Inversión con Garantía',
          subtitle: 'Dinero en efectivo sin vender tu carro',
          desc: 'Tu vehículo puede ayudarte a obtener un crédito de libre inversión usándolo como garantía prendaria, ¡y sigues utilizándolo normalmente!',
          tags: ['Conserva tu vehículo', 'Paga deudas', 'Capital de trabajo'],
          features: [
            'Paga deudas con intereses altos, invierte en tu negocio o remodela tu hogar',
            'Tu carro queda como respaldo y sigues manejándolo todos los días sin restricción',
            'Tasas de interés mucho más bajas y favorables que un crédito de consumo'
          ],
          ctaText: 'Solicitar crédito con prenda',
          waMsg: 'Hola NORTIA, me interesa recibir asesoría para un crédito de libre inversión dejando mi vehículo como garantía prendaria mientras lo sigo utilizando.'
        }
      ],
      banks: [
        {
          name: 'Sufi',
          institution: 'Bancolombia',
          highlight: 'Ágil y 100% digital'
        },
        {
          name: 'Banco de Occidente',
          institution: 'Grupo Aval',
          highlight: 'Líder en financiación vehicular'
        },
        {
          name: 'Banco de Bogotá',
          institution: 'Grupo Aval',
          highlight: 'Respaldo y trayectoria'
        }
      ],
      legalDisclaimer: 'Sura Alternativas de Crédito es un servicio de intermediación con las siguientes entidades financieras: Sufi, Banco de Occidente y Banco de Bogotá. Se ofrecen exclusivamente créditos para compra de vehículos, compra de cartera y libre inversión con garantía. SURA y NORTIA no otorgan créditos directamente ni actúan como entidad crediticia.'
    },

    // FAQs
    faqsChip: 'Preguntas frecuentes',
    faqsTitle: 'Dudas habituales sobre crédito vehicular y financiación',
    faqs: [
      {
        q: '¿Cómo funciona la solicitud de crédito con 3 bancos?',
        a: 'Con un solo formulario y en un proceso 100% digital, radicamos tu perfil ante Sufi, Banco de Occidente y Banco de Bogotá simultáneamente. Así aumentas la probabilidad de aprobación y puedes elegir la opción con la cuota y tasa más conveniente.'
      },
      {
        q: '¿Puedo pedir libre inversión dejando mi vehículo como garantía sin entregarlo?',
        a: 'Sí, totalmente. Se constituye una garantía prendaria sobre tu vehículo pero tú sigues conduciéndolo y utilizándolo todos los días para tu trabajo o vida familiar con total normalidad.'
      },
      {
        q: '¿Financian vehículos de trabajo y camiones para empresas?',
        a: 'Sí. El portafolio cubre vehículos particulares (automóviles y camperos), motocicletas y vehículos comerciales o camiones para empresas, tanto nuevos como usados.'
      },
      {
        q: '¿Cómo me ayuda la compra de cartera vehicular?',
        a: 'Si ya tienes un crédito de vehículo con otra entidad y la tasa de interés o la cuota mensual te resulta alta, gestionamos la compra de esa cartera para negociar una tasa más baja o extender el plazo, aliviando de inmediato tu flujo de caja.'
      },
      {
        q: '¿Tiene algún costo la asesoría y radicación del crédito?',
        a: 'No. En NORTIA y SURA no cobramos intermediación al cliente. El proceso de asesoría, estudio y radicación no genera cobros adicionales por nuestra parte.'
      },
      {
        q: '¿Cuánto tiempo tarda la respuesta de aprobación?',
        a: 'Al ser un proceso 100% digital, las respuestas preliminares se obtienen en tiempo récord, usualmente en cuestión de horas o el mismo día laboral.'
      }
    ],
    finalCtaTitle: 'Consigue tu crédito con las mejores condiciones.',
    finalCtaSubtitle: 'Te acompañamos desde la radicación digital hasta el desembolso sin trámites engorrosos ni cobros por asesoría.',
    finalCtaBtn: 'Hablar con un asesor de crédito'
  }
};
