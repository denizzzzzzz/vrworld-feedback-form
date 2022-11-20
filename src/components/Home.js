import React from 'react'
import VrworldLogo from '../assets/HomeLogo.png';


const Home = () => {
  return (
    <div class="flex flex-col justify-center items-center p-4 md:p-24 ">
    <h1 class= "HomeTitle text-5xl text-white pb-10 pt-4 md:text-7xl lg:text-8xl lg:pt-8">Deel uw ervaring.</h1>
      <div class="container bg-[#343232] rounded-lg lg:w-max">
        <div class="text-container bg-[#767474] rounded-lg text-white md:text-2xl md:max-w lg:text-2xl lg:pb-2 lg:max-w ">
          <p>Welkom, met de knop hieronder kunt u door middel van een paar vragen</p><p>uw ervaring over VR-World met ons delen.</p> 
          <p>Want uw mening telt!</p>
        </div>
        <button class="hover:bg-[#85550E]  relative bg-black rounded-lg text-white p-6 mt-4 md:text-2xl lg:text-xl lg:pb-8 lg:p-2 " >
        <a href='/Vraag1'>Klik hier om uw ervaring te delen</a>
        <div class="absolute bottom-0 right-0  bg-[#d9d9d962] rounded-lg text-[#ffffffc1] ">
            <p class="text-sm">Geschatte tijd 3 min</p>
        </div>
        </button>
        <div class="flex flex-col justify-center items-center">
        <img src={VrworldLogo} class="h-32 mb-4 mt-4 md:h-60 md:mb-8 md:mt-8 lg:h-72"></img>
</div>
      </div>
    </div>
  )
}

export default Home