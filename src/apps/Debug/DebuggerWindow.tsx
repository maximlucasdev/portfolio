import { Rnd } from "react-rnd";
import { activeWindow, openedWindows } from "../../Signals";

export default function DebuggerWindow() {
    return (
      <Rnd
        default={{
          x: window.innerWidth-200,
          y: 50,
        }}
        style={{zIndex: 999}}
        enableResizing={false}
        dragHandleClassName='handle'
        bounds="window"
      >
          <div class='flex flex-col rounded-md shadow w-full h-full bg-stone-700/30 border-white/10 border-[1px] py-2 p-2 backdrop-blur-sm text-md text-white'>
                <p>Active Window: {activeWindow.value}</p>
                <p>Opened Windows:</p>
                {openedWindows.value.map((window) => {
                return (
                    <p>{window}</p>
                )
                })}
                <p>{JSON.stringify(openedWindows.value)}</p>
          </div>
      </Rnd>
    )
}
