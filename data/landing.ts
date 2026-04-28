export type SocialProofItem = {
  iconSvg: string;
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
    logo: string;
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
    phone: "(16) 99355-0770",
    whatsapp: "5516993550770",
    instagram: "https://www.instagram.com/cleuzapriori/",
    linktree:
      "https://linktr.ee/cleuzapriori?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
    maps: "https://maps.app.goo.gl/2L8QFdw7b9HS1Am96",
    shortDescription:
      "Especialista em cortes e mechas personalizadas, noivas e debutantes, com formação profissional em cursos VIP e em grupo.",
    logo: "/beauty/logo.png",
  },
  hero: {
    eyebrow: "SALÃO DE BELEZA EM SÃO CARLOS",
    title: "Cortes, mechas e produções especiais com assinatura personalizada",
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
      iconSvg:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><path d="M8.2 7.8 20 19.5"/><path d="M8.2 16.2 14 10.5"/><path d="M14.8 9.7 20 4.5"/></svg>',
      value: "Especialista",
      label: "Cortes e mechas",
      description:
        "Atendimento focado em cortes autorais e mechas personalizadas para valorizar cada cliente.",
    },
    {
      iconSvg:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M7 5h10a2 2 0 0 1 2 2v10l-4-2-4 2-4-2-2 1V7a2 2 0 0 1 2-2Z"/><path d="M9 9h6"/><path d="M9 12h4"/></svg>',
      value: "Atendimento direto",
      label: "Agendamento fácil",
      description:
        "Entre em contato por telefone, Instagram, Linktree ou Google Maps com poucos cliques.",
    },
    {
      iconSvg:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10Z"/><path d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/></svg>',
      value: "Noivas e debutantes",
      label: "Produções especiais",
      description:
        "Experiência pensada para datas marcantes com cuidado, técnica e acabamento refinado.",
    },
    {
      iconSvg:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M3 9.5 12 5l9 4.5-9 4.5L3 9.5Z"/><path d="M7 11.5V15c0 1.4 2.24 3 5 3s5-1.6 5-3v-3.5"/><path d="M21 9.5V15"/><path d="M21 15c0 1-.67 1.8-1.5 2.2"/></svg>',
      value: "Cursos VIP e em grupo",
      label: "Formação profissional",
      description:
        "Cursos voltados a profissionais que desejam aperfeiçoar técnica, atendimento e confiança no dia a dia.",
    },
  ],
  services: [
    {
      title: "Cortes personalizados",
      description:
        "Cortes desenhados para valorizar estilo, rotina, formato de rosto e identidade.",
      image: "/beauty/service-cut.png",
      badge: "Assinatura",
    },
    {
      title: "Mechas personalizadas",
      description:
        "Iluminações e mechas sob medida para criar brilho, contraste e naturalidade.",
      image: "/beauty/service-light.png",
      badge: "Luzes",
    },
    {
      title: "Coloração sofisticada",
      description:
        "Tons elegantes e planejados com foco em harmonia visual e segurança dos fios.",
      image: "/beauty/service-color.jpg",
      badge: "Cor",
    },
    {
      title: "Noivas e debutantes",
      description:
        "Produções especiais para ocasiões memoráveis com acabamento impecável e presença premium.",
      image: "/beauty/service-event.png",
      badge: "Eventos",
    },
    {
      title: "Tratamentos capilares",
      description:
        "Cuidados para restaurar brilho, maciez, força e saúde dos fios no dia a dia.",
      image: "/beauty/service-care.jpg",
      badge: "Cuidado",
    },
    {
      title: "Cursos VIP e em grupo",
      description:
        "Formação para profissionais que desejam evoluir técnica, repertório e posicionamento.",
      image: "/beauty/service-style.jpg",
      badge: "Educação",
    },
  ],
  experience: {
    eyebrow: "EXPERIÊNCIA CLEUZA PRIORI",
    title: "Beleza, técnica e cuidado em cada atendimento.",
    description:
      "A proposta une sensibilidade estética, personalização e atenção aos detalhes para transformar o atendimento em uma experiência memorável.",
    image: "/beauty/experience-editorial.png",
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
        src: "/beauty/gallery-1.jpg",
        alt: "Atendimento personalizado e preparação cuidadosa",
      },
      {
        src: "/beauty/gallery-2.png",
        alt: "Finalização sofisticada em destaque",
      },
      {
        src: "/beauty/gallery-3.png",
        alt: "Ambiente acolhedor com percepção premium",
      },
      {
        src: "/beauty/gallery-4.png",
        alt: "Produtos, iluminação e composição visual",
      },
      {
        src: "/beauty/gallery-5.png",
        alt: "Rotina de cuidado com acabamento delicado",
      },
      {
        src: "/beauty/gallery-6.png",
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
    phone: "(16) 99355-0770",
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
      question: "Posso conhecer mais sobre os serviços e atendimentos?",
      answer:
        "Sim. Pelo Instagram, Linktree e contato direto você acompanha novidades, tira dúvidas e encontra a melhor forma de agendar seu atendimento.",
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
      "Cortes, mechas, produções especiais e formação profissional com o cuidado e a assinatura de Cleuza Priori.",
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
