import { mdiArrowLeft, mdiOpenInNew } from "@mdi/js"
import Icon from "@mdi/react"
import t from "../../i18n/i18n"
import { language } from "../../Signals"

export default function ProjectInfo(props:{project:Project,setViewProject: any}) {
  return (
    <div class='bg-cover bg-center bg-no-repeat h-full w-full' style={{backgroundImage:`url("${props.project.image}")`}}>
        <div class='bg-slate-900/95 h-full w-full md:rounded-b-md'>
            <div class='over text-white w-full h-full overflow-y-scroll flex flex-col noscrollbar'>
                <div class='flex flex-wrap items-center bg-cover p-5 gap-10 bg-center bg-no-repeat justify-between'>
                    <button class='hover:bg-white hover:text-black/80 transition bg-white/20 rounded-full flex gap-2 items-center px-2 py-1' onClick={() => props.setViewProject(null)}><Icon path={mdiArrowLeft} size={1}/> {t('app.myprojects.content.goback')}</button>
                    <div class='flex flex-col gap-2 items-center w-fit'>
                        <h1 class='text-2xl md:text-4xl text-center font-bold wavy-underline -translate-y-1'>{props.project.title}</h1>
                        <div class='flex items-center justify-center gap-2'>
                            {props.project.skillsName ? props.project.skillsName.map((skill) => {
                                return <span class='text-md bg-white/10 rounded-md px-2 py-1 m-1'>{skill}</span>
                            }) : <></>}
                        </div>
                    </div>
                    {props.project.link ? <a class='hover:bg-white hover:text-black/80 transition bg-white/20 rounded-full flex gap-2 items-center px-2 py-1' href={props.project.link} target={"_blank"}><Icon path={mdiOpenInNew} size={1}/> {props.project.link}</a> : <></>}
                </div>
                <div class='flex flex-col items-center p-5 h-full gap-4'>
                    <p class='text-md md:text-lg'>{language.value == 'fr' ? props.project.descriptionFR : props.project.descriptionEN}</p>
                    <img src={props.project.image} alt="Screenshot" class='h-max md:h-full rounded-md'/>
                </div>
            </div>
        </div>
    </div>
  )
}
