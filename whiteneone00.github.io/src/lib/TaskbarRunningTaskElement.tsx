import { Animated } from "react-animated-css";
import { activeWindow } from "../Signals";
import apps from "../apps/Apps";

export default function TaskbarRunningTaskElement(props:{app:App}) {
  return (
    /* @ts-ignore */
    <Animated animationIn="zoomIn" animationInDuration={100}>
      <button class={`flex flex-row items-center gap-2 h-14 px-2 border-b-2 ${activeWindow.value === apps.indexOf(props.app) ? 'bg-white/10' : ' border-zinc-500'}`} onClick={() => {
        activeWindow.value = apps.indexOf(props.app)
      }}>
          <img class='w-6 h-6' src={props.app.icon}/>
          <p class='text-white text-md md:text-lg'>{props.app.window.title}</p>
      </button>
    </Animated>
  )
}
