import { Animated } from "react-animated-css";
import { useState } from "preact/hooks";
import t from "../i18n/i18n";
export default function WelcomePopup(props:any) {
  const [visible, setVisible] = useState(true);
  function close() {
    setVisible(false);
    setTimeout(() => {props.hide()}, 500);
  }
  return (
    // @ts-ignore
    <Animated animationIn="slideInUp" animationInDuration={500} animationOut="fadeOut" animationOutDuration={500} isVisible={visible}>
      <div class='bg-stone-700/20 border-white/10 md:border-[1px] backdrop-blur-sm w-screen md:w-96 rounded-lg px-2 md:px-5'>
        <div class='flex flex-row gap-2 items-center p-2'>
          <img src='/apps/welcome.png' class='w-20 h-20' alt="Waving hand"/>
          <div class='flex flex-col justify-center'>
            <p class='text-white text-xl font-bold'>{t('welcome.title')}</p>
            <p class='text-gray-400 text-sm mb-2'>{t('welcome.desc1')}</p>
            <p class='text-gray-400 text-sm'>{t('welcome.desc2')}</p>
            <div class='flex flex-row gap-2 justify-center items-center p-2'>
              <button class='bg-white/10 hover:bg-white/20 text-white rounded-md px-2 py-1 transition' onClick={() => { close(); localStorage.setItem('hideWelcome', 'true')}}>{t('welcome.btn')}</button>
            </div>
          </div>
        </div>
        
      </div>
    </Animated>
  )
}