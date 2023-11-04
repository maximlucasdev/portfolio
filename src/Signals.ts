import { signal } from "@preact/signals";

const openedWindows = signal([]);
const activeWindow = signal(-1);
const wallpaper = signal(localStorage.getItem("wallpaper") || "1.webp");
const pepsimode = signal(false);
const isAppFullscreen = signal(false);
const language = signal(localStorage.getItem("language") ? localStorage.getItem("language") : window.location.hostname == 'maximlucas.dev' ? 'fr' : 'en')
const notifications = signal<NotificationContent[]>([{
    title: "Welcome to my website!",
    description: "I hope you'll enjoy your stay!",
    icon: "https://maximlucas.dev/logo.png",
    date: new Date()
}]);

export {openedWindows, activeWindow, wallpaper, pepsimode, isAppFullscreen, language, notifications}