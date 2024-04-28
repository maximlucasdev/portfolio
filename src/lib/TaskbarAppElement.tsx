import { Animated } from "react-animated-css";
import { activeWindow, openedWindows } from "../Signals";
import apps from "../apps/Apps";
import { openApp } from "./AppsWindowsManager";

export default function TaskbarAppElement(props:{app:App}) {
  return (
    <Animated animationIn="zoomIn" animationOut="zoomOut" isVisible={true} animationInDuration={100}>
      <button class={`flex flex-col items-center gap-2 px-2`} onClick={() => {
        const appIndex = apps.indexOf(props.app);
        activeWindow.value = appIndex;
        if (!openedWindows.value.includes(appIndex as never)) {
          openApp(apps[appIndex])
        }
      }}>
          <div class={`group w-12 h-12 ${activeWindow.value === apps.indexOf(props.app) ? '-translate-y-4 scale-150' : 'hover:-translate-y-4 hover:scale-125 hover:mx-2'} transition-all`}>
            <p class='invisible group-hover:visible absolute m-auto left-0 right-0 text-white text-xs p-2 w-max  bg-white/5 rounded-md -translate-y-10'>{apps[apps.indexOf(props.app)].name}</p>
            <img class='w-12 h-12' src={props.app.icon}/>
          </div>
          <div class={`w-3 h-1 bg-white/80 rounded-full ${openedWindows.value.includes(apps.indexOf(props.app) as never) ? 'block' : 'hidden'} transition-[display]`}/>
      </button>
    </Animated>
  )
}
