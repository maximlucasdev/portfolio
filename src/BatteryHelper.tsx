// Battery helper

import { useEffect } from "preact/hooks"
import { batterySignal } from "./Signals";
import { mdiBattery, mdiBattery10, mdiBattery20, mdiBattery30, mdiBattery40, mdiBattery50, mdiBattery60, mdiBattery70, mdiBattery80, mdiBattery90, mdiBatteryCharging, mdiBatteryCharging10, mdiBatteryCharging20, mdiBatteryCharging30, mdiBatteryCharging40, mdiBatteryCharging50, mdiBatteryCharging60, mdiBatteryCharging70, mdiBatteryCharging80, mdiBatteryCharging90 } from "@mdi/js";

export const batteryIconFromLevel = (level: number, charging: boolean) => {
  if (charging) {
    if (level <= 10) return mdiBatteryCharging10;
    else if (level <= 20) return mdiBatteryCharging20;
    else if (level <= 30) return mdiBatteryCharging30;
    else if (level <= 40) return mdiBatteryCharging40;
    else if (level <= 50) return mdiBatteryCharging50;
    else if (level <= 60) return mdiBatteryCharging60;
    else if (level <= 70) return mdiBatteryCharging70;
    else if (level <= 80) return mdiBatteryCharging80;
    else if (level <= 90) return mdiBatteryCharging90;
    else if (level <= 100) return mdiBatteryCharging;
  } else {
    if (level <= 10) return mdiBattery10;
    else if (level <= 20) return mdiBattery20;
    else if (level <= 30) return mdiBattery30;
    else if (level <= 40) return mdiBattery40;
    else if (level <= 50) return mdiBattery50;
    else if (level <= 60) return mdiBattery60;
    else if (level <= 70) return mdiBattery70;
    else if (level <= 80) return mdiBattery80;
    else if (level <= 90) return mdiBattery90;
    else if (level <= 100) return mdiBattery;
  }
}

export const fromSeconds = (seconds:number) => {
  seconds = Number(seconds);
  const d = Math.floor(seconds / (3600*24));
  const h = Math.floor(seconds % (3600*24) / 3600);
  const m = Math.floor(seconds % 3600 / 60);
  const s = Math.floor(seconds % 60);
  
  const dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  const hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  const mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  const sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
  }

export default function BatteryHelper() {

  function updateAllBatteryInfo(battery: NavigatorBatteryStatus) {
    batterySignal.value = {charging: battery.charging, level: battery.level*100, chargingTime: battery.chargingTime, dischargingTime: battery.dischargingTime};
  }
    useEffect(() => {
      try {
        // @ts-ignore
        navigator.getBattery().then((battery: any) => {
          updateAllBatteryInfo(battery);
          battery.addEventListener("chargingchange", () => updateAllBatteryInfo(battery));
          battery.addEventListener("levelchange", () => updateAllBatteryInfo(battery));
          battery.addEventListener("chargingtimechange", () => updateAllBatteryInfo(battery));
          battery.addEventListener("dischargingtimechange", () => updateAllBatteryInfo(battery));
        });
        return () => {
          // @ts-ignore
          navigator.getBattery().then((battery: any) => {
            battery.removeEventListener("chargingchange", () => updateAllBatteryInfo(battery));
            battery.removeEventListener("levelchange", () => updateAllBatteryInfo(battery));
            battery.removeEventListener("chargingtimechange", () => updateAllBatteryInfo(battery));
            battery.removeEventListener("dischargingtimechange", () => updateAllBatteryInfo(battery));
          });
        }
      } catch (error: any) {
        console.log("Could not load the navigator battery api (probably because on firefox)");
      }
    }, []);
  return (<></>)
}
