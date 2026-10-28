import type { CV } from "@/app/lib/cv/types";

/**
 * Single source of truth for the CV at / (en) and /pt (pt-BR).
 * Edit this file only. Components render whatever is here.
 *
 * Text fields accept a plain string (same in both languages)
 * or { en, pt }. Dates use "YYYY-MM". Counters are derived from them.
 */
export const cv: CV = {
  name: "Lucas Silveira",
  // Original photo with the background removed locally (assets-src/cutout7.py), 1010x876.
  photo: { src: "/cv/profile-v8.png", alt: "Lucas Silveira" },
  heroChips: ["React", "Node.js", "Solidity", "React Native"],
  headline: {
    en: "Software Engineer | Full-Stack, Mobile & Web3",
    pt: "Engenheiro de Software | Full-Stack, Mobile e Web3",
  },
  location: { en: "São Paulo, Brazil", pt: "São Paulo, Brasil" },
  availability: {
    en: "Open to software engineering roles",
    pt: "Disponível para vagas de engenharia de software",
  },
  workMode: {
    en: "Remote, UTC-3, available immediately",
    pt: "Remoto, UTC-3, disponível imediatamente",
  },
  siteUrl: "https://www.skeletorlabs.xyz",

  links: [
    {
      kind: "email",
      label: "lucas.fernandes.silveira@gmail.com",
      href: "mailto:lucas.fernandes.silveira@gmail.com",
    },
    {
      kind: "linkedin",
      label: "linkedin.com/in/lfsilveira",
      href: "https://www.linkedin.com/in/lfsilveira",
    },
    {
      kind: "github",
      label: "github.com/skeletorlabs",
      href: "https://github.com/skeletorlabs",
    },
  ],

  about: {
    paragraphs: [
      {
        en: "I'm a software engineer with {years} years of experience across web, mobile and backend, including the last {web3YearsWord} building crypto products. I've worked with Ruby, JavaScript and TypeScript, native iOS and React Native, and more recently Node.js, NestJS, Next.js, PostgreSQL and Go.",
        pt: "Sou engenheiro de software com {years} anos de experiência em web, mobile e backend, sendo os últimos {web3YearsWord} construindo produtos cripto. Trabalhei com Ruby, JavaScript e TypeScript, iOS nativo e React Native e, mais recentemente, com Node.js, NestJS, Next.js, PostgreSQL e Go.",
      },
      {
        en: "Along the way I've also led teams. As CTO at Samurai Starter I owned the technical roadmap and the engineers delivering it, and earlier I worked as a Scrum Master and Tech Lead on mobile and web squads. That mix means I'm comfortable owning delivery as well as code.",
        pt: "Ao longo do caminho também liderei times. Como CTO na Samurai Starter, fui responsável pelo roadmap técnico e pelos engenheiros que o executavam e, antes disso, atuei como Scrum Master e Tech Lead em squads mobile e web. Essa combinação faz com que eu me sinta à vontade sendo responsável tanto pela entrega quanto pelo código.",
      },
      {
        en: "On my own time I designed and built Phase Model in 2026, a market regime intelligence platform deployed on its own domain. It is not publicly launched yet. It has three Go services (a regime engine with data ingestion and workers, an identity service with JWT auth, API keys and Stripe billing in sandbox mode, and a gateway with an MCP server for AI agents) and a Next.js front end. I built it with Claude, and I reviewed and tested what it produced. I use Claude and Codex daily in my development workflow.",
        pt: "Por conta própria, projetei e construí em 2026 o Phase Model, uma plataforma de inteligência de regime de mercado implantada no seu próprio domínio. Ela ainda não foi lançada publicamente. Tem três serviços em Go (um motor de regime com ingestão de dados e workers, um serviço de identidade com autenticação JWT, API keys e cobrança via Stripe em modo sandbox, e um gateway com um servidor MCP para agentes de IA) e um front end em Next.js. Construí com o Claude, e revisei e testei o que ele produziu. Uso Claude e Codex diariamente no meu fluxo de desenvolvimento.",
      },
      {
        en: "On the crypto side, at TRAC Systems I worked on a self-custodial wallet ecosystem (Ledger integration, Bitcoin transaction flows, a crypto primitives library, mobile and browser wallets), and at Samurai Starter I designed and shipped Solidity contracts tested with Foundry.",
        pt: "No lado cripto, na TRAC Systems trabalhei em um ecossistema de carteira self-custodial (integração com Ledger, fluxos de transação Bitcoin, uma biblioteca de primitivas criptográficas, carteiras mobile e de navegador) e, na Samurai Starter, projetei e entreguei contratos em Solidity testados com Foundry.",
      },
      {
        en: "I'm currently looking for software engineering roles on teams building products where reliability and attention to detail matter.",
        pt: "Hoje estou buscando vagas de engenharia de software em times que constroem produtos onde confiabilidade e atenção aos detalhes fazem diferença.",
      },
    ],
  },

  education: [
    {
      institution: "FGV, Fundação Getulio Vargas",
      degree: { en: "MBA in Project Management", pt: "MBA em Gestão de Projetos" },
      startYear: 2007,
      endYear: 2009,
    },
    {
      institution: "UNIRP, Centro Universitário de Rio Preto",
      degree: {
        en: "Bachelor's in Information Systems and Technologies",
        pt: "Bacharelado em Sistemas e Tecnologias da Informação",
      },
      startYear: 2003,
      endYear: 2006,
    },
  ],

  certifications: [
    "International Scrum Master Foundation",
    "Scrum Fundamentals Certified (SFC)",
    "Mastering React Native (GoNative)",
  ],

  languages: [
    {
      name: { en: "English", pt: "Inglês" },
      level: { en: "Full professional", pt: "Fluente" },
    },
    {
      name: { en: "Portuguese", pt: "Português" },
      level: { en: "Native", pt: "Nativo" },
    },
  ],

  stack: [
    {
      title: "Frontend",
      icon: "frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "React Native",
        { en: "Swift (native iOS)", pt: "Swift (iOS nativo)" },
        "dApps",
        { en: "Wallet UIs", pt: "Interfaces de carteira" },
        "Figma",
      ],
    },
    {
      title: "Backend",
      icon: "backend",
      items: [
        "Node.js",
        "NestJS",
        "TypeScript",
        "PostgreSQL",
        "Go",
        "Ruby",
        "Firebase (Firestore)",
      ],
    },
    {
      title: "AI / MCP",
      icon: "ai",
      items: ["Claude", "Codex", "MCP"],
    },
    {
      title: "Blockchain & Web3",
      icon: "web3",
      items: [
        "Solidity",
        "Foundry",
        "EVM",
        "ethers.js",
        "Bitcoin",
        "IPFS",
        "Ledger",
      ],
    },
    {
      title: { en: "Management", pt: "Gestão" },
      icon: "management",
      items: ["CTO", "Scrum Master", "Tech Lead"],
    },
  ],

  experience: [
    {
      company: "TRAC Systems",
      title: {
        en: "Blockchain Engineer / Wallet & Protocol Engineer",
        pt: "Engenheiro Blockchain / Engenheiro de Carteira e Protocolo",
      },
      location: { en: "Germany (Remote)", pt: "Alemanha (Remoto)" },
      start: "2025-08",
      end: "2026-09",
      web3: true,
      summary: [
        {
          en: "Working on wallet and blockchain infrastructure for a production-grade, self-custodial crypto ecosystem, covering the P2P settlement network, crypto primitives library, mobile app, and browser extension.",
          pt: "Trabalho na infraestrutura de carteira e blockchain de um ecossistema cripto self-custodial em produção, cobrindo a rede de liquidação P2P, a biblioteca de primitivas criptográficas, o app mobile e a extensão de navegador.",
        },
      ],
      highlightsIntro: {
        en: "Focused on designing and implementing transaction and signing systems, including:",
        pt: "Foco em projetar e implementar sistemas de transação e assinatura, incluindo:",
      },
      highlights: [
        {
          en: "Hardware wallet integration (Ledger, BLE, mobile-first constraints)",
          pt: "Integração com hardware wallet (Ledger, BLE, restrições mobile-first)",
        },
        {
          en: "Bitcoin transaction flows (PSBT, Taproot, SegWit, UTXO management)",
          pt: "Fluxos de transação Bitcoin (PSBT, Taproot, SegWit, gestão de UTXO)",
        },
        {
          en: "Core crypto primitives (Ed25519 signing, BIP-39 derivation, bech32m address encoding, blake3 hashing)",
          pt: "Primitivas criptográficas centrais (assinatura Ed25519, derivação BIP-39, codificação de endereços bech32m, hashing blake3)",
        },
        {
          en: "Secure signing and validation flows across devices and environments",
          pt: "Fluxos seguros de assinatura e validação entre dispositivos e ambientes",
        },
        {
          en: "Address derivation, account management, and balance tracking",
          pt: "Derivação de endereços, gestão de contas e acompanhamento de saldos",
        },
        {
          en: "Handling edge cases across protocol, hardware, and UX layers",
          pt: "Tratamento de edge cases nas camadas de protocolo, hardware e UX",
        },
      ],
      outro: [
        {
          en: "Worked closely with the core team on the main product while owning the mobile app and crypto libraries independently. Responsible for ensuring correctness and reliability in user-critical flows involving funds and device interactions.",
          pt: "Trabalhei próximo do time principal no produto central, sendo responsável de forma independente pelo app mobile e pelas bibliotecas criptográficas. Responsável por garantir correção e confiabilidade em fluxos críticos para o usuário, envolvendo fundos e interação com dispositivos.",
        },
      ],
      tags: ["React.js", "Node.js", "TypeScript", "Crypto", "Blockchain", "Next.js", "Figma"],
    },
    {
      company: "Samurai Starter",
      title: { en: "Blockchain Engineer / CTO", pt: "Engenheiro Blockchain / CTO" },
      location: { en: "Taiwan (Remote)", pt: "Taiwan (Remoto)" },
      start: "2023-03",
      end: "2025-07",
      web3: true,
      summary: [
        {
          en: "Led development of EVM-based smart contracts and dApps, focusing on protocol design and secure asset flows.",
          pt: "Liderei o desenvolvimento de smart contracts e dApps baseados em EVM, com foco em design de protocolo e fluxos seguros de ativos.",
        },
      ],
      highlightsIntro: { en: "Designed and implemented:", pt: "Projetei e implementei:" },
      highlights: [
        {
          en: "Token distribution and vesting systems",
          pt: "Sistemas de distribuição de tokens e vesting",
        },
        {
          en: "Smart contracts handling ERC-20 payments and user balances",
          pt: "Smart contracts para pagamentos ERC-20 e saldos de usuários",
        },
        {
          en: "Off-chain services for execution, settlement, and device interaction",
          pt: "Serviços off-chain para execução, liquidação e interação com dispositivos",
        },
        {
          en: "Security mechanisms including validation layers and emergency controls",
          pt: "Mecanismos de segurança, incluindo camadas de validação e controles de emergência",
        },
      ],
      outro: [
        {
          en: "Built and maintained production systems interacting with real users and funds under strict reliability requirements.",
          pt: "Construí e mantive sistemas em produção com usuários e fundos reais, sob requisitos rígidos de confiabilidade.",
        },
      ],
      tags: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Solidity",
        "GraphQL",
        "ethers.js",
        "Ethereum",
        "EVM",
        "Firebase",
        "Figma",
      ],
    },
    {
      company: "One Ring Finance",
      title: {
        en: "Blockchain Engineer / Front End Lead",
        pt: "Engenheiro Blockchain / Líder de Front End",
      },
      location: { en: "Germany (Remote)", pt: "Alemanha (Remoto)" },
      start: "2022-01",
      end: "2024-02",
      web3: true,
      summary: [
        {
          en: "Worked on Solidity smart contracts, vesting systems, and token distribution logic.",
          pt: "Trabalhei em smart contracts em Solidity, sistemas de vesting e lógica de distribuição de tokens.",
        },
        {
          en: "Designed and implemented DeFi contracts and dApp integrations using ethers.js, focusing on secure asset flows, edge-case handling, and production-ready on-chain logic.",
          pt: "Projetei e implementei contratos DeFi e integrações de dApps com ethers.js, com foco em fluxos seguros de ativos, tratamento de edge cases e lógica on-chain pronta para produção.",
        },
      ],
      highlights: [],
      tags: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Solidity",
        "GraphQL",
        "EVM",
        "Ethereum",
        "ethers.js",
        "Firebase",
        "Figma",
      ],
    },
    {
      company: "Ília",
      title: {
        en: "iOS Developer / Tech Lead",
        pt: "Desenvolvedor iOS / Tech Lead",
      },
      location: { en: "Brasília, Brazil (Remote)", pt: "Brasília, Brasil (Remoto)" },
      start: "2021-01",
      end: "2021-12",
      highlights: [
        {
          en: "Acted as both hands-on developer and technical lead across multiple teams, including one mobile team and three web teams.",
          pt: "Atuei tanto como desenvolvedor hands-on quanto líder técnico em múltiplos times, incluindo um time mobile e três times web.",
        },
        {
          en: "Responsible for coordinating development efforts, supporting technical decisions, and ensuring delivery consistency across different products and stacks.",
          pt: "Responsável por coordenar os esforços de desenvolvimento, apoiar decisões técnicas e garantir consistência de entrega entre diferentes produtos e stacks.",
        },
        {
          en: "Led mobile development while contributing to broader system architecture and cross-team integration.",
          pt: "Liderei o desenvolvimento mobile enquanto contribuía para a arquitetura de sistema mais ampla e a integração entre times.",
        },
        {
          en: "Focused on building reliable applications with strong emphasis on performance, usability, and maintainability.",
          pt: "Foco em construir aplicações confiáveis, com forte ênfase em performance, usabilidade e manutenibilidade.",
        },
      ],
      tags: [
        "Swift",
        "React Native",
        { en: "Lead Management", pt: "Gestão de liderança" },
        "Scrum Master",
        "Figma",
      ],
    },
    {
      company: "Blu",
      title: {
        en: "React Native and iOS Developer / Tech Lead",
        pt: "Desenvolvedor React Native e iOS / Tech Lead",
      },
      location: { en: "Rio de Janeiro, Brazil (Remote)", pt: "Rio de Janeiro, Brasil (Remoto)" },
      start: "2018-03",
      end: "2020-12",
      highlights: [
        {
          en: "Led development of mobile applications with focus on performance, reliability, and user experience.",
          pt: "Liderei o desenvolvimento de aplicações mobile com foco em performance, confiabilidade e experiência do usuário.",
        },
        {
          en: "This experience later supported work on mobile crypto wallets and complex signing flows.",
          pt: "Essa experiência mais tarde deu suporte ao trabalho com carteiras cripto mobile e fluxos complexos de assinatura.",
        },
      ],
      tags: [
        "React.js",
        "Ruby on Rails",
        "GraphQL",
        "React Native",
        "Swift",
        "SwiftUI",
        { en: "Lead Management", pt: "Gestão de liderança" },
        "Scrum Master",
        "Figma",
      ],
    },
    {
      company: "ADTsys Cloud Computing",
      title: {
        en: "Mobile and Ruby Developer / Tech Lead",
        pt: "Desenvolvedor Mobile e Ruby / Tech Lead",
      },
      location: { en: "Campinas, SP, Brazil", pt: "Campinas, SP, Brasil" },
      start: "2015-02",
      end: "2018-03",
      highlights: [],
      tags: ["React.js", "TypeScript", "React Native", "Ruby on Rails"],
    },
    {
      company: "IMA (Informática de Municípios Associados)",
      title: {
        en: "Ruby Developer / Process Manager",
        pt: "Desenvolvedor Ruby / Gerente de Processos",
      },
      location: { en: "Campinas, SP, Brazil", pt: "Campinas, SP, Brasil" },
      start: "2014-07",
      end: "2015-01",
      highlights: [],
      tags: ["Ruby on Rails", { en: "Lead Management", pt: "Gestão de liderança" }],
    },
    {
      company: "Cammino Digital",
      title: {
        en: "Ruby and Mobile Developer / Project Manager",
        pt: "Desenvolvedor Ruby e Mobile / Gerente de Projetos",
      },
      location: {
        en: "São José do Rio Preto, SP, Brazil",
        pt: "São José do Rio Preto, SP, Brasil",
      },
      start: "2011-12",
      end: "2013-08",
      highlights: [],
      tags: ["Ruby on Rails", "React Native", "PostgreSQL", "MySQL"],
    },
    {
      company: "Webplus Brasil",
      title: {
        en: "Front End Developer / Project Manager",
        pt: "Desenvolvedor Front End / Gerente de Projetos",
      },
      location: {
        en: "São José do Rio Preto, SP, Brazil",
        pt: "São José do Rio Preto, SP, Brasil",
      },
      start: "2010-02",
      end: "2011-06",
      highlights: [],
      tags: ["JavaScript", "Adobe Flash", "Adobe Photoshop", "HTML", "CSS"],
    },
    {
      company: "CI&T",
      title: {
        en: "Ruby and JavaScript Developer",
        pt: "Desenvolvedor Ruby e JavaScript",
      },
      location: { en: "Campinas, SP, Brazil", pt: "Campinas, SP, Brasil" },
      start: "2009-07",
      end: "2010-11",
      highlights: [
        {
          en: "Worked on backend systems using Ruby on Rails, building and maintaining web applications and APIs for large-scale environments.",
          pt: "Trabalhei em sistemas backend com Ruby on Rails, construindo e mantendo aplicações web e APIs para ambientes de grande escala.",
        },
        {
          en: "Focused on application reliability, data handling, and business logic implementation within established production systems.",
          pt: "Foco em confiabilidade de aplicações, tratamento de dados e implementação de regras de negócio em sistemas de produção já estabelecidos.",
        },
        {
          en: "Collaborated across teams and stakeholders, gaining early exposure to coordination and delivery processes while preparing for a transition into Scrum Master responsibilities.",
          pt: "Colaborei com diferentes times e stakeholders, tendo os primeiros contatos com processos de coordenação e entrega enquanto me preparava para assumir responsabilidades de Scrum Master.",
        },
      ],
      tags: ["Ruby on Rails", "JavaScript"],
    },
    {
      company: "Shift",
      title: { en: "Back End Developer", pt: "Desenvolvedor Back End" },
      location: {
        en: "São José do Rio Preto, SP, Brazil",
        pt: "São José do Rio Preto, SP, Brasil",
      },
      start: "2007-04",
      end: "2008-06",
      highlights: [],
      tags: ["JavaScript", "HTML", "CSS", "D3"],
    },
    {
      company: "Diginova Sites e Sistemas",
      title: { en: "JavaScript Developer", pt: "Desenvolvedor JavaScript" },
      location: {
        en: "São José do Rio Preto, SP, Brazil",
        pt: "São José do Rio Preto, SP, Brasil",
      },
      start: "2005-08",
      end: "2006-09",
      highlights: [],
      tags: ["JavaScript", "PostgreSQL", "MySQL", "AJAX"],
    },
  ],

  projects: {
    featured: [
      {
        name: "Phase Model",
        year: 2026,
        description: {
          en: "Market regime model for BTC, ETH, SOL and traditional assets. Three Go services (core, identity, gateway), an MCP server for AI agents, JWT and API-key auth, Stripe billing (sandbox) and a Next.js front end. Deployed, not yet publicly launched. Built with Claude, reviewed and tested by me.",
          pt: "Modelo de regime de mercado para BTC, ETH, SOL e ativos tradicionais. Três serviços em Go (core, identity, gateway), um servidor MCP para agentes de IA, autenticação JWT e por API key, cobrança via Stripe (sandbox) e um front end em Next.js. Em produção, ainda sem lançamento público. Construído com o Claude, revisado e testado por mim.",
        },
        url: "https://www.phasemodel.xyz/",
        tags: ["Go", "MCP", "Next.js", "Stripe", "Claude"],
      },
    ],
    owner: "skeletorlabs",
    includeAllPublic: true,
    // Only repos with at least one topic on GitHub are shown.
    requireTopics: true,
    exclude: ["skeletorlabs/.github", "skeletorlabs/chainlink-ccip-poc"],
    // Personal projects under Skeletor Labs. Descriptions come from GitHub
    // unless set here. These are also what renders if the GitHub API fails,
    // so keep this list to repos that have topics.
    // TODO: skeletorlabs/l2ve has no description on GitHub. Add one here or on GitHub.
    items: [
      { repo: "skeletorlabs/skeletorlabs" },
      { repo: "skeletorlabs/samurai" },
      { repo: "skeletorlabs/l2ve" },
      { repo: "skeletorlabs/skeletorlabs-contracts" },
    ],
  },
};
