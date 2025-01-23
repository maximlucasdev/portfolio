// Spinner used for terminal commands that needs it

import { useEffect, useState } from "react"

const spinner = ["⠋","⠙","⠹","⠸","⠼","⠴","⠦","⠧","⠇","⠏"]

export default function Spinner() {
    const [frame, setFrame] = useState(0);

    async function nextFrame() {
        if (frame >= spinner.length-1) setFrame(0);
        else setFrame(frame + 1);
    }

    useEffect(() => {
        let x = setTimeout(() => {nextFrame()}, 50);

        return () => clearTimeout(x);
    }, [frame]);

    return (
        <span>{spinner[frame]}</span>
    )
}
