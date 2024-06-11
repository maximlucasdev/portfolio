import { useState } from "react"
import Spinner from "../Terminal/Spinner";
import { Animated } from "react-animated-css";

export default function Fishsim() {
  const [loaded, setLoaded] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);

  return (
    <div class='w-full h-full bg-zinc-800 relative'>
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={showInstructions} animationInDuration={0} animationOutDuration={1000}>
        <div class='w-full h-full backdrop-blur-sm bg-black/80 absolute top-0 flex flex-col text-center p-20 gap-2 items-center justify-center text-white'>
          <p class='font-bold text-3xl'>Welcome to FishSim</p>
          <p>FishSim is a fish simulator, simulating their life, but also death, reproduction, food etc... This project carrying out random genetic mutations, it allows us to see natural selection (the fish which go the fastest will eat more, therefore will survive more, therefore will reproduce the most etc...)</p>
          <p class='font-bold text-xl'>Keybinds</p>
          <div class='flex gap-5 items-center flex-wrap'>
            <div class='flex items-center gap-2'>
              <div class='w-10 h-10 bg-white/20 flex items-center justify-center rounded-md'>D</div>
              <p>Kill some fish</p>
            </div>
            <div class='flex items-center gap-2'>
              <div class='w-10 h-10 bg-white/20 flex items-center justify-center rounded-md'>N</div>
              <p>Summon some fish</p>
            </div>
            <div class='flex items-center gap-2'>
              <div class='w-10 h-10 bg-white/20 flex items-center justify-center rounded-md'>+</div>
              <p>Force maximum framerate</p>
            </div>
            <div class='flex items-center gap-2'>
              <div class='w-10 h-10 bg-white/20 flex items-center justify-center rounded-md'>F3</div>
              <p>Hide HUD</p>
            </div>
            <div class='flex items-center gap-2'>
              <div class='w-24 h-10 bg-white/20 flex items-center justify-center rounded-md'>Right click</div>
              <p>Spawn some food</p>
            </div>
          </div>
          
          {!loaded ? <p class='mt-10 font-bold text-xl'><Spinner/> FishSim is loading...</p>
          : <button class='text-xl bg-white/20 hover:bg-white/50 shadow p-2 rounded-md transition mt-5' onClick={() => setShowInstructions(false)}>
            Let's go!
          </button>}
        </div>
      </Animated>
      <iframe src="https://fishsim.pages.dev" scrolling="no" height="100%" width="100%" onLoad={() => {
        setTimeout(() => {
          setLoaded(true); // added a timeout to make sure the pygame finished loading
        }, 3000);
      }}></iframe>
    </div>
  )
}
