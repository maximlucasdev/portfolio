import { useEffect, useState } from "preact/hooks";
import { useKeyPress } from "../useKeyPress";

import("../style/biosfont.css");

const BOOT_OPTIONS = [
  { name: "PortfoliOS - Modern theme", link: "https://maximlucas.dev" },
  { name: "PortfoliOS - XP theme", link: "https://xp.maximlucas.dev" },
];

export default function NoOperatingSystem() {
  const [activeOptionIndex, setActiveOptionIndex] = useState(0);
  const isArrowUpPressed = useKeyPress("ArrowUp");
  const isArrowDownPressed = useKeyPress("ArrowDown");
  const isEnterPressed = useKeyPress("Enter");

  useEffect(() => {
    if (isArrowDownPressed && activeOptionIndex < BOOT_OPTIONS.length - 1) {
      setActiveOptionIndex(activeOptionIndex + 1);
    }
    if (isArrowUpPressed && activeOptionIndex > 0) {
      setActiveOptionIndex(activeOptionIndex - 1);
    }
    if (isEnterPressed) {
      window.location.href = BOOT_OPTIONS[activeOptionIndex].link;
    }
  }, [isArrowUpPressed, isArrowDownPressed, isEnterPressed]);

  return (
    <div class="absolute top-0 z-50 flex flex-col left-0 gap-5 bg-black text-white biosfont w-full h-screen items-center">
      <p class="p-5 text-2xl text-center">GNU GRUB version 2.06</p>
      <div class="border-white border-2 w-[90%] p-3 flex flex-col items-start text-start min-h-96">
        {BOOT_OPTIONS.map((option, i) => {
          return (
            <p
              class={`text-2xl w-full ${
                i == activeOptionIndex ? "bg-white text-black" : " "
              }`}
            >
              <span class={i != activeOptionIndex ? "invisible" : ""}>* </span>
              {option.name}
            </p>
          );
        })}
      </div>
      <div class="flex flex-col text-start opacity-50">
        <p>Use the ↑ and ↓ keys to select which entry is highlighted.</p>
        <p>Press enter to boot the selected OS, `e` to edit the commands</p>
        <p>before booting or `c` for a command-line.</p>
      </div>
    </div>
  );
}
