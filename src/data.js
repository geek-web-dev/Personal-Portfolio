// --------------------------------------- Images --------------------------------------- //

// Hero Image
import heroImg from "./imgs/hero.png";

// About Image
import aboutImg from "./imgs/about.png";

// Project Images
import app1 from "./imgs/portfolio/app1.jpg";
import app2 from "./imgs/portfolio/app2.jpg";
import app3 from "./imgs/portfolio/app3.jpg";
import web1 from "./imgs/portfolio/web1.jpg";
import web2 from "./imgs/portfolio/web2.jpg";
import web3 from "./imgs/portfolio/web3.jpg";
import design1 from "./imgs/portfolio/design1.jpg";
import design2 from "./imgs/portfolio/design2.jpg";

// Clients Images
import client1 from "./imgs/clients/client1.jpg";
import client2 from "./imgs/clients/client2.jpg";
import client3 from "./imgs/clients/client3.jpg";
import client4 from "./imgs/clients/client4.jpg";

import {
  Database,
  LucidePieChart,
  Wand2,
  Code2,
  Megaphone,
  Smartphone,
  FlaskConical,
  Layers3,
  Smile,
  Clock,
  Mail,
  MapPin,
  CheckCircle2,
  PhoneCallIcon,
  Bug,
  CircleGauge,
  HelpCircle,
} from "lucide-react";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
  faYoutube,
  faUpwork,
} from "@fortawesome/free-brands-svg-icons";

// --------------------------------------- Colors and Mode --------------------------------------- //

// Provide theme controler : true , false
export const addThemeControler = true;

// default Mode: dark , light
export const defaultMode = "dark";

// default color is the first color : 1 / 12
export const defaultColor = 1;

// all colors = 12 colors
export const colors = [
  { color: "#4885cc" },
  { color: "#16badb" },
  { color: "#d63384" },
  { color: "#fd7e14" },
  { color: "#6f42c1" },
  { color: "#20c997" },
  { color: "#0d6efd" },
  { color: "#17baa5" },
  { color: "#dc3545" },
  { color: "#ffc107" },
  { color: "#8ad429" },
  { color: "#bd37bc" },
];

// --------------------------------------- Header --------------------------------------- //

export const headerData = {
  logo: "Ahmed",
  showLinks: false, // true to show navlinks, false to hidden
};

// --------------------------------------- Home --------------------------------------- //

// Hero
export const heroData = {
  name: "Ahmed Abbas",
  job_title_1: "Back end Developer",
  job_title_2: "Web Developer",
  heroImage: heroImg,
  cvFilePath: "./cv/blank.pdf",
};

// Social links
export const mySocialLinks = [
  {
    icon: faFacebook,
    link: "#",
  },
  {
    icon: faTwitter,
    link: "#",
  },
  {
    icon: faLinkedin,
    link: "#",
  },
  {
    icon: faGithub,
    link: "#",
  },
];

// --------------------------------------- About --------------------------------------- //

// === === === My About Me === === === //
export const aboutMe = {
  about_image: aboutImg,
  name: "Ahmed Abbas",
  job: "Back end Developer",
  paragraphs: [
    // first paragraph
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui repellat reiciendis, quas harum accusantium incidunt tenetur? Nisi voluptas, corporis nulla aliquam animi possimus. Recusandae labore doloremque officia, vero odit quaerat!",
    // second paragraph
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui repellat reiciendis, quas harum accusantium incidunt tenetur? Nisi voluptas, corporis nulla aliquam animi possimus. Recusandae labore doloremque officia, vero odit quaerat!",
  ],
};
// === === === \My About Me === === === //

// === === === My About Info === === === //
export const aboutInfo = [
  {
    Icon: Mail,
    info: "example@example.com",
  },
  {
    Icon: MapPin,
    info: "America, New York",
  },
  {
    Icon: CheckCircle2,
    info: "Available to work",
  },
  {
    Icon: PhoneCallIcon,
    info: "1234-456-789",
  },
];
// === === === \My About Info === === === //

// === === === Fun Facts === === === //
export const funFacts = [
  {
    Icon: FlaskConical,
    text: "Years Experience",
    targetValue: 9,
  },
  {
    Icon: Layers3,
    text: "projects done",
    targetValue: 356,
  },
  {
    Icon: Smile,
    text: "happy clients",
    targetValue: 341,
  },
  {
    Icon: Clock,
    text: "working hours",
    targetValue: 2132,
  },
];
// === === === Fun Facts === === === //

// === === === My Skills === === === //
export const skills = [
  {
    skill: "Angular",
    target: 96,
  },
  {
    skill: "Html, Css",
    target: 98,
  },
  {
    skill: "MySql",
    target: 91,
  },
  {
    skill: "Laravel",
    target: 86,
  },
];
// === === === \My Skills === === === //

// --------------------------------------- Services --------------------------------------- //

// === === === My Services === === === //
export const myServices = [
  {
    service: "Database Management",
    IconName: Database,
    description:
      "Lorem ipsum dolor sit amet consectetur, poie adipisicing elit. Reiciendis ipsam nesciunt sint neque praesentium a poie elit adipisicing elit !",
  },
  {
    service: "Business Analysis",
    IconName: LucidePieChart,
    description:
      "Lorem ipsum dolor sit amet consectetur, poie adipisicing elit. Reiciendis ipsam nesciunt sint neque praesentium a poie elit adipisicing elit !",
  },
  {
    service: "Creative Design",
    IconName: Wand2,
    description:
      "Lorem ipsum dolor sit amet consectetur, poie adipisicing elit. Reiciendis ipsam nesciunt sint neque praesentium a poie elit adipisicing elit !",
  },
  {
    service: "Web Development",
    IconName: Code2,
    description:
      "Lorem ipsum dolor sit amet consectetur, poie adipisicing elit. Reiciendis ipsam nesciunt sint neque praesentium a poie elit adipisicing elit !",
  },
  {
    service: "Marketing",
    IconName: Megaphone,
    description:
      "Lorem ipsum dolor sit amet consectetur, poie adipisicing elit. Reiciendis ipsam nesciunt sint neque praesentium a poie elit adipisicing elit !",
  },
  {
    service: "App Development",
    IconName: Smartphone,
    description:
      "Lorem ipsum dolor sit amet consectetur, poie adipisicing elit. Reiciendis ipsam nesciunt sint neque praesentium a poie elit adipisicing elit !",
  },
  {
    service: "Fix Bugs",
    IconName: Bug,
    description:
      "Lorem ipsum dolor sit amet consectetur, poie adipisicing elit. Reiciendis ipsam nesciunt sint neque praesentium a poie elit adipisicing elit !",
  },
  {
    service: "Enhance Performance",
    IconName: CircleGauge,
    description:
      "Lorem ipsum dolor sit amet consectetur, poie adipisicing elit. Reiciendis ipsam nesciunt sint neque praesentium a poie elit adipisicing elit !",
  },
  {
    service: "Helping",
    IconName: HelpCircle,
    description:
      "Lorem ipsum dolor sit amet consectetur, poie adipisicing elit. Reiciendis ipsam nesciunt sint neque praesentium a poie elit adipisicing elit !",
  },
];
// === === === \My Services === === === //

// --------------------------------------- Resume --------------------------------------- //

// === === === My Resume === === === //
export const myResumeContent = {
  // Education timeline
  education: [
    {
      years: "2011 - 2012",
      event: "Specialization Course",
      location: "University of Studies",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quisquam rem harum consequuntur porro quos ullam perspiciatis architecto possimus ut.",
    },
    {
      years: "2010 - 2011",
      event: "Graduated",
      location: "University of Studies",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quisquam rem harum consequuntur porro quos ullam perspiciatis architecto possimus ut.",
    },
  ],

  // Experience timeline
  experience: [
    {
      years: "2015 - 2024",
      event: "Full stack Developer",
      location: "Company",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quisquam rem harum consequuntur porro quos ullam perspiciatis architecto possimus ut.",
    },
    {
      years: "2013 - 2014",
      event: "Front end Developer",
      location: "Company",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quisquam rem harum consequuntur porro quos ullam perspiciatis architecto possimus ut.",
    },
  ],
};
// === === === \My Resume === === === //

// --------------------------------------- Portfolio --------------------------------------- //

// === === === My Projects === === === //

// filters data and all is fixed
export const filterKeys = ["all", "web", "app", "design"];

// projects data
export const myProjects = [
  {
    title: "Project Title",
    category: "web",
    image: web2,
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus sit et dolorem explicabo numquam iure temporibus debitis asperiores in blanditiis placeat, odit beatae ab necessitatibus nostrum eveniet voluptate corporis?",
    date: "23 May, 2021",
    client: "Envato",
    technologies: "HTML, CSS, JS, PHP",
    external_link: "#",
  },

  {
    title: "Project Title",
    category: "app",
    image: app2,
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus sit et dolorem explicabo numquam iure temporibus debitis asperiores in blanditiis placeat, odit beatae ab necessitatibus nostrum eveniet voluptate corporis?",
    date: "23 May, 2021",
    client: "Envato",
    technologies: "HTML, CSS, JS, PHP",
    external_link: "#",
  },

  {
    title: "Project Title",
    category: "app",
    image: app3,
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus sit et dolorem explicabo numquam iure temporibus debitis asperiores in blanditiis placeat, odit beatae ab necessitatibus nostrum eveniet voluptate corporis?",
    date: "23 May, 2021",
    client: "Envato",
    technologies: "HTML, CSS, JS, PHP",
    external_link: "#",
  },

  {
    title: "Project Title",
    category: "web",
    image: web1,
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus sit et dolorem explicabo numquam iure temporibus debitis asperiores in blanditiis placeat, odit beatae ab necessitatibus nostrum eveniet voluptate corporis?",
    date: "23 May, 2021",
    client: "Envato",
    technologies: "HTML, CSS, JS, PHP",
    external_link: "#",
  },

  {
    title: "Project Title",
    category: "design",
    image: design1,
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus sit et dolorem explicabo numquam iure temporibus debitis asperiores in blanditiis placeat, odit beatae ab necessitatibus nostrum eveniet voluptate corporis?",
    date: "23 May, 2021",
    client: "Envato",
    technologies: "HTML, CSS, JS, PHP",
    external_link: "#",
  },

  {
    title: "Project Title",
    category: "design",
    image: design2,
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus sit et dolorem explicabo numquam iure temporibus debitis asperiores in blanditiis placeat, odit beatae ab necessitatibus nostrum eveniet voluptate corporis?",
    date: "23 May, 2021",
    client: "Envato",
    technologies: "HTML, CSS, JS, PHP",
    external_link: "#",
  },

  {
    title: "Project Title",
    category: "app",
    image: app1,
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus sit et dolorem explicabo numquam iure temporibus debitis asperiores in blanditiis placeat, odit beatae ab necessitatibus nostrum eveniet voluptate corporis?",
    date: "23 May, 2021",
    client: "Envato",
    technologies: "HTML, CSS, JS, PHP",
    external_link: "#",
  },

  {
    title: "Project Title",
    category: "web",
    image: web3,
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus sit et dolorem explicabo numquam iure temporibus debitis asperiores in blanditiis placeat, odit beatae ab necessitatibus nostrum eveniet voluptate corporis?",
    date: "23 May, 2021",
    client: "Envato",
    technologies: "HTML, CSS, JS, PHP",
    external_link: "#",
  },
];
// === === === \My Projects === === === //

// --------------------------------------- Testimonial --------------------------------------- //

export const myClients = [
  {
    name: "John Doe",
    img: client1,
    rate: 4,
    jobTitle: "Business",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse illo ducimus consectetur fugiat itaque, voluptas nostrum quia ad, quaerat exercitationem iure aspernatur maxime, excepturi minus adipisci impedit numquam. Odio, quidem.",
  },
  {
    name: "John Doe",
    img: client2,
    rate: 5,
    jobTitle: "Business",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse illo ducimus consectetur fugiat itaque, voluptas nostrum quia ad, quaerat exercitationem iure aspernatur maxime, excepturi minus adipisci impedit numquam. Odio, quidem.",
  },
  {
    name: "John Doe",
    img: client3,
    rate: 3,
    jobTitle: "Business",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse illo ducimus consectetur fugiat itaque, voluptas nostrum quia ad, quaerat exercitationem iure aspernatur maxime, excepturi minus adipisci impedit numquam. Odio, quidem.",
  },
  {
    name: "John Doe",
    img: client4,
    rate: 4,
    jobTitle: "Business",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse illo ducimus consectetur fugiat itaque, voluptas nostrum quia ad, quaerat exercitationem iure aspernatur maxime, excepturi minus adipisci impedit numquam. Odio, quidem.",
  },
];

// --------------------------------------- Contact --------------------------------------- //

// === === === My Contact Info === === === //
export const myContactInfo = [
  {
    icon: "fa-solid fa-location-dot",
    title: "Location",
    info: {
      line_1: "839 Paseo De Peralta. Santa Fe,",
      line_2: "New York, United States",
    },
  },
  {
    icon: "fa-solid fa-clock",
    title: "Open Hours",
    info: {
      line_1: "Sunday-Friday:",
      line_2: "11:00 AM - 2300 PM",
    },
  },
  {
    icon: "fa-solid fa-envelope",
    title: "Email",
    info: {
      line_1: "example@example.com",
      line_2: "",
    },
  },
  {
    icon: "fa-solid fa-phone",
    title: "Call",
    info: {
      line_1: "+1 1234 55488 55",
      line_2: "",
    },
  },
];
// === === === \My Contact Info === === === //
