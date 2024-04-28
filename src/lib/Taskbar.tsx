import { useEffect, useState } from "preact/hooks";
import TaskbarAppElement from "./TaskbarAppElement";
import Apps from "../apps/Apps";
import { activeWindow, isAppFullscreen, openedWindows, pepsimode } from "../Signals";
import { Animated } from "react-animated-css";

export default function Taskbar() {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        if (activeWindow.value >= 0 && window.innerWidth < 768 || isAppFullscreen.value) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    }, [activeWindow.value, isAppFullscreen.value]);
  return (
    <Animated animationIn={"slideInUp"} animationOut={"slideOutDown"} isVisible={visible}>
        <div class='md:p-5 w-full flex items-center justify-center'>
            <div class='flex md:rounded-md justify-between flex-row backdrop-blur-2xl border-[1px] border-white/10 bg-white/5 items-center h-16 px-10'>
                <div class='flex flex-row items-center w-full justify-center'>
                    {openedWindows.value.map((appid) => {
                        // Show left hidden apps that might get opened
                        const app = Apps[appid];
                        if (app.hide) return <TaskbarAppElement app={app}/>
                    })}
                    {Apps.map((app) => {
                      if (app.name === "Pepsi" && !pepsimode.value) return null;
                      if (app.hide) return null;
                      return <TaskbarAppElement app={app}/>
                    })}
                </div>
            </div>
        </div>
    </Animated>
  )
}
