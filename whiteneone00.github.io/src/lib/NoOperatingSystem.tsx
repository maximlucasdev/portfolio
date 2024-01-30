import('../style/biosfont.css');
export default function NoOperatingSystem() {
  return (
    <div class='absolute top-0 z-50 flex flex-col left-0 gap-5 bg-black text-white biosfont w-full h-screen items-start'>
        <p class='p-5 text-3xl'>
            No operating system found<span class='blink font-bold'>_</span>
        </p>
    </div>
  )
}
