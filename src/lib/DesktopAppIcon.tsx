import { openApp } from "./AppsWindowsManager";

export default function DesktopAppIcon(props:{app:App}) {
  return (
    <>
      <button class='rounded-md w-24 min-h-max flex flex-col items-center justify-center gap-1 md:p-2 hover:shadow-md hover:bg-blue-500/20 transition border-[1px] border-transparent hover:border-blue-500/20' onClick={() => {
        openApp(props.app)
      }}>
          <img src={props.app.icon} class='w-12 h-12' alt={props.app.name + " icon"}/>
          <p class='text-white text-center font-light'>{props.app.name}</p>
      </button>
    </>
  )
}
