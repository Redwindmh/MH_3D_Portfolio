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
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import redsetta from "../assets/webapps/redsetta.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "History",
  },
  {
    id: "experience",
    title: "Portfolio",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Translator",
    icon: web,
  },
  {
    title: "Editor",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "Technomancer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "PHP",
    // Get php icon
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Translator",
    company_name: "AtoZ English",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sep 2011 - Aug 2014",
    points: [
      "Taught conversational English language classes to learners ranging from toddlers to senior citizens.",
      "In addition, translated and edited written and audio resources for essays and books written and distributed throughout Japan.",
      "Given editor and author credits in several published works from the company.",
      "Led a team of editor and translators on cross-company projects developing language learning materials.",
    ],
  },
  {
    title: "Editor",
    company_name: "ASK Publishing",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2014 - Oct 2021",
    points: [
      "Authored and edited material for a multitude of books and online courses on topics ranging from conversational English to study materials for the TOEIC, TOEFL, and EIKEN English proficiency tests.",
      "Translated internal and outgoing messages, legal contracts and letters, as well as content for online courses and Japanese language education materials and tests like the Japanese Language Proficiency Test (JLPT).",
      "Planned and led yearly corporate seminars teaching business-oriented English as well as cross-culture communication and leadership skills.",
      "Authored and co-authored several English language educational books that are commercially available.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "RNC",
    icon: shopify,
    iconBg: "#383E56",
    date: "Dec 2021 - Feb 2022",
    points: [
      "Designed websites and web applications, both for clients and for internal projects, using the full web stack (HTML, CSS, and JavaScript) as well as PHP with Wordpress, saving and sharing all work via git services.",
      "Studied back-end production and database construction in web apps using the Laravel framework, MySQL, and PHP.",
      "Initiated a personal project of building full-stack Laravel app using a Linux development environment",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Technomancer",
    company_name: "Freelance",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Build full-functioning web apps for--as well as lasting relationships with--individuals and companies.",
      "Build personal apps for automating daily tasks using Python and various libraries.",
      "Restore old tech and computers labeled junk to working order, thus keeping them out of landfills and reducing e-waste.",
      "Currently studying cyber security to ensure I can provide the most secure web apps and services possible.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Malcolm proved me wrong.",
    name: "Luna",
    designation: "Poet",
    company: "Luna",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Malcolm does.",
    name: "Mark K.",
    designation: "Writer",
    company: "Independent",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Malcolm optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Itsuka T.",
    designation: "CEO",
    company: "Office-t-i",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Translation Interface",
    description:
      "Mac/PC-based app that provides a simple interface to use multiple translation services, including AI, to translated text and uploaded files.",
    tags: [
      {
        name: "tkinter",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
    ],
    image: redsetta,
    source_code_link: "https://github.com/",
  },
  {
    name: "Redwindstagram",
    description:
      "Full-stack web app where users can upload images and share them with other users.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "linux",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Redwindmh/Redwindstagram",
  },
  {
    name: "The Legend of Nina: Jin's Awakening",
    description:
      "Simple top-down action/adventure video game built using Pygames featuring an experience system and skill growth features.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pygames",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Redwindmh/The-Legend-of-Nina--Jin-s-Awakening",
  },
];

export { services, technologies, experiences, testimonials, projects };