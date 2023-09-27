import t from "../../../i18n/i18n";

export default function ProjectCard(props:{project:Project,setViewProject:any}) {
  return (
    <div class='flex flex-col bg-slate-800 rounded-md items-center border-transparent w-96'>
        <button class='w-full rounded-md relative hover:scale-105 transition' onClick={() => props.setViewProject(props.project)}>
            <div class='absolute top-0 h-full w-full opacity-0 transition hover:opacity-100 hover:backdrop-blur-sm hover:bg-white/5 rounded-md flex flex-col items-center justify-center gap-2'>
                <p class='text-xl'>{t("app.myprojects.content.learnmore")}</p>
            </div>
            <img src={props.project.image} alt={`${props.project.title} image`} loading="lazy" class='rounded-md'/>
        </button>
        <div class='p-2 text-center'>
            <p class='text-xl'>{props.project.title}</p>
            <p class='text-xs font-light text-gray-400'>{props.project.subtitle}</p>
        </div>
        
    </div>
  )
}
    