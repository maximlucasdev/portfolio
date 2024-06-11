import { language } from "../../../Signals";
import t from "../../../i18n/i18n";

export default function ProjectCard(props:{project:Project,setViewProject:any}) {
  return (
    <div class='flex flex-col bg-slate-800/80 rounded-md items-center border-transparent w-96'>
        <button class='w-full rounded-md relative hover:scale-105 transition' onClick={() => props.setViewProject(props.project)}>
            <div class='absolute top-0 h-full w-full opacity-0 transition hover:opacity-100 hover:backdrop-blur-sm hover:bg-white/5 rounded-md flex flex-col items-center justify-center gap-2'>
                <p class='text-xl'>{t("app.myprojects.content.learnmore")}</p>
            </div>
            <img src={props.project.image} alt={`${props.project.title} image`} loading="lazy" class='rounded-md'/>
        </button>
        <div class='p-2 text-center'>
            <p class='text-xl font-bold'>{props.project.title}</p>
            <p class='text-xs font-light text-gray-400'>{language.value == 'fr' ? props.project.subtitleFR : props.project.subtitleEN}</p>
            <div class='flex items-center justify-center flex-wrap mt-2'>
              {props.project.skillsName ? props.project.skillsName.map((skill) => {
                  return <span class='text-xs bg-white/10 rounded-md p-1 m-1'>{skill}</span>
              }) : <></>}
              {props.project.executable ? <span class='text-xs bg-blue-500/50 border-2 border-blue-500 rounded-md p-1 m-1'>✨ Portfolio App</span> : <></>}
            </div>
        </div>
        
    </div>
  )
}
    