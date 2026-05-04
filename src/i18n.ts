export type Lang = 'pt' | 'en';

export const translations = {
  pt: {
    htmlLang: 'pt',
    pageTitle: 'Jaestofador — Estofaria e Decoração de Interiores',
    metaDescription:
      'Jaestofador — Estofaria e decoração de interiores artesanal portuguesa. Criamos espaços únicos com materiais premium e técnicas tradicionais.',
    ogTitle: 'Jaestofador — Estofaria Artesanal',
    ogDescription: 'Estofaria e decoração de interiores feita à mão em Portugal.',
    ogLocale: 'pt_PT',

    nav: {
      home: 'Início',
      about: 'Sobre Nós',
      services: 'Serviços',
      portfolio: 'Portfólio',
      contact: 'Pedir Orçamento',
      menuOpen: 'Abrir menu de navegação',
      menuClose: 'Fechar menu',
      mainNav: 'Navegação principal',
      langSwitch: 'EN',
      langSwitchAria: 'Switch to English',
    },

    hero: {
      eyebrow: 'Artesanato Português',
      headline1: 'Espaços que',
      headline2: 'contam histórias',
      sub: 'Estofaria e decoração de interiores feita à mão,\ncom materiais selecionados e amor pelo detalhe.',
      ctaPortfolio: 'Ver Portfólio',
      ctaContact: 'Pedir Orçamento',
      scroll: 'Deslizar',
    },

    about: {
      eyebrow: 'Sobre Nós',
      heading1: 'Tradição artesanal,',
      heading2: 'elegância contemporânea',
      lead:
        'Somos uma oficina familiar portuguesa, fundada na convicção de que um espaço bem decorado transforma a vida de quem o habita.',
      body:
        'Cada peça que criamos é tratada como uma obra única. Utilizamos tecidos, couros e madeiras criteriosamente selecionados de fornecedores nacionais e europeus, garantindo durabilidade, beleza e sustentabilidade em cada projeto.',
      badgeNumber: '20+',
      badgeLabel: 'Anos de\nExperiência',
      values: [
        {
          title: 'Materiais Premium',
          desc: 'Tecidos e couros de origem certificada, selecionados pela sua qualidade e durabilidade.',
        },
        {
          title: 'Feito à Medida',
          desc: 'Cada projeto começa por ouvir o cliente. Desenhamos soluções únicas para cada espaço.',
        },
        {
          title: 'Produção Local',
          desc: 'Priorizamos fornecedores nacionais e práticas sustentáveis, apoiando a economia portuguesa.',
        },
      ],
      cta: 'Fale Connosco',
      imgAlt: 'Sala de estar com estofaria artesanal em tons quentes',
    },

    services: {
      eyebrow: 'O Que Fazemos',
      heading: 'Os Nossos Serviços',
      intro:
        'Da conceção ao acabamento final, oferecemos um serviço completo de estofaria e decoração de interiores.',
      learnMore: 'Saber Mais',
      items: [
        {
          title: 'Estofaria de Interiores',
          desc: 'Sofás, cadeiras, poltronas e painéis estofados, produzidos com precisão artesanal e materiais de excelência que resistem ao tempo.',
          alt: 'Sala de estar decorada com estofaria artesanal',
        },
        {
          title: 'Decoração de Quartos',
          desc: 'Projetos completos para quartos — cabeceiras, colchas, cortinas e almofadas em harmonia perfeita, criando ambientes de descanso únicos.',
          alt: 'Quarto decorado com têxteis artesanais',
        },
        {
          title: 'Projetos Personalizados',
          desc: 'Trabalhamos diretamente consigo para criar peças exclusivas que reflitam a sua personalidade, estilo de vida e necessidades específicas.',
          alt: 'Almofadas artesanais em tecido premium',
        },
        {
          title: 'Restauro de Peças',
          desc: 'Devolvemos vida a móveis antigos e de família, preservando a sua história e memória com técnicas artesanais tradicionais e materiais de qualidade.',
          alt: 'Peça de mobiliário restaurada com cuidado artesanal',
        },
      ],
    },

    portfolio: {
      eyebrow: 'Os Nossos Trabalhos',
      heading: 'Portfólio',
      intro: 'Uma seleção das peças e projetos que nos enchem de orgulho.',
      items: [
        { cat: 'Estofaria', title: 'Cadeira Signature', alt: 'Cadeira de design estofada à mão com tecido premium' },
        { cat: 'Têxteis', title: 'Coleção de Almofadas', alt: 'Coleção de almofadas artesanais em tecidos naturais' },
        { cat: 'Quartos', title: 'Suite Completa', alt: 'Quarto completo decorado com estofaria artesanal' },
        { cat: 'Têxteis', title: 'Roupa de Cama Premium', alt: 'Roupa de cama artesanal em algodão de alta qualidade' },
      ],
    },

    map: {
      eyebrow: 'Visite-nos',
      heading: 'Onde Estamos?',
      intro: 'A nossa loja e armazém no coração do Funchal — ao seu dispor.',
      mapAria: 'Mapa com localização da loja e armazém em Funchal',
      storeName: 'Loja Jaestofador',
      warehouseName: 'Armazém Jaestofador',
      directions: 'Como chegar',
    },

    contact: {
      eyebrow: 'Fale Connosco',
      heading1: 'Peça o seu',
      heading2: 'Orçamento',
      intro:
        'Estamos prontos para transformar o seu espaço. Partilhe connosco a sua visão e entraremos em contacto em 24 horas.',
      storeLabel: 'Loja',
      storeAddr: 'Caminho da Penteada n.º 34<br>9020-115 Funchal',
      warehouseLabel: 'Armazém',
      warehouseAddr: 'Caminho da Igreja Velha n.º 54<br>9020-087 Funchal',
      formTitle: 'Envie-nos uma mensagem',
      subject: 'Novo pedido de orçamento - Jaestofador',
      fields: {
        name: 'Nome Completo',
        email: 'Endereço de Email',
        phone: 'Telefone (opcional)',
        service: 'Tipo de Serviço',
        message: 'Descreva o seu projeto',
      },
      services: [
        { value: 'estofaria', label: 'Estofaria de Interiores' },
        { value: 'quartos', label: 'Decoração de Quartos' },
        { value: 'personalizado', label: 'Projeto Personalizado' },
        { value: 'restauro', label: 'Restauro de Peças' },
        { value: 'outro', label: 'Outro' },
      ],
      submit: 'Enviar Pedido',
      success: 'Mensagem enviada com sucesso!<br>Entraremos em contacto consigo em breve.',
      errors: {
        name: 'Por favor, introduza o seu nome.',
        email: 'Por favor, introduza o seu email.',
        service: 'Por favor, selecione um tipo de serviço.',
        message: 'Por favor, descreva o seu projeto.',
      },
    },

    footer: {
      tagline: 'Artesanato de interiores com alma portuguesa. Cada peça, uma história.',
      navHeading: 'Navegação',
      contactHeading: 'Contacto',
      location: 'Funchal, Madeira',
      copyright: 'Todos os direitos reservados.',
      privacy: 'Política de Privacidade',
      navAria: 'Navegação de rodapé',
      partnerWith: 'Em parceria com',
      partnerAria: 'Reparar.com — abrir em nova janela',
    },
  },

  en: {
    htmlLang: 'en',
    pageTitle: 'Jaestofador — Bespoke Upholstery & Interior Design',
    metaDescription:
      'Jaestofador — Portuguese artisanal upholstery and interior design. Unique spaces crafted with premium materials and traditional techniques.',
    ogTitle: 'Jaestofador — Artisanal Upholstery',
    ogDescription: 'Handcrafted upholstery and interior design from Portugal.',
    ogLocale: 'en_GB',

    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Get a Quote',
      menuOpen: 'Open navigation menu',
      menuClose: 'Close menu',
      mainNav: 'Main navigation',
      langSwitch: 'PT',
      langSwitchAria: 'Mudar para Português',
    },

    hero: {
      eyebrow: 'Portuguese Craftsmanship',
      headline1: 'Spaces that',
      headline2: 'tell stories',
      sub: 'Handcrafted upholstery and interior design,\nwith carefully selected materials and a love for detail.',
      ctaPortfolio: 'View Portfolio',
      ctaContact: 'Get a Quote',
      scroll: 'Scroll',
    },

    about: {
      eyebrow: 'About Us',
      heading1: 'Artisanal tradition,',
      heading2: 'contemporary elegance',
      lead:
        'We are a Portuguese family workshop, founded on the belief that a well-decorated space transforms the lives of those who live in it.',
      body:
        'Every piece we create is treated as a unique work. We use fabrics, leathers and woods carefully selected from national and European suppliers, ensuring durability, beauty and sustainability in every project.',
      badgeNumber: '20+',
      badgeLabel: 'Years of\nExperience',
      values: [
        {
          title: 'Premium Materials',
          desc: 'Certified fabrics and leathers, selected for their quality and durability.',
        },
        {
          title: 'Made to Measure',
          desc: 'Every project starts by listening to the client. We design unique solutions for each space.',
        },
        {
          title: 'Local Production',
          desc: 'We prioritise national suppliers and sustainable practices, supporting the Portuguese economy.',
        },
      ],
      cta: 'Get in Touch',
      imgAlt: 'Living room with handcrafted upholstery in warm tones',
    },

    services: {
      eyebrow: 'What We Do',
      heading: 'Our Services',
      intro:
        'From concept to final finish, we offer a complete upholstery and interior design service.',
      learnMore: 'Learn More',
      items: [
        {
          title: 'Interior Upholstery',
          desc: 'Sofas, chairs, armchairs and upholstered panels, made with artisanal precision and premium materials that stand the test of time.',
          alt: 'Living room decorated with handcrafted upholstery',
        },
        {
          title: 'Bedroom Design',
          desc: 'Complete bedroom projects — headboards, bedspreads, curtains and cushions in perfect harmony, creating unique resting spaces.',
          alt: 'Bedroom decorated with artisanal textiles',
        },
        {
          title: 'Custom Projects',
          desc: 'We work directly with you to create exclusive pieces that reflect your personality, lifestyle and specific needs.',
          alt: 'Handcrafted cushions in premium fabric',
        },
        {
          title: 'Restoration',
          desc: 'We bring old and family furniture back to life, preserving its history and memory with traditional techniques and quality materials.',
          alt: 'Furniture piece restored with artisanal care',
        },
      ],
    },

    portfolio: {
      eyebrow: 'Our Work',
      heading: 'Portfolio',
      intro: 'A selection of the pieces and projects we are proud of.',
      items: [
        { cat: 'Upholstery', title: 'Signature Chair', alt: 'Designer chair hand-upholstered in premium fabric' },
        { cat: 'Textiles', title: 'Cushion Collection', alt: 'Collection of handcrafted cushions in natural fabrics' },
        { cat: 'Bedrooms', title: 'Complete Suite', alt: 'Complete bedroom decorated with handcrafted upholstery' },
        { cat: 'Textiles', title: 'Premium Bedding', alt: 'Handcrafted bedding in high-quality cotton' },
      ],
    },

    map: {
      eyebrow: 'Visit Us',
      heading: 'Where We Are',
      intro: 'Our store and warehouse in the heart of Funchal — at your service.',
      mapAria: 'Map showing the store and warehouse locations in Funchal',
      storeName: 'Jaestofador Store',
      warehouseName: 'Jaestofador Warehouse',
      directions: 'Get directions',
    },

    contact: {
      eyebrow: 'Get in Touch',
      heading1: 'Request your',
      heading2: 'Quote',
      intro:
        'We are ready to transform your space. Share your vision with us and we will get back to you within 24 hours.',
      storeLabel: 'Store',
      storeAddr: 'Caminho da Penteada n.º 34<br>9020-115 Funchal',
      warehouseLabel: 'Warehouse',
      warehouseAddr: 'Caminho da Igreja Velha n.º 54<br>9020-087 Funchal',
      formTitle: 'Send us a message',
      subject: 'New quote request - Jaestofador',
      fields: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone (optional)',
        service: 'Service Type',
        message: 'Describe your project',
      },
      services: [
        { value: 'estofaria', label: 'Interior Upholstery' },
        { value: 'quartos', label: 'Bedroom Design' },
        { value: 'personalizado', label: 'Custom Project' },
        { value: 'restauro', label: 'Restoration' },
        { value: 'outro', label: 'Other' },
      ],
      submit: 'Send Request',
      success: 'Message sent successfully!<br>We will get back to you shortly.',
      errors: {
        name: 'Please enter your name.',
        email: 'Please enter your email.',
        service: 'Please select a service type.',
        message: 'Please describe your project.',
      },
    },

    footer: {
      tagline: 'Interior craftsmanship with a Portuguese soul. Every piece tells a story.',
      navHeading: 'Navigation',
      contactHeading: 'Contact',
      location: 'Funchal, Madeira',
      copyright: 'All rights reserved.',
      privacy: 'Privacy Policy',
      navAria: 'Footer navigation',
      partnerWith: 'In partnership with',
      partnerAria: 'Reparar.com — open in new window',
    },
  },
} as const;

export type Translations = typeof translations.pt;
