export type SocialProofItem = {
  label: string;
  value: string;
  description: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  image: string;
  badge: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export type BeforeAfterItem = {
  title: string;
  beforeImage: string;
  afterImage: string;
};

export type LandingData = {
  business: {
    name: string;
    category: string;
    city: string;
    phone: string;
    whatsapp: string;
    instagram: string;
    linktree: string;
    maps: string;
    shortDescription: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    highlightedWord: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    tertiaryCta: string;
    video: string;
    poster: string;
    mediaAlt: string;
  };
  socialProof: SocialProofItem[];
  services: ServiceItem[];
  experience: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    highlights: string[];
  };
  beforeAfter: {
    title: string;
    subtitle: string;
    items: BeforeAfterItem[];
  };
  gallery: {
    title: string;
    subtitle: string;
    images: GalleryImage[];
  };
  instagram: {
    title: string;
    subtitle: string;
    handle: string;
    cta: string;
  };
  location: {
    title: string;
    subtitle: string;
    city: string;
    mapsUrl: string;
    phone: string;
  };
  testimonials: {
    name: string;
    text: string;
    rating: number;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  finalCta: {
    title: string;
    subtitle: string;
    buttons: {
      label: string;
      kind: "primary" | "instagram" | "maps";
      variant?: "primary" | "secondary" | "ghost";
    }[];
  };
  footer: {
    description: string;
    links: {
      label: string;
      href: string;
    }[];
  };
};

export const landingData: LandingData = {
  business: {
    name: "Cleuza Priori",
    category: "Salão de beleza",
    city: "São Carlos",
    phone: "(16) 3374-5670",
    whatsapp: "",
    instagram: "https://www.instagram.com/cleuzapriori/",
    linktree:
      "https://linktr.ee/cleuzapriori?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
    maps: "https://maps.app.goo.gl/2L8QFdw7b9HS1Am96",
    shortDescription:
      "Especialista em cortes e mechas personalizadas, noivas e debutantes, com formação profissional em cursos VIP e em grupo.",
  },
  hero: {
    eyebrow: "SALÃO DE BELEZA EM SÃO CARLOS",
    title: "Cortes, mechas e produções especiais com assinatura personalizada.",
    highlightedWord: "personalizada",
    subtitle:
      "Cleuza Priori é especialista em cortes e mechas personalizadas, atendimento para noivas e debutantes, além de formação profissional com cursos VIP e em grupo.",
    primaryCta: "Agendar agora",
    secondaryCta: "Ver localização",
    tertiaryCta: "Conhecer Instagram",
    video: "/beauty/hero-premium.mp4",
    poster: "/beauty/hero-premium.svg",
    mediaAlt:
      "Vídeo editorial suave com tons nude, rosé e champagne para o hero da landing page",
  },
  socialProof: [
    {
      value: "Especialista",
      label: "Cortes e mechas",
      description:
        "Atendimento focado em cortes autorais e mechas personalizadas para valorizar cada cliente.",
    },
    {
      value: "Atendimento direto",
      label: "Agendamento fácil",
      description:
        "Entre em contato por telefone, Instagram, Linktree ou Google Maps com poucos cliques.",
    },
    {
      value: "Noivas e debutantes",
      label: "Produções especiais",
      description:
        "Experiência pensada para datas marcantes com cuidado, técnica e acabamento refinado.",
    },
    {
      value: "Cursos VIP e em grupo",
      label: "Formação profissional",
      description:
        "O template também comunica autoridade para negócios que ensinam e formam novas profissionais.",
    },
  ],
  services: [
    {
      title: "Cortes personalizados",
      description:
        "Cortes desenhados para valorizar estilo, rotina, formato de rosto e identidade.",
      image: "/beauty/service-cut.svg",
      badge: "Assinatura",
    },
    {
      title: "Mechas personalizadas",
      description:
        "Iluminações e mechas sob medida para criar brilho, contraste e naturalidade.",
      image: "/beauty/service-light.svg",
      badge: "Luzes",
    },
    {
      title: "Coloração sofisticada",
      description:
        "Tons elegantes e planejados com foco em harmonia visual e segurança dos fios.",
      image: "/beauty/service-color.svg",
      badge: "Cor",
    },
    {
      title: "Noivas e debutantes",
      description:
        "Produções especiais para ocasiões memoráveis com acabamento impecável e presença premium.",
      image: "/beauty/service-event.svg",
      badge: "Eventos",
    },
    {
      title: "Tratamentos capilares",
      description:
        "Cuidados para restaurar brilho, maciez, força e saúde dos fios no dia a dia.",
      image: "/beauty/service-care.svg",
      badge: "Cuidado",
    },
    {
      title: "Cursos VIP e em grupo",
      description:
        "Formação para profissionais que desejam evoluir técnica, repertório e posicionamento.",
      image: "/beauty/service-style.svg",
      badge: "Educação",
    },
  ],
  experience: {
    eyebrow: "EXPERIÊNCIA CLEUZA PRIORI",
    title: "Beleza, técnica e cuidado em cada atendimento.",
    description:
      "A proposta une sensibilidade estética, personalização e atenção aos detalhes para transformar o atendimento em uma experiência memorável. A mesma estrutura pode ser adaptada para outros negócios premium de beleza.",
    image: "/beauty/experience-editorial.svg",
    highlights: [
      "Especialista em cortes e mechas",
      "Atendimento para noivas e debutantes",
      "Cuidado personalizado do início ao fim",
      "Cursos VIP e formação em grupo",
    ],
  },
  beforeAfter: {
    title: "Resultados que valorizam sua beleza",
    subtitle:
      "Use esta área para destacar transformações, antes e depois, ou resultados reais do salão.",
    items: [
      {
        title: "Corte com acabamento leve e elegante",
        beforeImage: "/beauty/gallery-1.svg",
        afterImage: "/beauty/gallery-2.svg",
      },
      {
        title: "Mechas para brilho e movimento",
        beforeImage: "/beauty/gallery-3.svg",
        afterImage: "/beauty/gallery-4.svg",
      },
      {
        title: "Produção especial com resultado refinado",
        beforeImage: "/beauty/gallery-5.svg",
        afterImage: "/beauty/gallery-6.svg",
      },
    ],
  },
  gallery: {
    title: "Beleza em cada detalhe",
    subtitle:
      "Ambiente, atendimento, finalizações e bastidores apresentados em uma galeria clara, elegante e fácil de adaptar com fotos reais do cliente.",
    images: [
      {
        src: "/beauty/gallery-1.svg",
        alt: "Atendimento personalizado e preparação cuidadosa",
      },
      {
        src: "/beauty/gallery-2.svg",
        alt: "Finalização sofisticada em destaque",
      },
      {
        src: "/beauty/gallery-3.svg",
        alt: "Ambiente acolhedor com percepção premium",
      },
      {
        src: "/beauty/gallery-4.svg",
        alt: "Produtos, iluminação e composição visual",
      },
      {
        src: "/beauty/gallery-5.svg",
        alt: "Rotina de cuidado com acabamento delicado",
      },
      {
        src: "/beauty/gallery-6.svg",
        alt: "Bastidores e resultado profissional",
      },
    ],
  },
  instagram: {
    title: "Acompanhe inspirações, resultados e novidades",
    subtitle:
      "Direcione o visitante para o Instagram oficial e transforme a presença digital em prova social contínua para o salão.",
    handle: "@cleuzapriori",
    cta: "Ver Instagram",
  },
  location: {
    title: "Encontre o Cleuza Priori",
    subtitle:
      "Mostre onde o salão está e reduza a fricção para visitas, rotas e contato imediato.",
    city: "São Carlos",
    mapsUrl: "https://maps.app.goo.gl/2L8QFdw7b9HS1Am96",
    phone: "(16) 3374-5670",
  },
  testimonials: [
    {
      name: "Rosana Patrícia Petilli",
      text: "Sempre muito bem atendida por toda a equipe. Excelentes profissionais.",
      rating: 5,
    },
    {
      name: "Pricila Pasian",
      text: "Para o meu casamento, confiei cabelo, maquiagem e manicure ao salão. Tudo ficou impecável, sem atrasos e acima da minha expectativa.",
      rating: 5,
    },
    {
      name: "Vanessa Vasconcelos",
      text: "Atendimento incrível, profissionais atenciosas e um lugar realmente encantador.",
      rating: 5,
    },
  ],
  faq: [
    {
      question: "Como faço para agendar?",
      answer:
        "Você pode entrar em contato pelo telefone, Instagram, Linktree ou abrir a rota no Google Maps para mais informações.",
    },
    {
      question: "O salão atende noivas e debutantes?",
      answer:
        "Sim. O posicionamento atual destaca atendimentos e produções especiais para noivas e debutantes.",
    },
    {
      question: "Vocês oferecem cursos?",
      answer:
        "Sim. O salão também comunica formação profissional com cursos VIP e em grupo.",
    },
    {
      question: "Esse template pode ser adaptado para outros negócios?",
      answer:
        "Sim. Todo o conteúdo principal fica centralizado em data/landing.ts, facilitando a adaptação para outros negócios da beleza.",
    },
  ],
  finalCta: {
    title: "Pronta para viver sua melhor versão?",
    subtitle:
      "Agende seu horário e descubra uma experiência de beleza pensada para valorizar seu estilo, seu momento e sua autoestima.",
    buttons: [
      { label: "Agendar agora", kind: "primary", variant: "primary" },
      { label: "Chamar no Instagram", kind: "instagram", variant: "secondary" },
      { label: "Ver localização", kind: "maps", variant: "ghost" },
    ],
  },
  footer: {
    description:
      "Template premium de landing page para negócios de beleza, com foco em conversão, clareza visual e adaptação rápida para novos clientes.",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/cleuzapriori/" },
      {
        label: "Linktree",
        href: "https://linktr.ee/cleuzapriori?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
      },
      { label: "Google Maps", href: "https://maps.app.goo.gl/2L8QFdw7b9HS1Am96" },
      { label: "Telefone", href: "tel:+551633745670" },
    ],
  },
};
