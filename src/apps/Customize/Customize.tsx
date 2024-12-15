import { wallpaper } from "../../Signals";

const wallpapers = ["1.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp", "8.webp", "9.webp", "10.webp", "11.webp", "12.webp"];
export default function Customize() {
  return (
    <div class='w-full h-full bg-white flex flex-col gap-2 items-center p-5 rounded-b-md'>
        <div class='h-96 w-full md:w-96 bg-center bg-contain bg-no-repeat rounded-md' style={{backgroundImage:`url("/wallpaperapp/computer.png")`}}>
          <img src={`/wallpapers/${wallpaper.value}`} class="w-[217px] h-[158px] mt-[21.5px] ml-[82px]"/>
        </div>
        <div class='flex flex-col z-20 items-center justify-center overflow-y-scroll h-full'>
            {wallpapers.map((wp) => {
                return <button class='w-72 bg-center bg-cover bg-no-repeat rounded-md border-2 border-black/0 transition flex items-center gap-1' onClick={() => {
                  wallpaper.value = wp;
                  localStorage.setItem("wallpaper", wp);
                }}>
                  <img src="/wallpaperapp/wallpaper.png" class="w-5 h-5"/>
                  <p class="hover:bg-blue-800 hover:text-white">Wallpaper {wp}</p>
                </button>
            })}
        </div>
        <p class='text-gray-400 text-xs text-center mb-8 md:mb-0'>Wallpapers by <a href="https://unsplash.com/@orwhat" target="_blank" class='hover:text-white transition'>Richard Horvath</a> & <a href="https://unsplash.com/@fakurian" target="_blank" class='hover:text-white transition'>Milad Fakurian</a> on Unsplash</p>
    </div>
  )
}
