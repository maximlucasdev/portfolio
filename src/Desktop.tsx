import { Suspense, lazy } from "preact/compat";
import Apps from './apps/Apps';
import { useFloating } from "@floating-ui/react";
import { useState, useEffect } from "preact/hooks";
import { isAppFullscreen, noOs, pepsimode, wallpaper } from "./Signals"
const DesktopContextMenu = lazy(() => import("./lib/DesktopContextMenu"));
const AppsWindowsManager = lazy(() => import("./lib/AppsWindowsManager"));
const Taskbar =  lazy(() => import("./lib/Taskbar"));
import WelcomePopup from "./lib/WelcomePopup";
import BootScreen from "./BootScreen";
import { Animated } from "react-animated-css";
import NoOperatingSystem from "./lib/NoOperatingSystem";
import('./style/animate.min.css');
import('./style/animate.min.css');
const DesktopAppIcon = lazy(() => import("./lib/DesktopAppIcon"));
export default function Desktop() {
    const [showWelcome, setShowWelcome] = useState(false);
    const [wpReady, setWpReady] = useState(false);
    const [showNoOs, setShowNoOs] = useState(false);
    const { refs, floatingStyles } = useFloating({placement: 'top'});
    const [showContextMenu, setShowContextMenu] = useState(false);
    const [pointerPosition, setPointerPosition] = useState({x: 0, y: 0})
    const [selectionProperties, setSelectionProperties] = useState({x: 0, y: 0, x1:0, y1:0, dragging: false})
    useEffect(() => {
        // Preload wallpaper
        const img = new Image()
        img.src = `/wallpapers/${wallpaper.value}`;
        img.onload = () => setWpReady(true)
        setShowNoOs(noOs.value);
        if (wpReady) {
          setTimeout(async () => {
            if (localStorage.getItem('hideWelcome') === 'true') return;
            setShowWelcome(true)
          }, 1000);
        }
    }, [wpReady, noOs.value]);

    return (
      <>
        {!wpReady ? <BootScreen status={2}/> : <></>}
        {showNoOs ? <NoOperatingSystem/> : <></>}
        {showContextMenu ? <Suspense fallback={<></>}><DesktopContextMenu x={pointerPosition.x} y={pointerPosition.y} hide={() => setShowContextMenu(false)} /></Suspense> : null}
        <div class='w-full h-screen flex flex-col bg-blue-800 bg-cover bg-center bg-no-repeat' style={{backgroundImage: wpReady ? `url("/wallpapers/${wallpaper.value}")` : ''}} onContextMenu={(e) => {
          e.preventDefault();
          setPointerPosition({x: e.clientX, y: e.clientY})
          setShowContextMenu(true);
        }} 
        onMouseDown={(e) => {
          e.preventDefault();
          setSelectionProperties({x: e.clientX, y: e.clientY, x1: e.clientX, y1:e.clientY, dragging: true})
        }}
        onMouseUp={() => {
          setSelectionProperties({...selectionProperties, dragging: false})
        }}
        onMouseMove={(e) => {
          if (!selectionProperties.dragging) return;
          setSelectionProperties({...selectionProperties, x1: e.clientX, y1: e.clientY, dragging: true})
        }}
        onClick={() => {
          setShowContextMenu(false);
        }}>
            <div class='bg-blue-500/30 absolute border-[1px] border-blue-500' style={
              {top: selectionProperties.y < selectionProperties.y1 ? selectionProperties.y : selectionProperties.y1, left:selectionProperties.x < selectionProperties.x1 ? selectionProperties.x : selectionProperties.x1, width: selectionProperties.x < selectionProperties.x1 ? selectionProperties.x1 - selectionProperties.x : selectionProperties.x - selectionProperties.x1, height:selectionProperties.y < selectionProperties.y1 ? selectionProperties.y1 - selectionProperties.y : selectionProperties.y - selectionProperties.y1, visibility: selectionProperties.dragging ? 'visible' : 'hidden'}
            }></div>
            <Suspense fallback={<></>}><AppsWindowsManager/></Suspense>
            <div class='flex flex-col h-full flex-wrap gap-2 p-2 md:p-5 w-screen content-start'>
                {Apps.map((app) => {
                  if (app.name === "Pepsi" && !pepsimode.value) return null;
                  if (app.hide) return null;
                  return <Suspense fallback={<></>}><DesktopAppIcon app={app} /></Suspense>
                })}
            </div>
            {showWelcome ? (<div ref={refs.setFloating} style={floatingStyles}><WelcomePopup hide={() => {setShowWelcome(false)}}/></div>) : null}
            {/* @ts-ignore */}
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={5000} isVisible={!isAppFullscreen.value}>
              <p class='absolute bottom-12 md:bottom-24 right-0 text-xs pr-2 pb-2 md:pb-0 md:pr-10 md:text-sm text-end text-white opacity-20'>© {new Date().getFullYear()} <a href='https://github.com/shadowdevfr' class='hover:opacity-50 transition' target='_blank'> Maxim Lucas</a> {pepsimode.value ? <span class='text-xl'><br/>🐈 Pepsi Mode</span> : ''}</p>
            </Animated>
            <div ref={refs.setReference} class='fixed bottom-0 w-screen'>
              <Suspense fallback={<></>}><Taskbar/></Suspense>
            </div>
        </div>
      </>
    )
}
