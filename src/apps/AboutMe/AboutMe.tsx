import { Animated } from "react-animated-css";
import t from "../../i18n/i18n";

export default function AboutMe() {
  return (
    <div class='rounded-md h-full w-full bg-gray-700'>
        <div class='p-10 rounded-md gap-5 text-center text-white w-full h-full flex flex-col pt-20 items-center justify-center'>
            <Animated animationIn="fadeInDown"  animationOut="fadeOut" isVisible={true} animationInDuration={1000}>
                <h1 class='text-4xl font-bold'><span class='font-bold '>Hey!</span> {t('app.aboutme.content.title')}<span class='gradient-text'>Maxim</span>.</h1>
                <p>{t('app.aboutme.content.subtitle')}</p>
            </Animated>

            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDuration={2000} animationInDelay={500}>
                <p class='max-w-2xl'>{t('app.aboutme.content.desc')}</p>
            </Animated>

            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDuration={2000} animationInDelay={1000}>
                <button class='bg-blue-600 shadow p-2 rounded-md opacity-50 cursor-not-allowed'>
                    {t('app.aboutme.content.btn')}
                </button>
            </Animated>
        </div>
    </div>
  )
}
