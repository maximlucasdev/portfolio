import { Rnd } from "react-rnd"
import { useEffect, useState } from "preact/hooks";
import { activeWindow } from "../Signals";
import apps from "../apps/Apps";
import { openApp } from "./AppsWindowsManager";
import t from "../i18n/i18n";

const customizeApp = apps.find((x) => x.name === 'os_customize')!;
const aboutApp = apps.find((x) => x.name === 'os_about')!;

export default function DesktopContextMenu(props:{x:number,y:number,hide:() => void}) {
    const [resetActiveWindow, setResetActiveWindow] = useState(true);
    useEffect(() => {
        activeWindow.value = -2; // -2 is the desktop context menu
        return () => {
            if (resetActiveWindow) activeWindow.value = -1;
        }
    }, []);
  return (
    <Rnd
      default={{
        //x: 20,
        //y: window.innerHeight - 180,
        x: props.x,
        y: props.y,
      }}
      style={{zIndex: activeWindow.value === -2 ? 100 : 5}}
      enableResizing={false}
      dragHandleClassName='handle'
      bounds="window"
    >
        <div class='flex flex-col rounded-md shadow w-full h-full border-[1px] border-white/10 bg-white/5 backdrop-blur-2xl py-2 text-md'>
            <button class='flex flex-row items-center justify-start w-full hover:bg-white/10 text-white py-2 px-4 gap-2 transition' onClick={() => {
              setResetActiveWindow(false);
              setTimeout(() => openApp(customizeApp), 0);
              props.hide();
            }}>
              <img src='/context/customize.png' class='w-5 h-5'/>
              <p>{t("contextmenu.customize")}</p>
            </button>

            <button class='flex flex-row items-center justify-start w-full hover:bg-white/10 text-white py-2 px-4 gap-2 transition' onClick={() => {
              setResetActiveWindow(false);
              setTimeout(() => openApp(aboutApp), 0);
              props.hide();
            }}>
              <img src='/context/about.png' class='w-5 h-5'/>
              <p>{t("contextmenu.about")}</p>
            </button>
        </div>
    </Rnd>
  )
}
