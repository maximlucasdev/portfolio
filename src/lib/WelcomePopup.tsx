import { Animated } from "react-animated-css";
import { useState } from "preact/hooks";
import t from "../i18n/i18n";
export default function WelcomePopup(props:{isMobile:boolean, hide: () => void}) {
  const [visible, setVisible] = useState(true);
  function close() {
    setVisible(false);
    setTimeout(() => {props.hide()}, 500);
  }
  return (
    <Animated animationIn={props.isMobile ? "zoomIn" : "slideInUp"} animationInDuration={props.isMobile ? 200 : 500} animationOut="fadeOut" animationOutDuration={500} isVisible={visible}>
      <div class='bg-black/80 md:bg-stone-700/20 flex items-center justify-center md:block border-white/10 md:border-[1px] backdrop-blur-sm w-screen h-screen md:h-max md:w-[500px] md:rounded-lg px-2 md:px-5'>
        <div class='flex justify-center gap-2 items-center p-2 flex-wrap md:flex-nowrap'>
          <img src='/apps/welcome.png' class='w-24 h-24 mb-5 md:mb-0 md:w-20 md:h-20' alt="Waving hand"/>
          <div class='flex flex-col justify-center text-center md:text-left text-white md:text-gray-400'>
            <p class='text-white text-2xl md:text-xl font-bold'>{t('welcome.title')}</p>
            <p class='text-base md:text-sm mb-2'>{t('welcome.desc1')}</p>
            <p class='text-base md:text-sm mb-2'>{t('welcome.desc2')}</p>
            <p class='text-base md:text-sm mb-2'>{t('welcome.desc3')}</p>
            <p class='text-gray-300 text-md font-bold'>{t('welcome.desc4')}</p>
            <div class='flex gap-2 justify-center items-center p-2'>
              <button class='bg-white/10 hover:bg-white/20 text-white rounded-md px-2 py-1 transition' onClick={() => { close(); localStorage.setItem('hideWelcome', 'true')}}>{t('welcome.btn')}</button>
            </div>
          </div>
        </div>
        
      </div>
    </Animated>
  )
}