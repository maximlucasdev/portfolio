import { Animated } from "react-animated-css";
import t from "../../i18n/i18n";
import { openApp } from "../../lib/AppsWindowsManager";
import apps from "../Apps";

export default function AboutMe() {
  return (
    <div class="rounded-md h-full w-full bg-gray-700">
      <div class="p-10 rounded-md gap-5 text-center text-white w-full h-full flex flex-col pt-20 items-center justify-center">
        <Animated
          animationIn="fadeInDown"
          animationOut="fadeOut"
          isVisible={true}
          animationInDuration={1000}
        >
          <h1 class="text-4xl font-bold">
            <span class="font-bold ">Hey!</span>{" "}
            {t("app.aboutme.content.title")}
            <span class="gradient-text">Maxim</span>.
          </h1>
          <p>{t("app.aboutme.content.subtitle")}</p>
        </Animated>

        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          isVisible={true}
          animationInDuration={2000}
          animationInDelay={500}
        >
          <p class="max-w-2xl">{t("app.aboutme.content.desc")}</p>
        </Animated>

        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          className="flex gap-2"
          isVisible={true}
          animationInDuration={2000}
          animationInDelay={1000}
        >
          <button
            class="bg-blue-600 shadow p-2 rounded-md hover:bg-blue-500 transition"
            onClick={() =>
              openApp(apps.find((x) => x.name === t("app.skills"))!)
            }
          >
            {t("app.aboutme.content.btn")}
          </button>

          <button
            class="bg-blue-600 shadow p-2 rounded-md hover:bg-blue-500 transition"
            onClick={() =>
              openApp(apps.find((x) => x.name === t("app.projects"))!)
            }
          >
            {t("app.aboutme.content.btn2")}
          </button>
        </Animated>
      </div>
    </div>
  );
}
