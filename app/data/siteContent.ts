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
    saudacao: "Olá, sou o Luís Sousa",
    titulo: "Desenvolvedor de software focado em soluções fiáveis e simples",
    descricao:
      "Construo experiências digitais com atenção à performance, legibilidade e impacto no negócio.",
    ctaPrincipal: { label: "Ver projetos", href: "#projetos" },
    ctaSecundario: { label: "Falar comigo", href: "#contacto" },
  },
  sobre: {
    titulo: "Sobre mim",
    conteudo:
      "Sou um profissional de tecnologia com foco em desenvolvimento web e aplicações escaláveis. Gosto de transformar requisitos complexos em produtos claros, rápidos e fáceis de manter.",
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
