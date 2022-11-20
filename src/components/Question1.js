import React from 'react'
import PicQ1 from '../assets/FotoVraag1.jpg';
const Question1 = () => {
  return (
    <div class="flex justify-center items-center p-4 md:p-24 ">
      <div class="container bg-[#343232] rounded-lg w-1/2">
        <div class="text-container text-4xl  bg-[#767474] rounded-lg text-white pb-24 pt-4 ">
          <p>Hoe was uw ervaring met VR-World Breda over het algemeen?</p>
        </div>

        <div class="Form-Container flex flex-row pt-20 pb-8 gap-60 pl-10">
        <div class="text-white text-3xl">
          <label>Goed</label>
        <input type="radio" value="Goed" name="Vraag1" class="w-5 h-5 m-2"/>
        </div>
        <div class="text-white text-3xl">
        <label>Slecht</label>
        <input type="radio" value="Goed" name="Vraag1" class="w-5 h-5 m-2"/>
        </div>
        </div>

        <div class="Form-Container flex flex-col lg:flex lg:flex-row gap-72  ">
        <div class="text-white text-3xl">
        <label>Vreselijk</label>
        <input type="radio" value="Goed" name="Vraag1" class="w-5 h-5 m-2"/>
        </div>
        <div class="text-black text-2xl">
        <input type="text-area" placeholder="Iets anders/Toevoeging" name="Vraag1" class="pb-12 rounded-lg " />
        </div>
       
      
        </div>
        <div class="flex flex-col justify-center items-center"><img src={PicQ1} class="h-64 w-168  m-8 border-4 "></img>
        </div>
        
</div>
</div>


  )
}

export default Question1