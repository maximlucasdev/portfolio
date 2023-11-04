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
      <div class='flex flex-col justify-start items-center p-2 rounded-md mb-5 w-80 md:w-96 bg-stone-700/20 border-white/10 md:border-[1px] px-2 md:px-5 backdrop-blur-sm'>
        <p class='text-white font-light text-lg'>{dmyl}</p>
        <p class='text-white font-thin'>{new Date().toLocaleTimeString()}</p>
        {apps.map((app) => {
          if (app.name === "Pepsi" && !pepsimode.value) return null;
          if (app.hide) return null;
          return (
            <button class='flex flex-row items-center justify-start w-full hover:bg-white/10 text-white px-1 py-2 gap-3 transition' onClick={() => openApp(app)}>
              <img src={app.icon} class='w-7 h-7'/>
              <p>{app.name}</p>
            </button>
          )
        })}
        <div class='flex flex-row items-center justify-end w-full text-white mt-2 mb-1 border-t-[1px] border-white/10 p-4 gap-3 transition'>
          <a class='hover:bg-white hover:text-black/80 transition bg-white/20 rounded-full flex gap-2 items-center px-2 py-1' href='https://github.com/shadowdevfr/shadowdevfr' target="_blank"><Icon path={mdiGithub} size={1}/> {t('actionbuttons.srccode')}</a>
          <button class='hover:bg-white hover:text-black/80 transition bg-white/20 rounded-full flex gap-2 items-center px-2 py-1' onClick={() => {window.location.reload(); localStorage.clear()}}><Icon path={mdiRestart} size={1}/> {t('actionbuttons.reset')}</button>
        </div>
      </div>
    </Animated>
  )
}