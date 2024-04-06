import { openApp } from "./AppsWindowsManager";

export default function DesktopAppIconMobile(props:{app:App}) {
  return (
    <>
      <button draggable={false} class='hover:scale-105 md:hover:scale-100 w-1/4 md:w-24 rounded-md z-10 min-h-max flex flex-col items-center justify-center gap-1 md:p-2 md:hover:shadow-md md:hover:bg-blue-500/20 transition border-[1px] border-transparent md:hover:border-blue-500/20' onClick={() => {
        openApp(props.app)
      }}
      onDrag={(e) => {
        e.preventDefault();
      }}>
          <img draggable={false} src={props.app.icon} class='w-16 h-16 md:w-12 md:h-12 backdrop-blur-2xl bg-white/10 shadow md:shadow-none md:from-transparent md:to-transparent rounded-xl md:rounded-none p-3 md:p-0' alt={props.app.name + " icon"}/>
          <p draggable={false} class='text-white text-center font-light'>{props.app.name}</p>
      </button>
    </>
  )
}
