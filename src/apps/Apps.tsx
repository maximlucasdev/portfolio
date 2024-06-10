import { lazy, Suspense } from "preact/compat";
import t from "../i18n/i18n";
import LoadingApp from "./LoadingApp";
const Vscode = lazy(() => import("./vscode/Vscode"));
const MyProjects = lazy(() => import("./MyProjects/MyProjects"));
const AboutWebsite = lazy(() => import("./AboutWebsite/About"));
const Customize = lazy(() => import("./Customize/Customize"));
const GithubWindow = lazy(() => import("./Github/GithubWindow"));
const Pepsi = lazy(() => import("./PepsiTheCat/Pepsi"));
const SkillsMain = lazy(() => import("./Skills/SkillsMain"));
const Terminal = lazy(() => import("./Terminal/Terminal"));
const AboutMe = lazy(() => import("./AboutMe/AboutMe"));
const EmailApp = lazy(() => import("./Email/EmailWindow"));
const FishSim = lazy(() => import("./fishsim/Fishsim"));

const apps: App[] = [
    {
        name: t('app.aboutme'),
        window: {
            width: 600,
            height: 500,
            resizable: false,
            maximizable: true,
            minimizable: false,
            fullscreenable: false,
            transparentTitleBar:true,
            title: t('app.aboutme'),
        },
        icon: '/apps/welcome.png',
        component: () => <Suspense fallback={<LoadingApp/>}><AboutMe/></Suspense>
    },
    {
        name: t('app.projects'),
        window: {
            width: 1000,
            height: 600,
            resizable: true,
            maximizable: true,
            minimizable: true,
            fullscreenable: true,
            title: t('app.projects')
        },
        icon: '/apps/portfolio.png',
        component: () => <Suspense fallback={<LoadingApp/>}><MyProjects/></Suspense>
    },
    {
        name: t('app.skills'),
        window: {
            width: 700,
            height: 550,
            resizable: true,
            maximizable: true,
            minimizable: true,
            fullscreenable: true,
            title: t('app.skills.title')
        },
        icon: '/apps/skills.png',
        component: () => <Suspense fallback={<LoadingApp/>}><SkillsMain /></Suspense>
    },
    {
        name: t('app.terminal'),
        window: {
            width: 600,
            height: 420,
            resizable: false,
            maximizable: false,
            minimizable: false,
            fullscreenable: false,
            fillTitlebar: true,
            title: t('app.terminal')
        },
        icon: '/apps/terminal.png',
        component: () => <Suspense fallback={<LoadingApp/>}><Terminal /></Suspense>
    },
    {
        name: 'Github',
        window: {
            width: 600,
            height: 500,
            resizable: true,
            maximizable: true,
            minimizable: true,
            fullscreenable: true,
            title: t('app.github.title')
        },
        icon: '/apps/github.png',
        component: () => <Suspense fallback={<LoadingApp/>}><GithubWindow /></Suspense>
    },
    {
        name: 'Pepsi',
        window: {
            width: 600,
            height: 500,
            resizable: true,
            maximizable: true,
            minimizable: true,
            fullscreenable: true,
            title: 'Pepsi - Gallery'
        },
        icon: '/apps/pepsifolder.png',
        component: () => <Suspense fallback={<LoadingApp/>}><Pepsi/></Suspense>
    },
    {
        name: t('app.email'),
        window: {
            width: 600,
            height: 500,
            resizable: true,
            maximizable: true,
            minimizable: true,
            fullscreenable: true,
            title: t('app.email.title')
        },
        icon: '/apps/email.png',
        component: () => <Suspense fallback={<LoadingApp/>}><EmailApp/></Suspense>
    },
    {
        name: 'Visual Studio Code',
        window: {
            width: 1000,
            height: 800,
            resizable: true,
            maximizable: true,
            minimizable: true,
            fillTitlebar: true,
            fullscreenable: true,
            title: 'Visual Studio Code'
        },
        icon: '/apps/vscode.svg',
        component: () => <Suspense fallback={<LoadingApp/>}><Vscode/></Suspense>
    },
    {
        name: 'fishsim',
        window: {
            width: 1450,
            height: 800,
            resizable: true,
            maximizable: true,
            minimizable: false,
            fillTitlebar: true,
            fullscreenable: true,
            title: 'FishSim',
        },
        hide: true,
        icon: '/apps/fishsim.png',
        component: () => <Suspense fallback={<LoadingApp/>}><FishSim/></Suspense>
    },


    // Hidden apps
    {
        name: 'os_customize',
        window: {
            width: 1000,
            height: 700,
            resizable: true,
            maximizable: true,
            minimizable: true,
            fullscreenable: true,
            title: t('app.os.customize.title')
        },
        hide: true,
        icon: '/context/customize.png',
        component: () => <Suspense fallback={<LoadingApp/>}><Customize /></Suspense>
    },
    {
        name: 'os_about',
        window: {
            width: 200,
            height: 600,
            resizable: false,
            maximizable: false,
            minimizable: false,
            fullscreenable: true,
            transparentTitleBar: true,
            title: t('app.os.about.title')
        },
        hide: true,
        icon: '/context/about.png',
        component: () => <Suspense fallback={<LoadingApp/>}><AboutWebsite /></Suspense>
    }
]

export default apps;