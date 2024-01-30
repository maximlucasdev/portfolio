import { mdiEthernet, mdiWifi } from "@mdi/js";
import { Animated } from "react-animated-css";
import { Icon } from '@mdi/react';
import t from "../i18n/i18n";
import { batterySignal } from "../Signals";
import { batteryIconFromLevel, fromSeconds } from "../BatteryHelper";



export default function TaskbarSettingsPopup() {
  return (
    // @ts-ignore
    <Animated animationIn="slideInUp" animationInDuration={200} visible={true}>
      <div class='flex flex-col rounded-md h-max w-44 mb-5 bg-stone-700/20 border-white/10 md:border-[1px] backdrop-blur-sm'>
        <div class='flex flex-row items-center gap-2 p-3 border-b-[1px] border-white/10 text-white text-sm'>
          <Icon path={batteryIconFromLevel(batterySignal.value.level, batterySignal.value.charging)} horizontal size={0.8}/>
          <p>{batterySignal.value.level}%</p>
          <p class='text-gray-400'>•</p>
          <p class='font-thin'>{batterySignal.value.dischargingTime === Infinity ? '∞' : fromSeconds(batterySignal.value.dischargingTime)} {t("taskbar.settings.left")}</p>
        </div>
        <div class='flex flex-row items-center gap-2 p-3 border-b-[1px] border-white/10 text-white text-sm'>
          <Icon path={mdiEthernet} horizontal size={0.8}/>
          <p>{t("taskbar.settings.connected")} <span class='text-xs text-gray-400 font-thin'>(10Gbps)</span></p>
        </div>
        <div class='flex flex-row items-center gap-2 p-3 text-white text-sm'>
          <Icon path={mdiWifi} horizontal size={0.8}/>
          <p>PepsiNet <span class='text-xs font-thin text-gray-400'>5Ghz</span></p>
        </div>
      </div>
    </Animated>
  )
}