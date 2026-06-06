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
  titulo: "Sobre mim",
  conteudo:
    "Sou estudante de Engenharia Informática na Universidade da Madeira. Tenho interesse por programação, desenvolvimento de software e tecnologia em geral. Fora dos estudos, gosto de treinar no ginásio e de me desafiar constantemente a aprender e evoluir. Neste portefólio apresento alguns dos projetos e competências que tenho desenvolvido ao longo do meu percurso académico.",
},
    skills: {
      titulo: "Competências",
      lista: [
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Python",
        "FastAPI",
        "C++",
        "Git",
  ],
},

  projetos: {
    titulo: "Projetos",
    lista: [
      {
        titulo: "Portefólio Pessoal Full-Stack",
        stack: ["Next.js", "TypeScript", "FastAPI", "Python", "Resend"],
        descricao:
          "Site pessoal desenvolvido com Next.js e TypeScript, com backend em FastAPI, formulário de contacto funcional e envio real de emails através da Resend API.",
        githubUrl: "https://github.com/luisdiogo15/portfolio-oficial.git",
      },
      {
        titulo: "Simulador EDA FC",
        stack: ["C++", "Structs", "Arrays Dinâmicos", "Ficheiros"],
        descricao:
          "Projeto académico em C++ que simula a gestão de uma equipa de futebol, incluindo plantel, titulares, suplentes, jornadas, lesões, castigos, transferências e gravação de dados.",
        githubUrl: "https://github.com/luisdiogo15/EDA_Cpp.git",
      },

{
        titulo: "SuperEDA — Gestão de Supermercado",
        stack: ["C++", "Listas Ligadas", "Árvores BST", "Ficheiros"],
        descricao:
          "Projeto académico em C++ que simula o funcionamento de um supermercado, incluindo gestão de stock, setores, campanhas, vendas, armazém e registo de produtos vendidos.",
        githubUrl: "https://github.com/luisdiogo15/EDA_Projeto2_SuperEDA.git",
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
