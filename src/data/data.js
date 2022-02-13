export const links = {
  github_profile: "//github.com/ParzivalEugene",
  instagram_profile: "//www.instagram.com/_parzival.eugene_/",
  telegram: "//t.me/parzival_eugene",
  email: "mailto:michkov.evgeny@gmail.com",
  linktree: "//links.michkoff.com",
  toroconstructor: "//toroconstructor.es",
  react: "//reactjs.org",
  three: "//threejs.org",
  next: "//nextjs.org",
  scss: "//sass-lang.com/",
  django_rest_framework: "//www.django-rest-framework.org",
  django: "//www.djangoproject.com",
  postgres: "//www.postgresql.org",
  flask: "//flask.palletsprojects.com",
  figma: "//www.figma.com"
}

export const ProjectsData = [
  {
    title: "Server-side-application",
    projects: [
      {
        title: "Samurai - Discord Bot",
        description: "Unique discord bot – Samurai. Essential and useful tool on any server. It can help you to " +
          "organize your server, play some tunes, create lobby for table games and much more.",
        image: "/media/banner.jpg",
        tags: ["Python", "DiscordAPI", "PostgreSQL", "OpenWeatherMapAPI", "GoogleTranslateAPI"],
        website: "//samuraibot.michkoff.com",
        source: "//github.com/ParzivalEugene/Samurai"
      }
    ]
  },
  {
    title: "Front-end Websites",
    projects: [
      {
        title: "Samurai Website",
        description: "Website for Samurai Discord Bot. Brief information about possibilities of the bot and " +
          "commands list. My first React.js project",
        image: "/media/samuraibot.png",
        tags: ["Styled-components", "React-router-dom", "React", "DiscordAuth", "SCSS"],
        website: "//samuraibot.michkoff.com",
        source: "//github.com/ParzivalEugene/SamuraiWebsite"
      },
      {
        title: "Michkoff Links",
        description: "All the necessary links related to me are on this site. A convenient hierarchy system and " +
          "the arrangement of elements will help you find the information you need faster.",
        image: "/media/links_michkoff.png",
        tags: ["React", "React-router-dom", "SCSS"],
        website: "//links.michkoff.com",
        source: "//github.com/ParzivalEugene/Links/tree/new-version"
      }
    ]
  },
  {
    title: "Full-stack Websites",
    projects: [
      {
        title: "Toro Constructor",
        description: "Online rental of construction equipment. The design is made in the style of concrete and " +
          "shiny metal with an emphasis on the red rag of a bullfighter. Convenient layout, speed and beauty of " +
          "the site will not leave a single buyer indifferent. What else can be required from the site?",
        image: "/media/toroconstructor.png",
        tags: ["Djnago", "Djnago-rest-framework", "React", "Redux", "Axios", "React-router-dom"],
        website: "//toroconstructor.es",
        source: ""
      }
      // {
      //   title: "",
      //   description: "",
      //   image: "/media/banner.jpg",
      //   tags: [""],
      //   website: "",
      //   source: ""
      // }
    ]
  }
]

export const AnimationType = "fade-up"

export const DisplaySizes = {
  mobile: 480,
  tablet: 1024,
  desktop: 1280
}