import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Keshav Kotamraju — Computer Science & Math",
  author: "Keshav Kotamraju",
  description:
    "Computer Science and Mathematics student at the University of Pennsylvania with research experience in computational astrophysics, space science machine learning, and computational neuroscience.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "About", href: "#about" },
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Think Cosmos", href: "#think-cosmos" },
    { text: "Rock Climbing", href: "#rock-climbing" },
    { text: "Chess", href: "#chess" },
    { text: "Photography", href: "#photography" },
  ],
  socialLinks: [
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/keshav-kotamraju-1b38ab292/",
    },
    { text: "Github", href: "https://github.com/25Keshavk" },
    {
      text: "MemoryVault (Devpost)",
      href: "https://devpost.com/software/memoryvault",
    },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://example.com",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Keshav Kotamraju",
    specialty: "",
    summary:
      "Computer Science and Mathematics student at the University of Pennsylvania with research experience in computational astrophysics, machine learning for space science, and computational neuroscience.",
    email: "kkotamraju7@gmail.com",
  },
  experience: [
    {
      company: "UC Berkeley Space Sciences Laboratory",
      position: "Machine Learning Research Intern",
      startDate: "June 2024",
      endDate: "August 2024",
      summary: "Developed novel CNNs for gamma-ray detection on NASA's COSI telescope.",
    },
    {
      company: "Stanford Schnitzer Laboratory",
      position: "Computational Neuroscience Research Intern",
      startDate: "June 2022",
      endDate: "June 2024",
      summary: "Analyzed magnetic field effects on neurons and built lab infrastructure.",
    },
    {
      company: "UC Santa Cruz",
      position: "Computational Astrophysics Research Intern",
      startDate: "June 2022",
      endDate: "August 2022",
      summary: " improved hydrogen cloud identification by 58% using object detection models.",
    },
    {
      company: "Think Cosmos",
      position: "Founder",
      startDate: "January 2022",
      endDate: "July 2025",
      summary: "Founded a non-profit for K–12 astronomy education, raising $17k+.",
    },
    {
      company: "Astronomy & Earth Apps",
      position: "Co-Founder & Developer",
      startDate: "January 2022",
      endDate: "July 2025",
      summary: "Created apps for astronomy education and sunset prediction (1,100+ users).",
    },
    {
      company: "USPTO",
      position: "Provisional Patent Holder",
      startDate: "2024",
      endDate: "2024",
      summary: "Filed patent for detecting attack vectors in digital channels.",
    },
    {
      company: "Rocket Hackathon",
      position: "1st Place — Memory Vault",
      startDate: "2024",
      endDate: "2024",
      summary: "Built an Alzheimer's memory aid app using LLM-RAG and vector mapping.",
    },
    {
      company: "Honors & Awards",
      position: "Selected Achievements",
      startDate: "May 2021",
      endDate: "Present",
      summary: "National Chess Champion & National Merit Finalist.",
    },
  ],
  projects: [
    {
      name: "Memory Vault",
      summary:
        "A web application for Alzheimer's patients built for Rocket Hackathon 2024, using a custom LLM-RAG system and vector mapping to let users store and relive their memories with guided prompts and generative drawings.",
      linkPreview: "https://devpost.com/software/memoryvault",
      linkSource: "https://github.com/25Keshavk/MemoryVault",
      images: [
        "/memory-vault-1.jpg",
        "/memory-vault-2.jpg",
        "/memory-vault-3.jpg",
        "/memory-vault-4.jpg",
      ],
    },
    {
      name: "Computer Architecture",
      summary:
        "I used binary logic and a simple breadboard to make a 7 digit binary counter that implemented a push button clock to signal time. The project took me over 3 months to design, create online, and manually wire.",
      images: [
        "/ember-ai-1.jpg",
      ],
    },
    {
      name: "Robot Kinematics",
      summary:
        "I spent a few months with four wheel mecanum robots. I created code that, given a path specifying start/end coordinates, and a line/arc traversal, calculated a robots path in real time and powered the robots wheels to follow the path. I also implemented PID to simultaneously calculate the robots direction and adjust it to stay on path amidst friction/obstacles.",
      linkSource: "https://github.com/25Keshavk/Robot_Kinematics",
      images: [
        "/ember-ai-2.jpg",
        "/ember-ai-3.jpg",
      ],
    },
    {
      name: "Compilers",
      summary:
        "I created a compiler over the course of four months. The project detailed creating a compiler that converted Pascal code to Mips 32 Assembly along with implementing features like regular expressions. In the making of my compiler, I learned about grammars, lexical and syntax analysis, stack implementation, and code generation.",
      linkSource: "https://github.com/25Keshavk/Compilers",
      images: [
        "/compiler-1.jpg",
        "/compiler-2.jpg",
      ],
    },
  ],
  thinkCosmos: {
    description:
      "I founded Think Cosmos in January 2022 with the goal of promoting astronomy among K–12 students. Over three years, the organization raised provided 40 telescopes to schools across 13 US states, developed comprehensive educational materials, and built a thriving astronomy community. In my senior year of High School, I rallied the 26 chapters of Think Cosmos in states like North Carolina, Texas, and Washington DC. Together, we sponsored astronomy organizations and funded museum trips for underprivileged children to inspire the next generation of scientists and explorers.",
    images: [
      "/think-cosmos-1.jpg",
      "/think-cosmos-2.jpg",
      "/think-cosmos-3.jpg",
      "/think-cosmos-4.jpg",
    ],
  },
  about: {
    description: `
      I am a Computer Science and Mathematics student at the University of Pennsylvania, interested in software engineering, machine learning, computational astrophysics, and neuroscience. I grew up in the Bay Area and spend my free time playing in chess tournaments, practicing my photography, and bouldering. My academic background spans statistics and probability, linear algebra, multivariate calculus, discrete mathematics, programming languages, and the mathematical foundations of computer science.
    `,
    images: [
      "/about-1.jpg",
      "/about-2.jpg",
      "/about-3.jpg",
      "/about-4.jpg",
    ],
  },
  activities: {
    rockClimbing: {
      description:
        "I love to boulder in my free time. Climbing both indoors and outdoors, I've found the sport gives me a way to push my limits physically and mentally. Bouldering has helped me get over my fear of heights and learn to stay calm under pressure. I love the sport most for how it emphasizes elegance and technique over brute force strength.",
      image: "/rock-climbing-placeholder.jpg",
    },
    chess: {
      description:
        "Chess has been a long-time passion of mine. Starting in 9th grade, I played online during lunch break or after school. After a year of casual practice, I decided to take it to the next level and started competing. Every summer I attended two to five tournaments and had a reassuring amount of success. I loved the thought that went into each move, and wanted to keep rising the ranks. In the past four years, I've won first place at over five tournaments including the US National Championship, accumulating over $5000 in prizes. Currently, I'm rated 2150 on chess.com, in the top 0.01%. My dream is to one day get a Master title as I continue to play in tournaments.",
      images: [
        "/chess-1.jpg",
        "/chess-2.jpg",
      ],
    },
    photography: {
      description:
        "I enjoy photography as a way to capture the details that we overlook and the memories that we sometimes forget. It started off with borrowing my brothers Nikon camera and progressed to me getting my first camera at the end of senior year for my trip to Japan with friends. Looking back to the day the camera arrived, I'm grateful I captured every happy moment since.",
      images: [
        {
          src: "/photos/photo-1.jpg",
          alt: "Sample photograph 1",
        },
        {
          src: "/photos/photo-2.jpg",
          alt: "Sample photograph 2",
        },
        {
          src: "/photos/photo-3.jpg",
          alt: "Sample photograph 3",
        },
        {
          src: "/photos/photo-4.jpg",
          alt: "Sample photograph 4",
        },
      ],
    },
  },
};

// #5755ff
