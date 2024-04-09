import { mdiGithub, mdiRestart } from "@mdi/js";
import { pepsimode } from "../../Signals";
import t from "../../i18n/i18n";
import Icon from "@mdi/react";

export default function AboutWebsite() {
  return (
    <div class='bg-slate-700 text-white rounded-md pt-12 h-full w-full flex flex-col items-center text-center text-md'>
      <div class='flex flex-row gap-2 items-end justify-center w-full py-5 '>
      <h1 class='font-bold text-4xl gradient-text'>{pepsimode.value ? 'Pepsi OS' : 'PortfoliOS'}</h1>
        <p class='font-mono text-sm opacity-50'>v1.1.2 {pepsimode.value ? ' - 🐈 Pepsi mode' : ''}</p>
      </div>

      <div class='flex flex-col gap-2 w-full h-full p-5 text-start text-md font-light'>
        <p class='text-lg text-center'>{t('app.aboutwebsite.content.useadvice')}</p>
        <p class='text-lg text-center'>{t('welcome.desc3')}</p>
        <p>{t('app.aboutwebsite.content.p1')} <a href='https://preactjs.com/' target="_blank" class='underline font-normal'><img src='/3rdparty/preact.png' class='w-5 h-5 inline' target="_blank"/> Preact</a> {t('app.aboutwebsite.content.p2')} <a href='https://vitejs.dev/' class='underline font-normal'><img src='/3rdparty/vitejs.svg' class='w-5 h-5 inline' target="_blank"/> Vite</a></p>
        <p>{t('app.aboutwebsite.content.p3')} <a href='https://preactjs.com/' target="_blank" class='underline font-normal'><img src='/3rdparty/tailwind.svg' class='w-5 h-5 inline' target="_blank"/> Tailwind CSS</a> {t('app.aboutwebsite.content.p4')}</p>
        <p>{t('app.aboutwebsite.content.p5')} <a href='https://icons8.com/' target="_blank" class='underline font-normal'><img src='/3rdparty/icons8.png' class='w-5 h-5 inline' target="_blank"/> Icons8</a>.</p>
        <p>{t('app.aboutwebsite.content.p6')} <a href='https://cloudflare.com/' target="_blank" class='underline font-normal'><img src='/3rdparty/cloudflare.png' class='h-3 inline' target="_blank"/> CloudFlare Pages</a>.</p>
        <div class='h-full'/>
        <p class='text-sm text-center w-full text-gray-500'>Copyright © {new Date().getFullYear()} <a href='https://github.com/shadowdevfr' target='_blank'>Maxim Lucas</a> {t('copyright')}</p>
        <div class='flex flex-row items-center justify-center w-full text-white mt-2 mb-1 p-4 gap-3 '>
          <a class='hover:bg-white hover:text-black/80 transition bg-white/20 rounded-full flex gap-2 items-center px-2 py-1' href='https://github.com/shadowdevfr/shadowdevfr' target="_blank"><Icon path={mdiGithub} size={1}/> {t('actionbuttons.srccode')}</a>
          <button class='hover:bg-white hover:text-black/80 transition bg-white/20 rounded-full flex gap-2 items-center px-2 py-1' onClick={() => {window.location.reload(); localStorage.clear()}}><Icon path={mdiRestart} size={1}/> {t('actionbuttons.reset')}</button>
        </div>
      </div>
    </div>
  )
}