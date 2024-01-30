import { Animated } from "react-animated-css";
import t from "../../i18n/i18n";

export default function AboutMe() {
  return (
    <div class='rounded-md bg-slate-900 h-full w-full'>
        <div class='p-10 rounded-md gap-5 text-center text-white w-full h-full flex flex-col pt-20 items-center justify-center' style='background: radial-gradient(circle at 50% 50%, rgba(24, 50, 92, 0.5) 50%, rgba(12, 25, 46, 1) 100%);'>
            {/* @ts-ignore */}
            <Animated animationIn="fadeInDown" animationInDuration={1000}>
                <h1 class='text-4xl font-medium font-mono'><span class='font-bold '>Hey!</span> {t('app.aboutme.content.title')}</h1>
                <p>{t('app.aboutme.content.subtitle')}</p>
            </Animated>

            {/* @ts-ignore */}
            <Animated animationIn="fadeIn" animationInDuration={2000} animationInDelay={500}>
                <p class='max-w-2xl'>{t('app.aboutme.content.desc')}</p>
            </Animated>

            {/* @ts-ignore */}
            <Animated animationIn="fadeIn" animationInDuration={2000} animationInDelay={1000}>
                <button class='bg-blue-600 shadow p-2 rounded-md opacity-50 cursor-not-allowed'>
                    {t('app.aboutme.content.btn')}
                </button>
            </Animated>
        </div>
    </div>
  )
}
