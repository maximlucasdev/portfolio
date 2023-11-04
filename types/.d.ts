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
        transparentTitleBar?: boolean
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
    subtitle: string,
    description: string,
    image: string,
    link?: string,
}

interface NotificationContent {
    title: string,
    description: string,
    icon: string,
    date: Date
}