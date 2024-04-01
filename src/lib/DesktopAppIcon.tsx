import { openApp } from "./AppsWindowsManager";

export default function DesktopAppIcon(props:{app:App}) {
  return (
    <div class='group'>
      <button draggable={false} class='hover:scale-105 md:hover:scale-100 w-max md:w-24 z-10 min-h-max flex flex-col items-center justify-center gap-1 md:p-2' onClick={() => {
        openApp(props.app)
      }}
      onDrag={(e) => {
        e.preventDefault();
      }}>
          <img draggable={false} src={props.app.icon} class='w-16 h-16 md:w-10 md:h-10 rounded-xl md:rounded-none p-3 md:p-0' alt={props.app.name + " icon"}/>
          <p draggable={false} class='group-hover:bg-blue-900 border-dotted border-[1px] border-transparent group-hover:border-gray-300 text-white text-center font-light px-1 appfont'>{props.app.name}</p>
      </button>
    </div>
  )
}
