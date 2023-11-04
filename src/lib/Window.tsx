import { Rnd } from "react-rnd";
import {Animated} from "react-animated-css";
import { useState } from "preact/hooks";
import { activeWindow, openedWindows } from "../Signals";
import Apps from "../apps/Apps";

export default function Window(props:{app:App,toggleFullScreen: () => void}) {
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

  return (
    <div>
        {/* @ts-ignore */}
        <Animated animationIn="zoomIn" animationOut="zoomOut" animationInDuration={200} animationOutDuration={200} isVisible={windowVisible}>
          {/* @ts-ignore */}
          <Rnd
            default={{
              x: props.app.window.centerScreen ? (window.innerWidth - props.app.window.width - 80) / 2 : openedWindows.value.length * 20,
              y: props.app.window.centerScreen ? (window.innerHeight - props.app.window.height - 80) / 2 : openedWindows.value.length * 20,
              width: props.app.window.width,
              height: props.app.window.height,
            }}
            enableResizing={props.app.window.resizable}
            minWidth={500}
            minHeight={200}
            bounds="window"
            dragHandleClassName='handle'
            onClick={() => {activeWindow.value = Apps.indexOf(props.app)}}
            onDrag={() => {activeWindow.value = Apps.indexOf(props.app)}}
            onResize={() => {activeWindow.value = Apps.indexOf(props.app)}}
          >
              <div class='flex flex-col shadow-xl w-full h-full relative'>
                {props.app.window.showTitle !== false ?
                  <div className={`flex h-11 flex-row justify-between z-50 p-2 border-b-[1px] w-full absolute rounded-t-md border-white/10 handle ${props.app.window.transparentTitleBar ? 'absolute top-0 w-full' : 'bg-zinc-800'}`}>
                      <div class='flex gap-2 items-center'>
                        <img src={props.app.icon} class='w-5 h-5'/>
                        <p className='text-white'>{props.app.window.title}</p>
                      </div>
                      <div className='flex flex-row gap-2 items-center'>
                        {props.app.window.minimizable ? <div className='bg-green-500 hover:bg-green-300 transition rounded-full h-3 w-3'/> : <div className='bg-green-500/20 rounded-full h-3 w-3 cursor-not-allowed'/>}
                        {props.app.window.maximizable ? <button className='bg-yellow-500 hover:bg-yellow-300 transition rounded-full h-3 w-3' onClick={props.toggleFullScreen}/> : <div className='bg-yellow-500/20 rounded-full h-3 w-3 cursor-not-allowed'/>}
                        <button className='bg-red-500 hover:bg-red-300 transition rounded-full h-3 w-3' onClick={() => {closeWindow()}}/> 
                      </div>
                  </div>
                : null}
                <div class={`w-full h-full rounded-md ${props.app.window.transparentTitleBar ? 'pt-0' : 'pt-11'}`}>
                  <Content/>
                </div>
              </div>
          </Rnd>
        </Animated>
    </div>
  )
}
