import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  netflix,
  carnage,
  mrglobal,
  cruzpos,
  threejs,
  starbucks,
  nextjs,
  apexinnov,
  apex,
  vuejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  }
];

const services = [
  {
    title: " HTML ",
    icon: html,
  },
  {
    title: "TAILWIND CSS",
    icon: tailwind,
  },
  {
    title: "REACT JS",
    icon: reactjs,
  },
  {
    title: "JAVASCRIPT",
    icon: javascript,
  },
  {
    title: "NEXT JS",
    icon: nextjs,
  },
  {
    title: "VUE JS",
    icon: vuejs,
  },
];


const experiences = [
  {
    title: "Trainee Software Engineer",
    company_name: "MD Soft Computer Solutions(pvt) ltd",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Aug 2023 - Nov 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Apex Innovations",
    icon: apex,
    iconBg: "#E6DEDD",
    date: "Dec 2023",
    points: [
      "Working as a Web Developer in stacks such as React, Next JS, Tailwind CSS ,HTML, Javascript.",
      "Developing and maintaining projects in MERN Stack",
      "Designing responsive information sites using Wordpress, working with plugins etc.",
    ],
  },
];


const projects = [
 
  {
    name: "Exporting Site",
    description:
      "Exporting top quality products mainly spices, rice and seafood worldwide for Sri Lankan taste lovers. You can get high nutritious items by contacting us.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: mrglobal,
    source_code_link: "https://mrglobalimpex.com/",
  },
  {
    name: "POS System",
    description:
      "Cruz POS is more than just a tool – it’s your business’s ultimate ally. Ease sales, invoices, payments with Cruz POS and Stay on top of your game.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "Plugins",
        color: "pink-text-gradient",
      },
    ],
    image: cruzpos,
    source_code_link: "https://cruzpos.com/",
  },
  {
    name: "Apex Innovations",
    description:
      "Apex innovations (Pvt) Ltd is a Software company in Sri Lanka to fulfill all your requirements regarding Digital Marketing/ Software marketing, Website development",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      }
    ],
    image: apexinnov,
    source_code_link: "https://apexinnovationslk.com/",
  },
  {
    name: "Carnage Clone",
    description:
      "A clone of a trending clothing store named Carnage to gain online shopping experience of wide variety of branded clothes and worldwide shopping experience",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: carnage,
    source_code_link: "https://github.com/imeshrup/carnage-clone.git",

  },
];

export { services, experiences, projects };
