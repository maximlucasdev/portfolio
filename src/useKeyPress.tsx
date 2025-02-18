import { useEffect, useState } from "preact/hooks";

export function useKeyPress(targetKey: string) {
  const [isKeyPressed, setIsKeyPressed] = useState(false);
  const [lastPress, setLastPress] = useState(Date.now());

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === targetKey && Date.now() + 500 > lastPress) {
        setIsKeyPressed(true);
        setLastPress(Date.now());
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        setIsKeyPressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [targetKey]);

  return isKeyPressed;
}
