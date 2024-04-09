import {Animated} from "react-animated-css";
import { useEffect, useState } from "preact/hooks";
import { activeWindow, isAppFullscreen, openedWindows, wallpaper } from "../Signals";
import Apps from "../apps/Apps";

export default function WindowFullScreen(props:{app:App,toggleFullScreen: () => void}) {
  const [windowVisible, setWindowVisible] = useState(true);
  const Content = props.app.component;
  function closeWindow() {
    setWindowVisible(false);
    setTimeout(() => {
      activeWindow.value = -1;
      openedWindows.value = openedWindows.value.filter((appid) => {
        return appid != Apps.indexOf(props.app);
      });
    }, 50);
  }

  useEffect(() => {
    isAppFullscreen.value = true;
    return () => {
      isAppFullscreen.value = false;
    }
  }, []);
  return (
    <div>
        <Animated animationIn="zoomIn" animationOut="zoomOut" animationInDuration={200} animationOutDuration={200} isVisible={windowVisible}>
          <div class='flex flex-col bg-white shadow-xl w-screen h-screen bg-cover bg-center' style={{backgroundImage:`url("/wallpapers/${wallpaper.value}")`}}>
            {props.app.window.showTitle !== false ?
              <div className={`flex h-9 flex-row justify-between z-50 p-2 w-full absolute rounded-t-md handle ${props.app.window.transparentTitleBar ? 'absolute top-0 w-full' : ''}`}>
                  <div class='flex gap-2 items-center'>
                    <img src={props.app.icon} class='w-5 h-5'/>
                    <p className='text-white'>{props.app.window.title}</p>
                  </div>
                  <div className='flex flex-row gap-2 items-center'>
                    <div className='bg-green-500/20 rounded-full h-3 w-3 cursor-not-allowed'/>
                    {props.app.window.maximizable ? <button className='bg-yellow-500 hover:bg-yellow-300 transition rounded-full h-3 w-3' onClick={props.toggleFullScreen}/> : <div className='bg-yellow-500/20 rounded-full h-3 w-3 cursor-not-allowed'/>}
                    <button className='bg-red-500 hover:bg-red-300 transition rounded-full h-3 w-3' onClick={() => {closeWindow()}}/> 
                  </div>
              </div>
            : null}
            <div class={`w-full h-full rounded-b-md ${props.app.window.fillTitlebar ? 'bg-zinc-800' : 'backdrop-blur-3xl bg-white/10'} ${props.app.window.transparentTitleBar ? 'pt-0' : 'pt-9'}`}>
              <Content/>
            </div>
          </div>
        </Animated>
    </div>
  )
}
