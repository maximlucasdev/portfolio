import { Suspense, lazy } from "preact/compat";
import Apps from './apps/Apps';
import { useFloating } from "@floating-ui/react";
import { useState, useEffect } from "preact/hooks";
import { isAppFullscreen, pepsimode, wallpaper } from "./Signals"
const DesktopContextMenu = lazy(() => import("./lib/DesktopContextMenu"));
const AppsWindowsManager = lazy(() => import("./lib/AppsWindowsManager"));
const Taskbar =  lazy(() => import("./lib/Taskbar"));
import WelcomePopup from "./lib/WelcomePopup";
import BootScreen from "./BootScreen";
import { Animated } from "react-animated-css";
import('./style/animate.min.css');
const DesktopAppIcon = lazy(() => import("./lib/DesktopAppIcon"));
export default function Desktop() {
    const [showWelcome, setShowWelcome] = useState(false);
    const [wpReady, setWpReady] = useState(false);
    const { refs, floatingStyles } = useFloating({placement: 'top'});
    const [showContextMenu, setShowContextMenu] = useState(false);
    const [pointerPosition, setPointerPosition] = useState({x: 0, y: 0})

    useEffect(() => {
        // Preload wallpaper
        const img = new Image()
        img.src = `/wallpapers/${wallpaper.value}`;
        img.onload = () => setWpReady(true)
        if (wpReady) {
          setTimeout(async () => {
            if (localStorage.getItem('hideWelcome') === 'true') return;
            setShowWelcome(true)
          }, 1000);
        }
    }, [wpReady]);

    return (
      <>
        {!wpReady ? <BootScreen status={2}/> : <></>}
        {showContextMenu ? <Suspense fallback={<></>}><DesktopContextMenu x={pointerPosition.x} y={pointerPosition.y} hide={() => setShowContextMenu(false)} /></Suspense> : null}
        <div class='w-full h-screen flex flex-col bg-blue-800 bg-cover bg-center bg-no-repeat' style={{backgroundImage: wpReady ? `url("/wallpapers/${wallpaper.value}")` : ''}} onContextMenu={(e) => {
          e.preventDefault();
          setPointerPosition({x: e.clientX, y: e.clientY})
          setShowContextMenu(true);
        }} 
        onClick={() => {
          setShowContextMenu(false);
        }}>
            <Suspense fallback={<></>}><AppsWindowsManager/></Suspense>
            <div class='flex flex-col h-full flex-wrap content-start gap-2 p-2 md:p-5 w-screen'>
                {Apps.map((app) => {
                  if (app.name === "Pepsi" && !pepsimode.value) return null;
                  if (app.hide) return null;
                  return <Suspense fallback={<></>}><DesktopAppIcon app={app} /></Suspense>
                })}
            </div>
            {showWelcome ? (<div ref={refs.setFloating} style={floatingStyles}><WelcomePopup hide={() => {setShowWelcome(false)}}/></div>) : null}
            {/* @ts-ignore */}
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={!isAppFullscreen.value}>
              <p class='absolute bottom-12 md:bottom-24 right-0 text-xs pr-2 pb-2 md:pb-0 md:pr-10 md:text-sm text-end text-white opacity-20'>© {new Date().getFullYear()} <a href='https://github.com/shadowdevfr' class='hover:opacity-50 transition' target='_blank'> Maxim Lucas</a> {pepsimode.value ? ' - 🐈 Pepsi Mode' : ''}</p>
            </Animated>
            <div ref={refs.setReference} class='fixed bottom-0 w-screen'>
              <Suspense fallback={<></>}><Taskbar/></Suspense>
            </div>
        </div>
      </>
    )
}
