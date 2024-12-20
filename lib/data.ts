import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiAmazonaws,
  SiSupabase,
  SiFirebase,
  SiRedux,
  SiGit,
  SiDocker,
  SiBootstrap,
  SiMui,
  SiPrisma,
  SiFlutter,
  SiHeroku,
  SiTailwindcss,
  SiFoodpanda,
  SiKubernetes,
  SiVirtualbox,
  SiCloudflare,
  SiSocketdotio,
  SiPuppeteer,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { icons } from "lucide-react";

export const skills = [
  {
    icon: SiTypescript,
    text: "TypeScript",
  },
  {
    icon: SiJavascript,
    text: "JavaScript",
  },
  {
    icon: SiPython,
    text: "Python",
  },

  {
    icon: SiReact,
    text: "React",
  },
  {
    icon: SiNextdotjs,
    text: "Next JS",
  },
  {
    icon: SiTailwindcss,
    text: "Tailwind",
  },
  {
    icon: SiRedux,
    text: "Redux",
  },
  {
    icon: SiFoodpanda,
    text: "Zustand",
  },
  // {
  //   icon: SiHtml5,
  //   text: "HTML5",
  // },
  // {
  //   icon: SiCss3,
  //   text: "CSS3",
  // },
  {
    icon: SiNodedotjs,
    text: "Node JS",
  },
  {
    icon: SiExpress,
    text: "Express Js",
  },

  {
    icon: SiPuppeteer,
    text: "Puppeteer",
  },

  {
    icon: SiSocketdotio,
    text: "Socket IO",
  },

  {
    icon: BiLogoPostgresql,
    text: "PostgreSQL",
  },
  {
    icon: SiMongodb,
    text: "MongoDB",
  },
  {
    icon: SiPrisma,
    text: "Prisma",
  },
  {
    icon: SiGit,
    text: "Git",
  },

  {
    icon: SiSupabase,
    text: "Supabase",
  },
  {
    icon: SiAmazonaws,
    text: "AWS",
  },
  {
    icon: SiCloudflare,
    text: "Cloudflare",
  },

  {
    icon: SiDocker,
    text: "Docker",
  },

  {
    icon: SiKubernetes,
    text: "Kubernetes",
  },
];

export interface Project {
  title: string;
  description: string;
  link: string;
  github: string;
}

export const projects: Project[] = [
  {
    title: "Discord Server",
    description:
      "A real-time communication platform built with TypeScript, Next.js, Prisma, and SocketIO, offering secure authentication and versatile chat features. Users can engage in personal or group conversations using text, emojis, images, and PDFs, while also creating custom channels for audio, video, or text communication. This project emphasizes seamless user interaction and dynamic communication options, replicating core features of Discord.",
    link: "https://chat.atishthakur.codes/login",
    github: "https://github.com/atish-tech/connection-server",
  },
];

export interface WorkExperience {
  company: string;
  logo: string;
  position: string;
  description: string;
  years: string;
  role: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Truedax Studio Pvt. Ltd.",
    role: "Software Engineer",
    logo: "https://www.truedax.io/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75",
    position: "Software Engineer",
    description:
      "At Truedax, I worked as a Full-Stack Web Developer, focusing on optimizing web performance and creating scalable solutions. I developed a web scraper middleware using Puppeteer, Next.js, and Himalaya, which transformed scraped data into reusable React components, improving SEO by over 90% and boosting performance by 75%. I also built MakeMyLogin, a comprehensive authentication system featuring OTP, passwordless login, and SSO integration. This role sharpened my skills in building high-performance, secure web applications while enhancing user interaction and experience.",
    years: "Apr, 2024 - Current",
  },
  {
    company: "Satya Kabir E-solutions Pvt. Ltd.",
    role: "React Developer",
    logo: "https://www.satyakabir.com/_next/image?url=https%3A%2F%2Fadmin.satyakabir.com%2Fstorage%2Fapp%2Fpublic%2Fimages%2Fbusiness_setting%2FNrg6RYA9witADGA2Tj6FL1VG6wbuAnfrJhcSFAbZ.png&w=1920&q=75",
    position: "React Developer",
    description:
      "At Satya Kabir E-Solutions, I worked as a React Developer, where I utilized Material-UI (MUI) to design and customize components, ensuring seamless integration and cohesive project theming. I developed a real-time chat component using SocketIO, enabling instant communication within the application. In addition to implementing new features, I resolved bugs and optimized the application's performance to meet client requirements, contributing to the overall functionality and user experience.",
    years: "Jan, 2024 - Feb, 2024",
  },
];

export const aboutYou = {
  name: "Atish Kumar Thakur",
  description:
    "I’m Atish Kumar Thakur, a Full-Stack Developer with expertise in building scalable, high-performance web applications. With a strong foundation in both front-end and back-end development, I specialize in creating dynamic user experiences and optimizing performance across various platforms.",
  yearsOfExperience: "9 months",
  location: "Bengaluru 🇮🇳",
  email: "katish332@gmail.com",
};

export const logoText = "@atishthakur";

export const marketingHeadlines = {
  mainHeadline:
    "Building Seamless Web Experiences with Innovation and Precision.",
  subHeadline: "Software Engineer @TrueDax",
};

export const websiteMetadata = {
  title: "Atish Thakur | Software Engineer",
  description: "👋 Hey, Random Person here. Welcome to my portflio/blog.",
};
