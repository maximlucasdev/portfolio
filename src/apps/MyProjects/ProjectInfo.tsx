import { mdiArrowLeft, mdiOpenInNew } from "@mdi/js"
import Icon from "@mdi/react"
import t from "../../i18n/i18n"

export default function ProjectInfo(props:{project:Project,setViewProject: any}) {
  return (
    <div class='bg-cover bg-center bg-no-repeat h-full w-full' style={{backgroundImage:`url("${props.project.image}")`}}>
        <div class='bg-slate-900/95 h-full w-full md:rounded-b-md'>
            <div class='over text-white w-full h-full overflow-y-scroll flex flex-col noscrollbar'>
                <div class='flex flex-wrap items-center bg-cover p-5 gap-10 bg-center bg-no-repeat'>
                    <button class='flex flex-row gap-1 transition hover:scale-105' onClick={() => props.setViewProject(null)}>
                        <Icon path={mdiArrowLeft} size={1}/> {t('app.myprojects.content.goback')}
                    </button>
                    <h1 class='text-2xl md:text-4xl text-center font-bold wavy-underline'>{props.project.title}</h1>
                    {props.project.link ? <div class='flex items-center transition justify-center text-lg md:text-xl underline gap-1 text-yellow-500'>
                        <Icon path={mdiOpenInNew} size={1}/>
                        <a href={props.project.link} target="_blank">{t('app.myprojects.content.open')}</a>
                    </div> : <></>}
                </div>
                <div class='flex flex-col items-center p-5 h-full gap-4'>
                    <p class='text-md md:text-lg'>{props.project.description}</p>
                    <img src={props.project.image} alt="Screenshot" class='h-max md:h-full rounded-md'/>
                </div>
            </div>
        </div>
    </div>
  )
}
