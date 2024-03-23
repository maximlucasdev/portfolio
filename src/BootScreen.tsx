import t from "./i18n/i18n";

export default function BootScreen(props:{status:number}) {
  return (
    <div class='absolute top-0 z-50 left-0 flex flex-col gap-5 w-full h-screen items-center justify-between bg-no-repeat bg-cover bg-center bg-logon'>
        <div class='flex flex-col gap-5 items-center justify-center text-white h-full'>
          <p class='text-white font-thin appfont'>{props.status === 2 ? t('boot.2') : t('boot.1')}</p>
        </div>
        <p class='text-md text-center w-full text-gray-500 mb-5'>Copyright © {new Date().getFullYear()} <a href='https://github.com/shadowdevfr' target='_blank'>Maxim Lucas</a> {t('copyright')}</p>
    </div>
  )
}
