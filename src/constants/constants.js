import {DiFirebase, DiPostgresql, DiPython, DiReact} from "react-icons/di";
import {FiFigma} from "react-icons/fi";
import {LinkText, ListParagraph} from "../components/Technologies/TechnologiesStyles";

export const HeroInfo = {
  title: "Michkov Eugene",
  description: "Founder of the INVINCIBLE WARRIORS COMPANY and the lead developer of Samurai Discord Bot"
}

export const ProjectsData = [
  {
    title: 'Samurai Discord Bot',
    description: "Unique discord bot – Samurai. Essential and useful tool on any server. It can help you to organize" +
      " your server, play some tunes, create lobby for table games and much more.",
    image: '/images/ghostrunner_banner.jpg',
    tags: ['Python', 'DiscordAPI', 'PostgreSQL'],
    source: 'https://github.com/ParzivalEugene/Samurai',
    visit: 'https://samuraibot.xyz',
  },
  {
    title: "Samurai Website",
    description: "Website for Samurai Discord Bot. Brief information about possibilities of the bot and commands" +
      " list. My first React.js project",
    image: "/images/samuraibot.png",
    tags: ["React", "Node.js", "DiscordAuth"],
    source: "https://github.com/ParzivalEugene/SamuraiWebsite",
    visit: "https://samuraibot.xyz",
  },
  {
    title: "Michkoff Links",
    description: "My links website where everyone can choose all necessary information about me",
    image: "/images/michkoff.png",
    tags: ["React"],
    source: "https://github.com/ParzivalEugene/Links",
    visit: "https://links.michkoff.com",
  }
];

export const TechnologiesInfo = {
  title: "Technologies",
  description: "I know Python and JavaScript, familiar with Django and React.js, also study neural networks and" +
    " machine learning. I'm fond of creating something, that inspires people and make life easier for them."
}

export const TechnologiesData = [
  {
    icon: <DiReact size="3rem"/>,
    title: "Front-End",
    description: <ListParagraph>Experience with <br/>
      <LinkText href="https://reactjs.org" target="_blank">React.js</LinkText> and <LinkText href="https://nextjs.org/" target="_blank">Next.js</LinkText></ListParagraph>
  },
  {
    icon: <DiPostgresql size="3rem"/>,
    title: "Back-End",
    description: <ListParagraph>Experience with <br/>
      <LinkText href="https://www.djangoproject.com/" target="_blank">Django</LinkText> and <LinkText href="https://www.postgresql.org/" target="_blank">PostgreSQL</LinkText></ListParagraph>
  },
  {
    icon: <FiFigma size="3rem"/>,
    title: "UI/UX",
    description: <ListParagraph>Experience with <br/>
      <LinkText href="https://figma.com" target="_blank">Figma</LinkText> and <LinkText href="https://www.adobe.com/products/xd.html" target="_blank">AdobeXD</LinkText></ListParagraph>
  },
  {
    icon: <DiPython size="3rem"/>,
    title: "Python Development",
    description: <ListParagraph>Experience with <br/>
      <LinkText href="https://www.python.org/" target="_blank">Python</LinkText>, <LinkText href="https://discord.com/developers/docs/intro" target="_blank">DiscordAPI</LinkText>, <LinkText href="https://numpy.org/" target="_blank">NumPy</LinkText></ListParagraph>
  },
  {
    icon: <DiFirebase size="3rem"/>,
    title: "Data-Science",
    description: <ListParagraph>Experience with <br/>
      <LinkText href="https://www.tensorflow.org/" target="_blank">Tensorflow</LinkText>, <LinkText href="https://pandas.pydata.org/" target="_blank">Pandas</LinkText> and Python libraries</ListParagraph>
  },
]

export const AboutMeInfo = {
  title: "About Me",
  description: "I'm young developer from Moscow, Russia, inspired by coding and creating IT projects. I am really" +
    " amazed at the beauty that computer code can generate."
}

export const TimeLineData = [
  { year: 2017, text: 'Started my journey', },
  { year: 2018, text: 'Began to study Python', },
  { year: 2019, text: 'Shared my projects with the world', },
  { year: 2020, text: 'Founded INVINCIBLE WARRIORS COMPANY', },
  { year: 2021, text: 'Started developing Samurai Discord Bot', },
];

export const AccomplishmentData = [
  { number: "4+", text: 'Open Source Projects'},
  { number: "JetBrains", text: 'supports my projects', },
  { number: "AWS & GCP", text: 'Amazon and Google parntner', }
]

export const AnimationType = "fade-up"