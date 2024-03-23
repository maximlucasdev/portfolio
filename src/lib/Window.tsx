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
              <div class='flex flex-col shadow-xl w-full h-full relative theme-bg p-[2px] window'>
                {props.app.window.showTitle !== false ?
                  <div className={`theme-bg flex h-8 flex-row justify-between z-50 p-2 border-b-[1px] w-full absolute rounded-t-md border-white/10 handle ${props.app.window.transparentTitleBar ? 'absolute top-0 w-full' : 'bg-zinc-800'} title-bar`}>
                      <div class='flex gap-2 items-center'>
                        <img src={props.app.icon} class='w-5 h-5'/>
                        <p className='text-white trebuchet font-bold appfont'>{props.app.window.title}</p>
                      </div>
                      <div className='flex flex-row gap-1 items-center'>
                        {props.app.window.maximizable ? <button className='button-maximise' onClick={props.toggleFullScreen}/> : <></>}
                        <button className='button-close' onClick={() => {closeWindow()}}/> 
                      </div>
                  </div>
                : null}
                <div class={`w-full h-full p-[3px] pb-[1px] rounded-t-lg ${props.app.window.transparentTitleBar ? 'pt-0' : 'pt-8'}`}>
                  <Content/>
                </div>
              </div>
          </Rnd>
        </Animated>
    </div>
  )
}
