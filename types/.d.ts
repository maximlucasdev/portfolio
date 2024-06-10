
interface App {
    name: string,
    window: {
        width: number,
        height: number,
        resizable: boolean,
        maximizable: boolean,
        minimizable: boolean,
        fullscreenable: boolean,
        title: string,
        showTitle?: boolean,
        centerScreen?: boolean,
        transparentTitleBar?: boolean,
        fillTitlebar?: boolean
    },
    hide?: boolean,
    disabled?: boolean,
    icon: string,
    component: any
}

interface Skill {
    name: string,
    mdi: string,
    stars?: number
}

interface Project {
    title: string,
    subtitleEN: string,
    subtitleFR: string,
    descriptionEN: string,
    descriptionFR: string,
    image: string,
    link?: string,
    executable?: string,
    skillsName?: string[],
}

interface NotificationContent {
    title: string,
    description: string,
    icon: string,
    date: Date
}

interface NavigatorBatteryStatus {
    charging: boolean,
    chargingTime: number,
    dischargingTime: number,
    level: number
}