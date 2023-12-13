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
   mdiOwl
} from '@mdi/js';

const languages: Skill[] = [
  {name:"Python",mdi:mdiLanguagePython, stars:4},
  {name:"JavaScript",mdi:mdiLanguageJavascript, stars:5},
  {name:"TypeScript",mdi:mdiLanguageTypescript, stars:4},
  {name:"HTML & CSS",mdi:mdiLanguageHtml5, stars:3},
  {name:"VB.net 👴",mdi:mdiDotNet, stars:4},
  {name:"C#",mdi:mdiDotNet, stars:3},
  {name:"PHP",mdi:mdiLanguagePhp, stars:3}
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
]

const db: Skill[] = [
  {name:"MySQL", mdi:mdiDatabase, stars:4},
  {name:"Redis", mdi:mdiDatabase, stars:4},
  {name:"MongoDB", mdi:mdiDatabase, stars:5},
  {name:"PocketBase", mdi:mdiDatabase, stars:2},
]

const tools: Skill[] = [
  {name:"Visual Studio 2022", mdi:mdiMicrosoftVisualStudio},
  {name:"Visual Studio Code", mdi:mdiMicrosoftVisualStudioCode},
  {name:"GitHub", mdi:mdiGithub},
  {name:"Docker", mdi:mdiDocker}
]

const projects: Project[] = [
    {
        title: "DartNodes (2023)",
        subtitleEN: "Landing page for a hosting company",
        subtitleFR: "Page d'accueil pour une entreprise d'hébergement",
        descriptionEN: "A cool and modern landing page for a hosting company. Includes a Q&A section, a plans section, and more. I think it ended up looking pretty cool, I like that alex skin flying at the bottom of the page :D",
        descriptionFR: "Une page d'accueil moderne et cool pour une entreprise d'hébergement. Comprend une section de questions-réponses, une section de plans, et plus encore. Je suis plutôt satisfait du résultat, j'aime bien ce skin d'alex qui vole en bas de la page :D",
        image: "https://iili.io/JxzSKnp.png",
        link: "https://dartnodes.com",
        skillsName: ["Preact", "TailwindCSS", "Vite"]
    },
    {
        title: "Shadow's Dash (2023)",
        subtitleEN: "Fully featured modern client panel for Pterodactyl-based hosts",
        subtitleFR: "Panel client complet et moderne pour les hébergeurs basés sur Pterodactyl",
        descriptionEN:
            "A fully featured client panel for Pterodactyl-based hosting services. Comes with two integrated modes: Resource split and Per Server Plans. Comes with a fully integrated payment system, invoicing system, referral system, and more. You can view a live demo of the client panel by clicking on the link below. The client panel is available for purchase, contact me if you're interested ! Used by OptikServers.com & Cortexnodes.com",
        descriptionFR:
            "Un panel client complet pour les services d'hébergement basés sur Pterodactyl. Livré avec deux modes intégrés: Partage des resources et Abonnement Par Serveur. Livré avec un système de paiement entièrement intégré, un système de facturation, un système de parrainage, et plus encore. Vous pouvez voir une démo en direct du panneau client en cliquant sur le lien ci-dessous. Le panneau client est disponible à l'achat, contactez-moi si vous êtes intéressé ! Utilisé par OptikServers.com & Cortexnodes.com (Anglais seulement)",
        image: "https://iili.io/HDN4Rqv.png",
        link: "https://my.optikservers.com",
        skillsName: ["Svelte", "Elysia", "BunJS", "TailwindCSS", "MongoDB", "Vite"]
    },
    {
      title: "HostApp (2023)",
      subtitleEN: "FullStack app for Pterodactyl-based hosts",
      subtitleFR: "Application FullStack pour les hébergeurs basés sur Pterodactyl",
      descriptionEN:
          "HostApp allows your hosting company to have their own Android app with an easy to use admin panel. The app is fully customizable. It's a great way to increase your sales and to keep your customers informed about your services. The app is available for order, contact me if you're interested !",
      descriptionFR:
          "HostApp permet à votre entreprise d'hébergement d'avoir sa propre application Android avec un panneau d'administration facile à utiliser. L'application est entièrement personnalisable. C'est un excellent moyen d'augmenter vos ventes et de tenir vos clients informés de vos services. L'application est disponible à la commande, contactez-moi si vous êtes intéressé !",
      image: "https://usercontent.catto.pictures/x_shadow_/80d498da-f58c-45d0-82a1-981a6fbaa600.png",
      link: "https://hostappdemo.fr6.xshadow.xyz/",
      skillsName: ["Svelte", "Hapi", "Node.js", "TailwindCSS", "Pocketbase", "Vite"]
    },
    {
      title: "PepsiTube (2022)",
      subtitleEN: "FullStack website to download YouTube videos without ads or pop-ups.",
      subtitleFR: "Site Web FullStack pour télécharger des vidéos YouTube (ou autre) sans publicité ni pop-up.",
      descriptionEN:
          "An easy and fast YouTube video downloader powered by a yt-dlp API backend. No ads, no pop-ups. Remade it in November 2023 because I wasn't satisified with the frontend.",
      descriptionFR:
          "Un téléchargeur de vidéos YouTube facile et rapide alimenté par une API yt-dlp. Pas de publicité, pas de pop-up. Refait en novembre 2023 car je n'étais pas satisfait du frontend.",
      image: "https://iili.io/JzGXGUB.png",
      link: "https://tube.xshadow.xyz",
      skillsName: ["Preact", "Hapi", "Node.js", "TailwindCSS", "Vite"]

    },
    {
      title: "Wolfer (2022)",
      subtitleEN: "Mobile online werewolf game.",
      subtitleFR: "Jeu de loup-garou en ligne.",
      descriptionEN:
        "Wolfer is an adapation of the famous card game, ''The werewolves of Millers Hollow''. It is a multiplayer game where players try to eliminate their enemy, according to their cards. The game is played on a mobile device, and will be available on both iOS and Android.",
      descriptionFR:
        "Wolfer est une adaptation du célèbre jeu de cartes, ''Les loups-garous de Thiercelieux''. C'est un jeu multijoueur où les joueurs tentent d'éliminer leur ennemi, selon leurs cartes. Le jeu se joue sur un appareil mobile, et sera disponible sur iOS et Android.",
      image: "https://i.imgur.com/HUjuyvo.png",
      skillsName: ["React", "React Native Expo", "Hapi", "Node.js", "Redis", "MySQL", "TailwindCSS", "Socket.io", "Vite"]
    },
    {
      title: "OptikServers.com (2021)",
      subtitleEN: "Free hosting services for Minecraft servers, Discord bots and more.",
      subtitleFR: "Services d'hébergement gratuits pour les serveurs Minecraft, les bots Discord et plus encore.",
      descriptionEN:
        "I'm one of the founders of OptikServers.com, a service that provides free 24/7 hosting services for Minecraft servers, Discord bots and more. I was in charge of the development of the Discord bot, and participated in the developement of the client area.",
      descriptionFR:
        "Je suis l'un des fondateurs d'OptikServers.com, un service qui fournit des services d'hébergement gratuits 24/7 pour les serveurs Minecraft, les bots Discord et plus encore. J'étais en charge du développement du bot Discord, et j'ai participé au développement de l'espace client.",
      image: "https://i.imgur.com/aDDNaPN.png",
      link: "https://optikservers.com",
      skillsName: ["PHP", "MySQL"]
    },
    {
      title: "QuackHost.uk (2020)",
      subtitleEN: "Client panel for pterodactyl-based hosts. First big project! (PHP)",
      subtitleFR: "Panneau client pour les hébergeurs basés sur Pterodactyl. Premier gros projet ! (PHP)",
      descriptionEN:
        "My first big project. A complete home-made client panel using PHP and MySQL. Using a dashboard template from Creative Tim, the ui & ux is easily understandable and easy to use. Coin AFK earning, server management & creation, economy system with a shop, and a lot more.",
      descriptionFR:
        "Mon premier gros projet. Un panneau client complet fait maison utilisant PHP et MySQL. Utilisant un template de dashboard de Creative Tim, l'interface est facilement compréhensible et facile à utiliser. Gains de coins AFK, gestion & création de serveurs, système économique avec une boutique, et bien plus encore.",
      image: "https://i.imgur.com/U1X5mYQ.png",
      skillsName: ["PHP", "MySQL"]
    },
  ];
 
export {languages, frameworks, db, tools, projects}