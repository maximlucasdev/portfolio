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
    // @ts-ignore
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
        <div class='flex flex-col w-full h-full shadow-xl bg-white border-[1px] border-stone-400'>
            <button class='flex flex-row items-center justify-start w-full hover:bg-[#5d81bd] hover:text-white text-black py-1 px-4 gap-2' onClick={() => {
              setResetActiveWindow(false);
              setTimeout(() => openApp(customizeApp), 0);
              props.hide();
            }}>
              <img src='/context/customize.png' class='w-4 h-4'/>
              <p>{t("contextmenu.customize")}</p>
            </button>

            <button class='flex flex-row items-center justify-start w-full hover:bg-[#5d81bd] hover:text-white text-black py-1 px-4 gap-2' onClick={() => {
              setResetActiveWindow(false);
              setTimeout(() => openApp(aboutApp), 0);
              props.hide();
            }}>
              <img src='/context/about.png' class='w-4 h-4'/>
              <p>{t("contextmenu.about")}</p>
            </button>
        </div>
    </Rnd>
  )
}
