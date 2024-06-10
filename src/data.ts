import {
   mdiLanguagePython,
   mdiLanguageJavascript,
   mdiLanguageTypescript,
   mdiLanguageHtml5,
   mdiDotNet,
   mdiLanguagePhp,
   mdiApi, 
   mdiReact, 
   mdiCellphone,
   mdiNodejs,
   mdiElectronFramework, 
   mdiRobot,
   mdiDatabase,
   mdiMicrosoftVisualStudio,
   mdiMicrosoftVisualStudioCode,
   mdiGithub,
   mdiDocker,
   mdiTailwind,
   mdiWeb,
   mdiLightningBolt,
   mdiOwl,
   mdiLanguageGo,
   mdiAbacus,
   mdiFile,
   mdiGamepad,
   mdiLock
} from '@mdi/js';

const languages: Skill[] = [
  {name:"JavaScript",mdi:mdiLanguageJavascript, stars:5},
  {name:"TypeScript",mdi:mdiLanguageTypescript, stars:5},
  {name:"Python",mdi:mdiLanguagePython, stars:4},
  {name:"VB.net 👴",mdi:mdiDotNet, stars:4},
  {name:"HTML & CSS",mdi:mdiLanguageHtml5, stars:3},

  {name:"C#",mdi:mdiDotNet, stars:3},
  {name:"Go",mdi:mdiLanguageGo, stars:3},
  {name:"PHP",mdi:mdiLanguagePhp, stars:2},
]

const frameworks: Skill[] = [
  {name:"React",mdi:mdiReact, stars:4},
  {name:"Svelte",mdi:mdiWeb, stars:5},
  {name:"React Native Expo",mdi:mdiCellphone, stars:4},
  {name:"Node.js",mdi:mdiNodejs, stars:5},
  {name:"BunJS",mdi:mdiLightningBolt, stars:5},
  {name:"Electron",mdi:mdiElectronFramework, stars:2},
  {name:"Hapi",mdi:mdiApi, stars:4},
  {name:"Elysia",mdi:mdiOwl, stars:4},
  {name:"discord.js",mdi:mdiRobot, stars:2},
  {name:"Tailwind CSS",mdi:mdiTailwind, stars:5},
  {name:"Preact",mdi:mdiReact, stars:4},
  {name:"Vite",mdi:mdiLightningBolt, stars:4},
  {name:"Echo (Go)",mdi:mdiWeb, stars:3},
  {name:"Axios", mdi:mdiAbacus, stars: 4},

]

const db: Skill[] = [
  {name:"MySQL", mdi:mdiDatabase, stars:4},
  {name:"MariaDB", mdi:mdiDatabase, stars: 4},
  {name:"Redis", mdi:mdiDatabase, stars:4},
  {name:"MongoDB", mdi:mdiDatabase, stars:5},
  {name:"PocketBase", mdi:mdiDatabase, stars:2},
]

const tools: Skill[] = [
  {name:"Visual Studio 2022", mdi:mdiMicrosoftVisualStudio},
  {name:"Visual Studio Code", mdi:mdiMicrosoftVisualStudioCode},
  {name:"GitHub", mdi:mdiGithub},
  {name:"Docker", mdi:mdiDocker},
  {name:"Pterodactyl", mdi:mdiGamepad},
  {name:"MinIO Object Store", mdi:mdiFile},
  {name:"Caddy", mdi:mdiLock},
  {name:"Nginx", mdi:mdiWeb}
]

const projects: Project[] = [
    {
      title: "PepsiTube (2022-...)",
      subtitleEN: "FullStack website to download YouTube videos without ads or pop-ups. First project in Go!",
      subtitleFR: "Site Web FullStack pour télécharger des vidéos YouTube (ou autre) sans publicité ni pop-ups. Premier projet en Go !",
      descriptionEN:
          "An easy and fast YouTube video downloader powered by a yt-dlp API backend. No ads, no pop-ups. Remade it in November 2023 because I wasn't satisified with the frontend.",
      descriptionFR:
          "Un téléchargeur de vidéos YouTube facile et rapide alimenté par une API yt-dlp. Pas de publicité, pas de pop-up. Refait en novembre 2023 car je n'étais pas satisfait du frontend.",
      image: "/projets/pepsitube.webp",
      link: "https://tube.xshadow.xyz",
      skillsName: ["Go", "Preact", "TailwindCSS", "Vite"]

    },
    {
      title: "Shadow's Dash (2023-...)",
      subtitleEN: "Full Stack web fully featured modern client panel for Pterodactyl-based hosts",
      subtitleFR: "Appli web full stack, panel client complet et moderne pour les hébergeurs basés sur Pterodactyl",
      descriptionEN:
          "A fully featured client panel for Pterodactyl-based hosting services. Comes with two integrated modes: Resource split and Per Server Plans. Comes with a fully integrated payment system, invoicing system, referral system, and more. You can view a live demo of the client panel by clicking on the link below. The client panel is available for purchase, contact me if you're interested ! Used by OptikServers.com & Cortexnodes.com",
      descriptionFR:
          "Un panel client complet pour les services d'hébergement basés sur Pterodactyl. Livré avec deux modes intégrés: Partage des resources et Abonnement Par Serveur. Livré avec un système de paiement entièrement intégré, un système de facturation, un système de parrainage, et plus encore. Vous pouvez voir une démo en direct du panneau client en cliquant sur le lien ci-dessous. Le panneau client est disponible à l'achat, contactez-moi si vous êtes intéressé ! Utilisé par OptikServers.com & Cortexnodes.com (Anglais seulement)",
      image: "/projets/shadowsdash.webp",
      link: "https://my.optikservers.com",
      skillsName: ["Svelte", "Elysia", "TypeScript", "BunJS", "TailwindCSS", "MongoDB", "Vite"]
    },
    {
      title: "FishSim 🐠 (2023)",
      executable: "fishsim",
      subtitleEN: "French only: A project simulating fish and genetic evolution for a school project.",
      subtitleFR: "Un simulateur de poisson et d'évolution génétique pour un projet de NSI",
      descriptionEN:
          "FRENCH PROJECT | FishSim is a fish simulator, simulating their life, but also death, reproduction, food etc... This project carrying out random genetic mutations, it allows us to see natural selection (the fish which go the fastest will eat more, therefore will survive more, therefore will reproduce the most etc...)",
      descriptionFR:
          "FishSim est un simulateur de poisson, simulant leur vie, mais aussi la mort, la reproduction, la nourriture etc... Ce projet réalisant des mutations génétiques aléatoires, il nous permet de voir la séléction naturelle (les poissons qui vont le plus vite mangeront plus, donc surviveront plus, donc se reproduiront le plus etc...)",
      image: "/projets/fishsim.webp",
      link: "https://github.com/shadowdevfr/fishsim",
      skillsName: ["Python", "PyGame"]
    },
    {
      title: "SudokuSolver (2023)",
      subtitleEN: "French only: A web recursive sudoku solver using backtracking.",
      subtitleFR: "Un résolveur de sudoku web récursif utilisant le backtracking.",
      descriptionEN:
          "FRENCH PROJECT | Private project completed at the end of 2023, made public to share. Created using Preact and Vite, this Sudoku solver accepts any problem in matrix form and solves it using recursive BackTracking. To try it, use the link above next to the project title.",
      descriptionFR:
          "Projet privé réalisé fin 2023, mis publique pour partager. Créé en utilisant Preact et Vite, ce résolveur de Sudoku accèpte n'importe quel problème sous forme de matrice et le résout en utilisant le BackTracking récursif. Pour l'essayer, utilisez le lien ci-dessus à côté du titre du projet.",
      image: "/projets/sudoku.webp",
      link: "https://github.com/shadowdevfr/sudokusolver",
      skillsName: ["Preact", "TypeScript", "Vite"]
    },
    {
        title: "DartNodes (2023)",
        subtitleEN: "Landing page for a hosting company",
        subtitleFR: "Page d'accueil pour une entreprise d'hébergement",
        descriptionEN: "A cool and modern landing page for a hosting company. Includes a Q&A section, a plans section, and more. I think it ended up looking pretty cool, I like that alex skin flying at the bottom of the page :D",
        descriptionFR: "Une page d'accueil moderne et cool pour une entreprise d'hébergement. Comprend une section de questions-réponses, une section de plans, et plus encore. Je suis plutôt satisfait du résultat, j'aime bien ce skin d'alex qui vole en bas de la page :D",
        image: "/projets/dartnodes.webp",
        link: "https://dartnodes.com",
        skillsName: ["Preact", "TailwindCSS", "Vite"]
    },
    {
      title: "OptikServers.com (2021-...)",
      subtitleEN: "Free hosting services for Minecraft servers, Discord bots and more. Since 2021.",
      subtitleFR: "Services d'hébergement gratuits pour les serveurs Minecraft, les bots Discord et plus encore. Depuis 2021.",
      descriptionEN:
        "I'm one of the founders of OptikServers.com, a service that provides free 24/7 hosting services for Minecraft servers, Discord bots and more. I was in charge of the development of the Discord bot, and participated in the developement of the client area.",
      descriptionFR:
        "Je suis l'un des fondateurs d'OptikServers.com, un service qui fournit des services d'hébergement gratuits 24/7 pour les serveurs Minecraft, les bots Discord et plus encore. J'étais en charge du développement du bot Discord, et j'ai participé au développement de l'espace client.",
      image: "/projets/optikserverscom.webp",
      link: "https://optikservers.com",
      skillsName: ["Preact", "TailwindCSS", "Vite", "System administration"]
    },
    {
      title: "HostApp (2022-...)",
      subtitleEN: "FullStack app for Pterodactyl-based hosts",
      subtitleFR: "Application FullStack pour les hébergeurs basés sur Pterodactyl",
      descriptionEN:
          "HostApp allows your hosting company to have their own Android app with an easy to use admin panel. The app is fully customizable. It's a great way to increase your sales and to keep your customers informed about your services. The app is available for order, contact me if you're interested !",
      descriptionFR:
          "HostApp permet à votre entreprise d'hébergement d'avoir sa propre application Android avec un panneau d'administration facile à utiliser. L'application est entièrement personnalisable. C'est un excellent moyen d'augmenter vos ventes et de tenir vos clients informés de vos services. L'application est disponible à la commande, contactez-moi si vous êtes intéressé !",
      image: "/projets/hostapp.webp",
      link: "https://play.google.com/store/apps/details?id=com.optikservers.app",
      skillsName: ["React Native Expo", "Svelte", "Hapi", "Node.js", "TailwindCSS", "Pocketbase", "Vite"]
    },
    {
      title: "Wolfer (2019-2022)",
      subtitleEN: "Mobile online werewolf game from scratch (socketio server, backend, website, mobile app).",
      subtitleFR: "Jeu de loup-garou en ligne sur mobile de zéro (serveur socketio, backend, site web, application mobile).",
      descriptionEN:
        "Wolfer is an adapation of the famous card game, ''The werewolves of Millers Hollow''. It is a multiplayer game where players try to eliminate their enemy, according to their cards. The game is played on a mobile device, and will be available on both iOS and Android.",
      descriptionFR:
        "Wolfer est une adaptation du célèbre jeu de cartes, ''Les loups-garous de Thiercelieux''. C'est un jeu multijoueur où les joueurs tentent d'éliminer leur ennemi, selon leurs cartes. Le jeu se joue sur un appareil mobile, et sera disponible sur iOS et Android.",
      image: "/projets/wolfer.webp",
      skillsName: ["React", "React Native Expo", "Hapi", "Node.js", "Redis", "MySQL", "TailwindCSS", "Socket.io", "Vite"]
    },
    {
      title: "QuackHost.uk (2020-2021)",
      subtitleEN: "Client panel for pterodactyl-based hosts. First big project! (PHP)",
      subtitleFR: "Panneau client pour les hébergeurs basés sur Pterodactyl. Premier gros projet ! (PHP)",
      descriptionEN:
        "My first big project. A complete home-made client panel using PHP and MySQL. Using a dashboard template from Creative Tim, the ui & ux is easily understandable and easy to use. Coin AFK earning, server management & creation, economy system with a shop, and a lot more.",
      descriptionFR:
        "Mon premier gros projet. Un panneau client complet fait maison utilisant PHP et MySQL. Utilisant un template de dashboard de Creative Tim, l'interface est facilement compréhensible et facile à utiliser. Gains de coins AFK, gestion & création de serveurs, système économique avec une boutique, et bien plus encore.",
      image: "/projets/quackhost.webp",
      skillsName: ["PHP", "MySQL"]
    },
  ];
 
export {languages, frameworks, db, tools, projects}