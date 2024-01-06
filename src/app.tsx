import { Suspense, lazy } from "preact/compat";
import BootScreen from "./BootScreen";
const Desktop = lazy(() => import("./Desktop"));
const BatteryHelper = lazy(() => import("./BatteryHelper"));
import('./style/font.css');


export function App() {

  return (<>
    <Suspense fallback={<></>}>
      <BatteryHelper/>
    </Suspense>
    <Suspense fallback={<BootScreen status={1}/>}>
      <Desktop/>
    </Suspense>
  </>)
}
