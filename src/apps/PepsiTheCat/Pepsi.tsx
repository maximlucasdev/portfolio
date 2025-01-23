import { useState, useEffect } from "preact/hooks";

export default function Pepsi() {
    const [pepsiPicture, setPepsiPicture] = useState('#')
    const newpicture = () => {
        fetch('https://api.pepsi.xshadow.xyz/pic')
            .then(res => res.json())
            .then(data => {
                setPepsiPicture(data.url)
            })
    }
    useEffect(() => {
        newpicture();
    }, [])
    return (
      <button class='flex flex-col justify-center items-center w-full h-full bg-contain bg-center bg-no-repeat rounded-b-md' style={{backgroundImage: `url("${pepsiPicture}")`}} onClick={() => {
        newpicture();
      }}/>
    )
}
