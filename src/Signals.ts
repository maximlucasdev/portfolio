import { signal } from "@preact/signals";

const navlen = navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage);

const openedWindows = signal([]);
const activeWindow = signal(-1);
const wallpaper = signal(localStorage.getItem("wallpaper") || "1.webp");
const pepsimode = signal(false);
const isAppFullscreen = signal(false);
const language = signal(localStorage.getItem("language") ? localStorage.getItem("language") : navlen == 'fr' ? 'fr' : 'en')

export {openedWindows, activeWindow, wallpaper, pepsimode, isAppFullscreen,language}