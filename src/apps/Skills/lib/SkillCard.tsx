import { mdiStar } from "@mdi/js";
import { Icon } from "@mdi/react";
import { useState } from "preact/hooks"; 
export default function SkillCard(props:{skill:Skill, showRating:boolean}) {
    const [hover, setHover] = useState(false);
    
  return (
    <div class='flex bg-slate-800/50 rounded-md items-center border-transparent' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <div class='bg-yellow-500 rounded-md p-2'>
            <Icon path={props.skill.mdi} size={1} className='text-black/80'/>
        </div>
        <div class='flex flex-col gap-0'>
            <p class='px-2 flex gap-1 items-center'>{props.skill.name}</p>
            {hover && props.skill.stars && props.showRating ? <div class='flex flex-row px-2'>
            {/* for loop was not working for some reason */}
                <Icon path={mdiStar} size={0.5} className={props.skill.stars > 0 ? 'text-amber-500' : 'text-gray-500'} />
                <Icon path={mdiStar} size={0.5} className={props.skill.stars > 1 ? 'text-amber-500' : 'text-gray-500'} />
                <Icon path={mdiStar} size={0.5} className={props.skill.stars > 2 ? 'text-amber-500' : 'text-gray-500'} />
                <Icon path={mdiStar} size={0.5} className={props.skill.stars > 3 ? 'text-amber-500' : 'text-gray-500'} />
                <Icon path={mdiStar} size={0.5} className={props.skill.stars > 4 ? 'text-amber-500' : 'text-gray-500'} />
            </div>: <></>}
        </div>
        
    </div>
  )
}
