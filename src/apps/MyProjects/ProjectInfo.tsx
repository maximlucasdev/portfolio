import { mdiArrowLeft } from "@mdi/js"
import Icon from "@mdi/react"
import t from "../../i18n/i18n"
import { language } from "../../Signals"
import { openApp } from "../../lib/AppsWindowsManager"
import apps from "../Apps"


export default function ProjectInfo(props:{project:Project,setViewProject: any}) {
    return (
        <div class='h-full w-full text-white overflow-y-auto overflow-x-hidden'>
            <div class='grid-cols-1 md:grid-cols-3 grid gap-4 p-5'>
                <div class='flex flex-col gap-5 col-span-2 overflow-hidden h-full'>
                    <button class='w-max hover:bg-white hover:text-black/80 transition bg-white/20 rounded-full flex gap-2 items-center px-2 py-1' onClick={() => props.setViewProject(null)}><Icon path={mdiArrowLeft} size={1}/> {t('app.myprojects.content.goback')}</button>
                    <h1 class='text-2xl md:text-4xl text-center font-bold wavy-underline -translate-y-1'>{props.project.title}</h1>
                    <img src={props.project.image} alt="Screenshot" class='h-full w-full rounded-md'/>
                    <p class='text-md md:text-lg'>{language.value == 'fr' ? props.project.descriptionFR : props.project.descriptionEN}</p>
                </div>
                <div class='flex flex-col gap-5 items-end bg-white/10 h-max rounded-md p-5'>
                    {props.project.link ? 
                        <a class='hover:bg-white w-full group hover:text-black/80 transition bg-white/20 rounded-full flex gap-2 items-center px-2 py-1' href={props.project.link} target={"_blank"}>
                            <span class='text-xl'>🌍</span>
                            <div class='flex flex-col items-center justify-center flex-1'>
                                <span class='text-center flex-1'>Visit</span>
                                <span class='text-center flex-1 text-xs px-1 text-white/50 group-hover:text-black/50'>{props.project.link}</span>
                            </div>
                        </a>
                    : <></>}
                    {props.project.executable ? 
                        <button class='hover:bg-blue-600 w-full transition bg-blue-500/50 border-2 border-blue-500 rounded-full flex gap-2 items-center px-2 py-1' href={props.project.link} target={"_blank"}
                            onClick={() => {openApp(apps.find((app) => app.name == props.project.executable) as App)}}
                        ><span class='text-xl'>✨</span><span class='text-center flex-1'>Run in a new window</span></button>
                    : <></>}

                    <div class='flex flex-col gap-2 mt-5 items-center w-full'>
                        <p>Technologies used:</p>
                        <div class='flex items-center justify-center gap-2 flex-wrap'>
                            {props.project.skillsName ? props.project.skillsName.map((skill) => {
                                return <span class='text-md bg-white/10 rounded-md px-2 py-1 m-1'>{skill}</span>
                            }) : <></>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

//export default function ProjectInfo(props:{project:Project,setViewProject: any}) {
//  return (
//    <div class='bg-cover bg-center bg-no-repeat h-full w-full' style={{backgroundImage:`url("${props.project.image}")`}}>
//        <div class='bg-slate-900/95 h-full w-full md:rounded-b-md'>
//            <div class='over text-white w-full h-full overflow-y-scroll flex flex-col noscrollbar'>
//                <div class='flex flex-wrap items-center bg-cover p-5 gap-10 bg-center bg-no-repeat justify-between'>
//                    <button class='hover:bg-white hover:text-black/80 transition bg-white/20 rounded-full flex gap-2 items-center px-2 py-1' onClick={() => props.setViewProject(null)}><Icon path={mdiArrowLeft} size={1}/> {t('app.myprojects.content.goback')}</button>
//                    {props.project.link ? <a class='hover:bg-white w-max hover:text-black/80 transition bg-white/20 rounded-full flex gap-2 items-center px-2 py-1' href={props.project.link} target={"_blank"}><Icon path={mdiOpenInNew} size={1}/> {props.project.link}</a> : <></>}
//                    {props.project.executable ? <button class='hover:bg-blue-600 w-max transition bg-blue-500/50 border-2 border-blue-500 rounded-full flex gap-2 items-center px-2 py-1' href={props.project.link} target={"_blank"}
//                        onClick={() => {openApp(apps.find((app) => app.name == props.project.executable) as App)}}
//                    ><span class='text-xl'>✨</span> Run in a new window</button> : <></>}
//                </div>
//                <div class='flex flex-col gap-2 items-center w-full'>
//                    <h1 class='text-2xl md:text-4xl text-center font-bold wavy-underline -translate-y-1'>{props.project.title}</h1>
//                    <div class='flex items-center justify-center gap-2'>
//                        {props.project.skillsName ? props.project.skillsName.map((skill) => {
//                            return <span class='text-md bg-white/10 rounded-md px-2 py-1 m-1'>{skill}</span>
//                        }) : <></>}
//                    </div>
//                </div>
//                <div class='flex flex-col items-center p-5 h-full gap-4'>
//                    <p class='text-md md:text-lg'>{language.value == 'fr' ? props.project.descriptionFR : props.project.descriptionEN}</p>
//                    <img src={props.project.image} alt="Screenshot" class='h-auto w-full max-w-5xl rounded-md'/>
//                </div>
//            </div>
//        </div>
//    </div>
//  )
//}
