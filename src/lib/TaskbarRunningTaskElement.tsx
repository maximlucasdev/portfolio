import { Animated } from "react-animated-css";
import { activeWindow } from "../Signals";
import apps from "../apps/Apps";

export default function TaskbarRunningTaskElement(props:{app:App}) {
  return (
    /* @ts-ignore */
    <Animated animationIn="zoomIn" animationInDuration={100}>
      <button class={`flex flex-row items-center gap-2 h-7 mt-2 px-2 border-b-2 openeditem ${activeWindow.value === apps.indexOf(props.app) ? 'bg-white/10' : ' border-zinc-500'}`} onClick={() => {
        activeWindow.value = apps.indexOf(props.app)
      }}>
          <img class='w-4 h-4' src={props.app.icon}/>
          <p class='text-white'>{props.app.window.title}</p>
      </button>
    </Animated>
  )
}
