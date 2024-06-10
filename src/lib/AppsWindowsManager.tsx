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
  setTimeout(() => {activeWindow.value = apps.indexOf(app);}, 0); // Without setTimeout, the window was not gaining focus, because the interaction on some windows caused a refocus

  // Umami
  // @ts-ignore
  umami.track(`Open ${app.name}`);
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
