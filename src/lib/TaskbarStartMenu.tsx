import { Animated } from "react-animated-css";
import apps from "../apps/Apps";
import { Icon } from '@mdi/react';
import { mdiGithub, mdiRestart } from "@mdi/js";
import { pepsimode } from "../Signals";
import { openApp } from "./AppsWindowsManager";
import t from "../i18n/i18n";

export default function TaskbarStartMenu() {
  const dmyl = new Date().toLocaleDateString(undefined, {day: 'numeric', month: 'long', year: 'numeric'});
  return (
    // @ts-ignore
    <Animated animationIn="slideInUp" animationInDuration={200} visible={true}>
      <div class='flex flex-col justify-start items-center rounded-t-md w-80 md:w-96 shadow'>
        <img src="/startmenu/startmenu-top.png" class="w-full"/>
        <div class="flex w-full border-blue-600 border-r-2 border-l-[1.5px]">
        <div class="bg-white w-full h-full">
        {apps.map((app) => {
          if (app.name === "Pepsi" && !pepsimode.value) return null;
          if (app.hide) return null;
          return (
            <button class='flex flex-row items-center justify-start w-full hover:bg-blue-700 hover:text-white text-black p-3 gap-3 transition' onClick={() => openApp(app)}>
              <img src={app.icon} class='w-8 h-8'/>
              <p>{app.name}</p>
            </button>
          )
        })}
        <button class="flex items-center gap-2 p-2 justify-center">
          <img src="/startmenu/allprograms.png" class="h-5"/>
          <p class="text-black font-bold">All programs</p>
        </button>
        </div>
        <div class="bg-blue-200 w-full border-blue-500 border-l-[1px]">

        </div>
        </div>
        <div class='flex flex-row items-center justify-end w-full text-black border-t-[1px] border-blue-800 p-4 gap-3 transition bg-gradient-to-t from-blue-800 to-blue-500'>
          <button class='flex items-center gap-2 text-white' onClick={() => {window.location.reload(); localStorage.clear()}}><img src="/startmenu/logoff.png" class="w-5 h-5"/> {t('actionbuttons.reset')}</button>
        </div>
      </div>
    </Animated>
  )
}