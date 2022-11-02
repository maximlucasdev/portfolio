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
   mdiDocker
} from '@mdi/js';

export const languages = [
  {name:"Python",mdi:mdiLanguagePython},
  {name:"JavaScript",mdi:mdiLanguageJavascript},
  {name:"TypeScript",mdi:mdiLanguageTypescript},
  {name:"HTML & CSS",mdi:mdiLanguageHtml5},
  {name:"VB.net 👴",mdi:mdiDotNet},
  {name:"PHP",mdi:mdiLanguagePhp}
]

export const frameworks = [
  {name:"React",mdi:mdiReact},
  {name:"React Native Expo",mdi:mdiCellphone},
  {name:"Node.js",mdi:mdiNodejs},
  {name:"Electron",mdi:mdiElectronFramework},
  {name:"Hapi",mdi:mdiApi},
  {name:"discord.js",mdi:mdiRobot}
]

export const db = [
  {name:"MySQL", mdi:mdiDatabase},
  {name:"Redis", mdi:mdiDatabase}
]

export const tools = [
  {name:"Visual Studio 2022", mdi:mdiMicrosoftVisualStudio},
  {name:"Visual Studio Code", mdi:mdiMicrosoftVisualStudioCode},
  {name:"GitHub", mdi:mdiGithub},
  {name:"Docker", mdi:mdiDocker}
]

export const projects = [
    {
      title: "Wolfer",
      subtitle: "React Native (expo) game. - React frontend, Node.js Hapi API & websocket backend. - FullStack",
      description:
        "Wolfer is an adapation of the famous card game, ''The werewolves of Millers Hollow''. It is a multiplayer game where players try to eliminate their enemy, according to their cards. The game is played on a mobile device, and will be available on both iOS and Android. The game is developed using React Native, Expo, Node.js, Express, Websockets, Redis, MySQL & PHP.",
      image: "https://i.imgur.com/ZBZyKYQ.png",
      link: "https://wolfer.fun",
    },
    {
      title: "PepsiTube",
      subtitle: "FullStack (Node.js Hapi React MUI)",
      description:
          "An easy and fast YouTube video downloader powered by a yt-dlp API backend. No ads, no pop-ups.",
      image: "https://i.imgur.com/OQQc7Kg.png",
      link: "https://tube.pepsi.host",
    },
    {
      title: "OptikServers.com",
      subtitle: "Discord bot (Node.js), Android app (React Native Expo), and client panel (PHP)",
      description:
        "I'm one of the founders of OptikServers.com, a service that provides free 24/7 hosting services for Minecraft servers, Discord bots and more. I was in charge of the development of the Discord bot, and participated in the developement of the client area.",
      image: "https://i.imgur.com/aDDNaPN.png",
      link: "https://optikservers.com",
    },
    {
      title: "QuackHost.uk",
      subtitle: "PHP",
      description:
        "A complete home-made client panel using PHP and MySQL. Using a dashboard template from Creative Tim, the ui & ux is easily understandable and easy to use. Coin AFK earning, server management & creation, economy system with a shop, and a lot more.",
      image: "https://i.imgur.com/U1X5mYQ.png",
      link: false,
    },
    {
        title: "Shadow's Dash",
        subtitle: "PHP",
        description:
            "A fully customizable shared-resources based dashboard for pterodactyl hosting services. It is easily customizable, and is meant to be used with Pterodactyl. It allows your users to manage, create and delete their servers. Using a queue system, you can create a queue for servers created by your users, and manage the slots assigned to each node. It comes with a full economy system, with a shop for users to buy resources.",
        image: "https://i.imgur.com/VezCVyn.png",
        link: "https://github.com/ShadowsDash/ShadowsDash",
    },
  ];
