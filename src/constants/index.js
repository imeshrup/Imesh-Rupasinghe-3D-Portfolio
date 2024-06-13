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
  mrglobal,
  tripguide,
  threejs,
  starbucks,
  nextjs,
  apex,
  vuejs,
  carnage
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
    id: "contact",
    title: "Contact",
  },
  {
    id: "projects",
    title: "Projects",
  },
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
    name: "Carnage Clone",
    description:
      "A clone of the trending clothing store named Carnage",
    tags: [
      {
        name: "html",
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
  {
    name: "Exporting Site",
    description:
      "Exporting top quality products mainly spices, rice and seafood worldwide for Sri Lankan taste lovers. You can get high nutritious items by contacting us.",
    tags: [
      {
        name: "html",
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
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, experiences, projects };
