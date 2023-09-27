import { Suspense, lazy } from "preact/compat";
import BootScreen from "./BootScreen";
const Desktop = lazy(() => import("./Desktop"));
import('./style/font.css');


export function App() {
  return (
    <Suspense fallback={<BootScreen status={1}/>}>
      <Desktop/>
    </Suspense>
  )
}
