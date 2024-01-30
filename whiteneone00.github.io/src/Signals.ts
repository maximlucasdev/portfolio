import { signal } from "@preact/signals";

const openedWindows = signal([]);
const activeWindow = signal(-1);
const wallpaper = signal(localStorage.getItem("wallpaper") || "1.webp");
const pepsimode = signal(false);
const isAppFullscreen = signal(false);
const language = signal(localStorage.getItem("language") ? localStorage.getItem("language") : window.location.hostname == 'maximlucas.dev' ? 'fr' : 'en')
const noOs = signal(false);
const batterySignal = signal({charging: false, level: 0, chargingTime: 0, dischargingTime: 0});

export {openedWindows, activeWindow, wallpaper, pepsimode, isAppFullscreen, language, batterySignal, noOs}