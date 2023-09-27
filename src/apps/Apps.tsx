import { lazy, Suspense } from "preact/compat";
import t from "../i18n/i18n";
const Vscode = lazy(() => import("./vscode/Vscode"));
const MyProjects = lazy(() => import("./MyProjects/MyProjects"));
const AboutWebsite = lazy(() => import("./AboutWebsite/About"));
const Customize = lazy(() => import("./Customize/Customize"));
const GithubWindow = lazy(() => import("./Github/GithubWindow"));
const Pepsi = lazy(() => import("./PepsiTheCat/Pepsi"));
const SkillsMain = lazy(() => import("./Skills/SkillsMain"));
const Terminal = lazy(() => import("./Terminal/Terminal"));
const AboutMe = lazy(() => import("./AboutMe/AboutMe"));

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
            title: t('app.aboutme')
        },
        icon: '/apps/welcome.png',
        component: () => <Suspense fallback={<></>}><AboutMe/></Suspense>
    },
    {
        name: t('app.projects'),
        window: {
            width: 900,
            height: 600,
            resizable: true,
            maximizable: true,
            minimizable: true,
            fullscreenable: true,
            title: t('app.projects')
        },
        icon: '/apps/portfolio.png',
        component: () => <Suspense fallback={<></>}><MyProjects/></Suspense>
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
        component: () => <Suspense fallback={<></>}><SkillsMain /></Suspense>
    },
    {
        name: t('app.terminal'),
        window: {
            width: 600,
            height: 384,
            resizable: false,
            maximizable: false,
            minimizable: false,
            fullscreenable: false,
            title: t('app.terminal')
        },
        icon: '/apps/terminal.png',
        component: () => <Suspense fallback={<></>}><Terminal /></Suspense>
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
        component: () => <Suspense fallback={<></>}><GithubWindow /></Suspense>
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
        component: () => <Suspense fallback={<></>}><Pepsi/></Suspense>
    },
    {
        name: 'Visual Studio Code',
        window: {
            width: 1000,
            height: 800,
            resizable: true,
            maximizable: true,
            minimizable: true,
            fullscreenable: true,
            title: 'Visual Studio Code'
        },
        icon: '/apps/vscode.svg',
        component: () => <Suspense fallback={<></>}><Vscode/></Suspense>
    },


    // Hidden apps
    {
        name: 'os_customize',
        window: {
            width: 900,
            height: 600,
            resizable: false,
            maximizable: false,
            minimizable: false,
            fullscreenable: true,
            title: t('app.os.customize.title')
        },
        hide: true,
        icon: '/context/customize.png',
        component: () => <Suspense fallback={<></>}><Customize /></Suspense>
    },
    {
        name: 'os_about',
        window: {
            width: 200,
            height: 500,
            resizable: false,
            maximizable: false,
            minimizable: false,
            fullscreenable: true,
            transparentTitleBar: true,
            title: t('app.os.about.title')
        },
        hide: true,
        icon: '/context/about.png',
        component: () => <Suspense fallback={<></>}><AboutWebsite /></Suspense>
    }
]

export default apps;