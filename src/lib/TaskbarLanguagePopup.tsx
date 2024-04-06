import { mdiCheck } from "@mdi/js";
import { Animated } from "react-animated-css";
import { Icon } from '@mdi/react';
import { language } from "../Signals";

export default function TaskbarLanguagePopup() {
  return (
    <Animated animationIn="slideInDown" animationInDuration={200} animationOut="fadeOut" isVisible={true} className='pt-3'>
      <div class='flex flex-col rounded-md h-max w-44 mb-5 border-[1px] border-white/10 bg-white/5 backdrop-blur-2xl '>
        <button class='flex flex-row items-center gap-2 p-3 border-b-[1px] border-white/10 text-white text-lg hover:bg-white/10 transition rounded-t-md' onClick={() => {
          localStorage.setItem("language", "fr");
          window.location.reload();
        }}>
          <img src='/flags/fr.svg' class='h-7' alt="Drapeau français"/> Français
          {language.value == 'fr' ? <Icon path={mdiCheck} size={0.8}/> : <></>}
        </button>
        <button class='flex flex-row items-center gap-2 p-3 text-white text-lg hover:bg-white/10 transition rounded-b-md' onClick={() => {
          localStorage.setItem("language", "en");
          window.location.reload();
        }}>
          <img src='/flags/gb.svg' class='h-7' alt="Drapeau français"/> English
          {language.value == 'en' ? <Icon path={mdiCheck} size={0.8}/> : <></>}
        </button>
      </div>
    </Animated>
  )
}