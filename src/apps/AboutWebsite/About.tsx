import { pepsimode } from "../../Signals";
import t from "../../i18n/i18n";

export default function AboutWebsite() {
  return (
    <div class='bg-slate-900 bg-gradient-to-tl from-slate-800 text-white to-slate-700 rounded-md pt-12 h-full w-full flex flex-col items-center text-center text-md'>
      <div class='flex flex-row gap-2 items-end justify-center w-full py-5 '>
      <h1 class='font-bold text-4xl gradient-text'>{pepsimode.value ? 'Pepsi OS' : 'PortfoliOS'}</h1>
        <p class='font-mono text-sm opacity-50'>v1.0.0 {pepsimode.value ? ' - 🐈 Pepsi mode' : ''}</p>
      </div>

      <div class='flex flex-col gap-2 w-full h-full p-5 text-start text-md font-light'>
        <p class='text-lg text-center'>{t('app.aboutwebsite.content.useadvice')}</p>
        <p>{t('app.aboutwebsite.content.p1')} <a href='https://preactjs.com/' class='underline font-normal'><img src='/3rdparty/preact.png' class='w-5 h-5 inline' target="_blank"/> Preact</a> {t('app.aboutwebsite.content.p2')} <a href='https://vitejs.dev/' class='underline font-normal'><img src='/3rdparty/vitejs.svg' class='w-5 h-5 inline' target="_blank"/> Vite</a></p>
        <p>{t('app.aboutwebsite.content.p3')} <a href='https://preactjs.com/' class='underline font-normal'><img src='/3rdparty/tailwind.svg' class='w-5 h-5 inline' target="_blank"/> Tailwind CSS</a> {t('app.aboutwebsite.content.p4')}</p>
        <p>{t('app.aboutwebsite.content.p5')} <a href='https://icons8.com/' class='underline font-normal'><img src='/3rdparty/icons8.png' class='w-5 h-5 inline' target="_blank"/> Icons8</a>.</p>
        <p>{t('app.aboutwebsite.content.p6')} <a href='https://cloudflare.com/' class='underline font-normal'><img src='/3rdparty/cloudflare.png' class='h-3 inline' target="_blank"/> CloudFlare Pages</a>.</p>
        <div class='h-full'/>
        <p class='text-sm text-center w-full text-gray-500'>Copyright © {new Date().getFullYear()} <a href='https://github.com/shadowdevfr' target='_blank'>Maxim Lucas</a> {t('copyright')}</p>
      </div>
    </div>
  )
}