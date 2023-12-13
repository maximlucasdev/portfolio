import { useState,useEffect } from "preact/hooks";
import apps from "../apps/Apps";
import Window from "./Window";
import { activeWindow } from "../Signals";
import WindowFullScreen from "./WindowFullScreen";

export default function AppWindowHandler(props:{app:App}) {
    const [isMobile, setIsMobile] = useState(false);
    const [fullScreen, setFullScreen] = useState(false);
    const handleResize = () => {
      if (window.innerWidth < 768) setIsMobile(true)
      else setIsMobile(false)
    }
    const toggleFullScreen = () => setFullScreen(!fullScreen);
    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize)
        return () => {
          window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
      <>
        {!isMobile && !fullScreen ?
            (<div class={`absolute ${activeWindow.value === apps.indexOf(props.app) ? 'z-40' : 'z-30'}`}><Window app={props.app} toggleFullScreen={toggleFullScreen}/></div>)
        :
          (<div class='absolute w-screen h-screen'><WindowFullScreen app={props.app} toggleFullScreen={toggleFullScreen}/></div>)
        }
      </>
    )
}
