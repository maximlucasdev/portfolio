import { useEffect, useState } from "preact/hooks";
import TaskbarRunningTaskElement from "./TaskbarRunningTaskElement";
import Apps from "../apps/Apps";
import { activeWindow, isAppFullscreen, openedWindows, pepsimode } from "../Signals";
import TaskbarSettingsPopup from "./TaskbarSettingsPopup";
import { useFloating } from "@floating-ui/react-dom";
import apps from "../apps/Apps";
import { openApp } from "./AppsWindowsManager";
import TaskbarStartMenu from "./TaskbarStartMenu";
import Icon from "@mdi/react";
import { mdiBrush, mdiInformation, mdiTranslate, mdiVolumeHigh, mdiWifi } from "@mdi/js";
import { Animated } from "react-animated-css";
import TaskbarLanguagePopup from "./TaskbarLanguagePopup";

const customizeApp = apps.find((x) => x.name === 'os_customize')!;
const aboutApp = apps.find((x) => x.name === 'os_about')!;

export default function Taskbar() {
    const [time, setTime] = useState(new Date());
    const [visible, setVisible] = useState(false);
    const settingsFloat = useFloating({placement: 'top-end'});
    const languageFloat = useFloating({placement: 'top'});   
    const startFloat = useFloating({placement: 'top-start'});

    useEffect(() => {
        let x = setInterval(() => {
            setTime(new Date());
        }, 1000);
        if (activeWindow.value >= 0 && window.innerWidth < 768 || isAppFullscreen.value) {
            setVisible(false);
        } else {
            setVisible(true);
        }
        return () => {
            clearInterval(x);
        }
    }, [activeWindow.value, isAppFullscreen.value]);
  return (
    // @ts-ignore
    <Animated animationIn={"slideInUp"} animationOut={"slideOutDown"} isVisible={visible}>
        {activeWindow.value === -5 ? (<div ref={languageFloat.refs.setFloating} style={languageFloat.floatingStyles}><TaskbarLanguagePopup/></div>) : null}
        {activeWindow.value === -4 ? (<div ref={settingsFloat.refs.setFloating} style={settingsFloat.floatingStyles}><TaskbarSettingsPopup/></div>) : null}
        {activeWindow.value === -3 ? (<div ref={startFloat.refs.setFloating} style={startFloat.floatingStyles}><TaskbarStartMenu/></div>) : null}
        <div class='md:p-5'>
            <div class='flex md:rounded-md justify-between flex-row items-center w-full h-14 bg-stone-700/30 border-white/10 md:border-[1px] px-2 md:pr-5 backdrop-blur-sm'>
                <div class='flex flex-row items-center gap-2'>
                    <button ref={startFloat.refs.setReference} aria-label="Start menu" class='mr-2 md:mr-10 ml-2' onClick={() => activeWindow.value = activeWindow.value === -3 ? -1 : -3}>
                        <img src={pepsimode.value ? '/cat.svg' : '/logo.svg'} alt="Start menu logo" class='w-8 h-8 hover:scale-125 transition hover:rotate-[360deg]' />
                    </button>
                    {openedWindows.value.map((appid) => {
                        return <TaskbarRunningTaskElement app={Apps[appid]}/>
                    })}
                </div>
                <div class='flex flex-row items-center'>
                    <div class='flex flex-row md:gap-5 items-center'>
                        <button class='block md:hidden mr-3 transition scale-110 hover:scale-125' aria-label="Customize" onClick={() => {openApp(customizeApp);}}>
                            <Icon path={mdiBrush} size={0.9} className='text-white'/>
                        </button>
                        <button class='block md:hidden mr-3 transition scale-110 hover:scale-125' aria-label="About website" onClick={() => {openApp(aboutApp);}}>
                            <Icon path={mdiInformation} size={0.9} className='text-white'/>
                        </button>
                        <button ref={languageFloat.refs.setReference} class='flex flex-col gap-1 items-center hover:bg-white/5 p-2 md:p-3 rounded-md border-t-[1px] border-transparent hover:border-white/5 transition' aria-label="Change language" onClick={() => {
                            activeWindow.value = activeWindow.value === -5 ? -1 : -5;
                        }}>
                            <Icon path={mdiTranslate} size={0.9} className='text-white'/>
                        </button>
                        <button ref={settingsFloat.refs.setReference} class='flex flex-col gap-1 items-center hover:bg-white/5 p-2 md:p-3 rounded-md border-t-[1px] border-transparent hover:border-white/5 transition' onClick={() => {
                            activeWindow.value = activeWindow.value === -4 ? -1 : -4;
                        }}>
                            <div class='flex flex-row gap-3 items-center'>
                                <Icon path={mdiWifi} size={0.9} className='text-white'/>
                                <Icon path={mdiVolumeHigh} size={0.9} className='text-white'/>
                            </div>
                            <div class='font-mono text-xs text-white block md:hidden'>
                                {time.toLocaleTimeString()}
                            </div>
                        </button>
                        <div class='font-mono p-1 text-white hidden md:block'>
                            {time.toLocaleTimeString()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Animated>
  )
}
