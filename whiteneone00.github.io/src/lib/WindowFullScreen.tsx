import {Animated} from "react-animated-css";
import { useEffect, useState } from "preact/hooks";
import { activeWindow, isAppFullscreen, openedWindows } from "../Signals";
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
    }, 200);
  }

  useEffect(() => {
    isAppFullscreen.value = true;
    return () => {
      isAppFullscreen.value = false;
    }
  }, []);
  return (
    <div>
        {/* @ts-ignore */}
        <Animated animationIn="zoomIn" animationOut="zoomOut" animationInDuration={200} animationOutDuration={200} isVisible={windowVisible}>
          <div class='flex flex-col bg-white rounded-xl shadow-xl w-screen h-screen'>
            {props.app.window.showTitle !== false ?
              <div className={`flex flex-row justify-between p-2 border-b-[1px] border-white/20 handle ${props.app.window.transparentTitleBar ? 'absolute top-0 w-full' : 'bg-zinc-800'}`}>
                  <div class='flex gap-2 items-center'>
                    <img src={props.app.icon} class='w-5 h-5'/>
                    <p className='text-white'>{props.app.window.title}</p>
                  </div>
                  <div className='flex flex-row gap-2 items-center'>
                    {props.app.window.minimizable ? <div className='bg-green-500 hover:bg-green-300 transition rounded-full h-4 w-4 md:h-3 md:w-3 hidden md:block'/> : <div className='bg-green-500/20 rounded-full h-4 w-4 md:h-3 md:w-3 cursor-not-allowed'/>}
                    {props.app.window.maximizable ? <button className='bg-yellow-500 hover:bg-yellow-300 transition rounded-full h-4 w-4 md:h-3 md:w-3 hidden md:block' onClick={props.toggleFullScreen}/> : <div className='bg-yellow-500/20 rounded-full h-4 w-4 md:h-3 md:w-3 cursor-not-allowed'/>}
                    <button className='bg-red-500 rounded-full h-4 w-4 md:h-3 md:w-3' onClick={() => {closeWindow()}}/> 
                  </div>
              </div>
            : null}
            <div class='w-full h-full rounded-b-md'>
              <Content/>
            </div>
          </div>
        </Animated>
    </div>
  )
}
