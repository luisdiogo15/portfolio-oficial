export type Projeto = {
  titulo: string;
  stack: string[];
  descricao: string;
  githubUrl: string;
};

export const siteContent = {
  nav: [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#sobre" },
    { label: "Competências", href: "#skills" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contacto", href: "#contacto" },
  ],
  hero: {
  saudacao: "Olá, sou o Luís Diogo",
  titulo: "Estudante de Engenharia Informática focado em construir projetos reais e funcionais",
  descricao:
    "Tenho 18 anos e estou a iniciar o meu percurso na área da tecnologia. Este site é o meu portfólio, onde partilho os projetos que vou desenvolvendo ao longo da universidade e da minha evolução pessoal.",
  ctaPrincipal: { label: "Ver projetos", href: "#projetos" },
  ctaSecundario: { label: "Falar comigo", href: "#contacto" },
  },
  sobre: {
    titulo: "Estudante de Engenharia Informática",
    conteudo: "Este é o meu espaço pessoal onde partilho os projetos que vou desenvolvendo e a minha evolução na área da tecnologia.",
  },
  skills: {
    titulo: "Competências",
    lista: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "C++",
      "SQL",
      "Git",
    ],
  },
  projetos: {
    titulo: "Projetos",
    lista: [
      {
        titulo: "Sistema de Gestão de Tarefas",
        stack: ["React", "TypeScript", "Node.js"],
        descricao:
          "Plataforma para organização de equipas com quadros, estados personalizados e histórico de atividade.",
        githubUrl: "#",
      },
      {
        titulo: "Análise de Dados de Vendas",
        stack: ["Python", "Pandas", "SQL"],
        descricao:
          "Pipeline de dados com relatórios automáticos para apoiar decisões comerciais semanais.",
        githubUrl: "#",
      },
      {
        titulo: "Motor Gráfico Educativo",
        stack: ["C++", "OpenGL", "CMake"],
        descricao:
          "Projeto académico para visualização 3D interativa e exploração de conceitos de computação gráfica.",
        githubUrl: "#",
      },
    ] as Projeto[],
  },
  contacto: {
    titulo: "Contacto",
    descricao:
      "Se tens uma ideia ou oportunidade, envia uma mensagem. Respondo com brevidade.",
  },
  footer: {
    texto: "© 2026 Luís Sousa. Todos os direitos reservados.",
  },
};
