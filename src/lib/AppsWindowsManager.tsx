import { activeWindow, openedWindows } from "../Signals";
import apps from "../apps/Apps";
import AppWindowHandler from "./AppWindowHandler";

export function openApp(app:App) {
  // @ts-ignore
  if (openedWindows.value.includes(apps.indexOf(app))) {
    activeWindow.value = apps.indexOf(app);
    return;
  };
  // @ts-ignore
  openedWindows.value = [...openedWindows.value, apps.indexOf(app)];
  activeWindow.value = apps.indexOf(app);
}

export default function AppsWindowsManager() {
  return (
    <>
      {openedWindows.value.map((appIndex) => {
        const app = apps[appIndex];
        return <AppWindowHandler key={appIndex} app={app}/>
      })}
    </>
  )
}
