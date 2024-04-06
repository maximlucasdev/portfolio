import t from "./i18n/i18n";

export default function BootScreen(props:{status:number}) {
  return (
    <div class='absolute top-0 z-[99999] left-0 flex flex-col gap-5 bg-zinc-900 w-full h-screen items-center justify-between'>
        <div class='flex flex-col gap-5 items-center justify-center text-white h-full'>
          <img src='/logo.svg' class='w-20 h-20' />
          <div class='w-80 h-1 bg-white/20'>
              <div class={`${props.status === 2 ? 'w-2/3' : 'w-1/3'} h-full bg-white`}></div>
          </div>
          <p class='text-white/50 font-thin'>{props.status === 2 ? t('boot.2') : t('boot.1')}</p>
          {props.status === 2 ? <button class='hover:bg-white hover:text-black/80 transition bg-white/20 rounded-full flex gap-2 items-center px-2 py-1' onClick={() => {window.location.reload(); localStorage.clear()}}>{t('actionbuttons.reset')}</button> : <></>}
        </div>
        <p class='text-md text-center w-full text-gray-500 mb-5'>Copyright © {new Date().getFullYear()} <a href='https://github.com/shadowdevfr' target='_blank'>Maxim Lucas</a> {t('copyright')}</p>
    </div>
  )
}
