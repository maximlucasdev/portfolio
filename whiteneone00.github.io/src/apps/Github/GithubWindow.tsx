import t from "../../i18n/i18n";

export default function GithubWindow() {
  return (
    <div class='bg-zinc-700 flex flex-col items-center justify-center h-full w-full rounded-b-md'>
        <img src='/apps/github.png' class='w-[100px] mb-4' alt='Github logo' />
        <p class='text-white text-2xl mb-4'>{t("app.github.content.title")}</p>
        <a href='https://github.com/shadowdevfr' class='text-gray-400 hover:text-white text-2xl mb-4 hover:scale-105 transition' target='_blank'>github.com/shadowdevfr</a>
    </div>
  )
}
