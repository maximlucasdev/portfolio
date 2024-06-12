import t from "../../i18n/i18n";

export default function GithubWindow() {
  return (
    <div class='flex flex-col items-center justify-center h-full w-full rounded-b-md text-center'>
        <img src='/apps/github.png' class='w-[100px] mb-4' alt='Github logo' />
        <p class='text-white text-2xl mb-4'>{t("app.github.content.title")}</p>
        <p class='text-white text-lg mb-4'>{t("app.github.content.subtitle")}</p>
        <a href='https://github.com/shadowdevfr' class='gradient-text font-bold text-2xl mb-4 hover:scale-105 transition' target='_blank'>github.com/shadowdevfr</a>
    </div>
  )
}
