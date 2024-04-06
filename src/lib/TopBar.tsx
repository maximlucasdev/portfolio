import Icon from '@mdi/react';
import {  mdiTranslate, mdiVolumeHigh, mdiWifi } from "@mdi/js";
import apps from '../apps/Apps';
import { activeWindow, isAppFullscreen } from "../Signals";
import { useFloating } from '@floating-ui/react';
import TaskbarLanguagePopup from './TaskbarLanguagePopup';
import TaskbarSettingsPopup from './TaskbarSettingsPopup';
import { useEffect, useState } from 'preact/hooks';
import { Animated } from 'react-animated-css';

export default function TopBar() {
    const settingsFloat = useFloating({placement: 'bottom-end'});
    const languageFloat = useFloating({placement: 'bottom'});   
    const [time, setTime] = useState(new Date());
    const [visible, setVisible] = useState(false);


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
    return (<div class='absolute top-0 left-0 w-full'>
        <Animated animationIn={"slideInDown"} animationOut={"slideOutUp"} isVisible={visible}>
            {activeWindow.value === -5 ? (<div ref={languageFloat.refs.setFloating} style={languageFloat.floatingStyles as any}><TaskbarLanguagePopup/></div>) : null}
            {activeWindow.value === -4 ? (<div ref={settingsFloat.refs.setFloating} style={settingsFloat.floatingStyles as any}><TaskbarSettingsPopup/></div>) : null}

            <div class='flex flex-row items-center backdrop-blur-2xl bg-white/5 shadow h-8 px-5 justify-between'>
                <div class='flex gap-2 items-center'>
                    {activeWindow.value < 0 ? <>
                        <img src='/logo.svg' class='w-5 h-5'/>
                    </> : <>
                        <img src={apps[activeWindow.value].icon} class='w-5 h-5'/>
                        <p class='font-bold text-white text-sm'>{apps[activeWindow.value].name.includes("os_") ? apps[activeWindow.value].window.title : apps[activeWindow.value].name}</p>
                    </>}
                </div>
                <div class='flex flex-row items-center'>
                    <button ref={languageFloat.refs.setReference} class='flex flex-col gap-1 items-center hover:bg-white/5 p-2 transition' aria-label="Change language" onClick={() => {
                        activeWindow.value = activeWindow.value === -5 ? -1 : -5;
                    }}>
                        <Icon path={mdiTranslate} size={0.7} className='text-white'/>
                    </button>
                    <button ref={settingsFloat.refs.setReference} class='flex flex-col gap-1 items-center hover:bg-white/5 p-2 transition' onClick={() => {
                        activeWindow.value = activeWindow.value === -4 ? -1 : -4;
                    }}>
                        <div class='flex flex-row gap-3 items-center'>
                            <Icon path={mdiWifi} size={0.7} className='text-white'/>
                            <Icon path={mdiVolumeHigh} size={0.7} className='text-white'/>
                        </div>
                    </button>
                    <div class='font-mono p-1 text-sm text-white hidden md:block ml-5'>
                        {time.toLocaleTimeString()}
                    </div>
                </div>
            </div>
        </Animated>
    </div>)
}
