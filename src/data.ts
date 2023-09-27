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
   mdiWeb
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
  {name:"Electron",mdi:mdiElectronFramework, stars:2},
  {name:"Hapi",mdi:mdiApi, stars:4},
  {name:"discord.js",mdi:mdiRobot, stars:2},
  {name:"Tailwind CSS",mdi:mdiTailwind, stars:5},
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

const projects = [
    {
        title: "Shadow's Dash (2023)",
        subtitle: "Fully featured client panel for Pterodactyl-based hosts (Svelte + Hapi)",
        description:
            "A fully featured client panel for Pterodactyl-based hosting services. Comes with two integrated modes: Resource split and Per Server Plans. Comes with a fully integrated payment system, invoicing system, referral system, and more. You can view a live demo of the client panel by clicking on the link below. The client panel is available for purchase, contact me if you're interested ! Used by OptikServers.com & Cortexnodes.com",
        image: "https://iili.io/HDN4Rqv.md.png",
        link: "https://my.optikservers.com",
    },
    {
      title: "HostApp (2023)",
      subtitle: "FullStack app for Pterodactyl-based hosts (Node.js Hapi, Svelte, React Native Expo, PocketBase)",
      description:
          "HostApp allows your hosting company to have their own Android app with an easy to use admin panel. The app is fully customizable. It's a great way to increase your sales and to keep your customers informed about your services. The app is available for order, contact me if you're interested !",
      image: "https://usercontent.catto.pictures/x_shadow_/80d498da-f58c-45d0-82a1-981a6fbaa600.png",
      link: "https://hostappdemo.fr6.xshadow.xyz/",
    },
    {
      title: "PepsiTube (2022)",
      subtitle: "FullStack website to download YouTube videos without ads or pop-ups. (Node.js Hapi React MUI)",
      description:
          "An easy and fast YouTube video downloader powered by a yt-dlp API backend. No ads, no pop-ups.",
      image: "https://i.imgur.com/OQQc7Kg.png",
      link: "https://tube.pepsi.pics",
    },
    {
      title: "Wolfer (2022)",
      subtitle: "React Native (expo) werewolf sgame. - React frontend, Node.js Hapi API & websocket backend. - FullStack",
      description:
        "Wolfer is an adapation of the famous card game, ''The werewolves of Millers Hollow''. It is a multiplayer game where players try to eliminate their enemy, according to their cards. The game is played on a mobile device, and will be available on both iOS and Android. The game is developed using React Native, Expo, Node.js, Express, Websockets, Redis, MySQL & PHP.",
      image: "https://i.imgur.com/HUjuyvo.png",
      link: "https://wolfer.fun",
    },
    {
      title: "OptikServers.com (2021)",
      subtitle: "Discord bot (Node.js), Android app (React Native Expo), Client panel (2021, PHP), advent calendar (December 2022, React & MUI)",
      description:
        "I'm one of the founders of OptikServers.com, a service that provides free 24/7 hosting services for Minecraft servers, Discord bots and more. I was in charge of the development of the Discord bot, and participated in the developement of the client area.",
      image: "https://i.imgur.com/aDDNaPN.png",
      link: "https://optikservers.com",
    },
    {
      title: "QuackHost.uk (2020)",
      subtitle: "Client panel for pterodactyl-based hosts. First big project! (PHP)",
      description:
        "A complete home-made client panel using PHP and MySQL. Using a dashboard template from Creative Tim, the ui & ux is easily understandable and easy to use. Coin AFK earning, server management & creation, economy system with a shop, and a lot more.",
      image: "https://i.imgur.com/U1X5mYQ.png",
    },
  ];
 
export {languages, frameworks, db, tools, projects}