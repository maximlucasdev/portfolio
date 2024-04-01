import { useEffect, useState } from "preact/hooks";
import TaskbarRunningTaskElement from "./TaskbarRunningTaskElement";
import Apps from "../apps/Apps";
import { activeWindow, isAppFullscreen, openedWindows } from "../Signals";
import TaskbarSettingsPopup from "./TaskbarSettingsPopup";
import { useFloating } from "@floating-ui/react-dom";
import TaskbarStartMenu from "./TaskbarStartMenu";
import Icon from "@mdi/react";
import {mdiTranslate} from "@mdi/js";
import { Animated } from "react-animated-css";
import TaskbarLanguagePopup from "./TaskbarLanguagePopup";

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
        <div>
            <div class='translate-y-1 flex theme-bg justify-between flex-row items-center w-full h-10 bg-stone-700/30 border-white/10 md:border-[1px] backdrop-blur-sm'>
                <div class='flex flex-row items-center gap-2 h-full'>
                    <button ref={startFloat.refs.setReference} aria-label="Start menu" class={`flex gap-2 items-center justify-center mr-2 h-full w-32 ${activeWindow.value == -3 ? 'startbtn-bg-active' : 'startbtn-bg'}`} onClick={() => activeWindow.value = activeWindow.value === -3 ? -1 : -3}/>
                    {openedWindows.value.map((appid) => {
                        return <TaskbarRunningTaskElement app={Apps[appid]}/>
                    })}
                </div>
                <div class='flex flex-row items-center h-full'>
                    <div class='flex flex-row md:gap-5 items-center h-full taskbar-clock-bg px-5 border-l-[1px] border-zinc-800/30'>
                        <button ref={languageFloat.refs.setReference} class='flex flex-col justify-center gap-1 items-center h-full' aria-label="Change language" onClick={() => {
                            activeWindow.value = activeWindow.value === -5 ? -1 : -5;
                        }}>
                            <Icon path={mdiTranslate} size={0.9} className='text-white'/>
                        </button>
                        <button ref={settingsFloat.refs.setReference} class='flex flex-col justify-center gap-1 items-center h-full' onClick={() => {
                            activeWindow.value = activeWindow.value === -4 ? -1 : -4;
                        }}>
                            <div class='flex flex-row gap-3 items-center'>
                                <img src='/icons/network.png' class='w-5 h-5' alt="Connected"/>
                                <img src='/icons/sound.png' class='w-5 h-5' alt="Connected"/>
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
