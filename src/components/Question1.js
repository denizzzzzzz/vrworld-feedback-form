import React from 'react'
import PicQ1 from '../assets/FotoVraag1.jpg';
const Question1 = ({date, handleChange}) => {


  const content = (
    <div class="flex justify-center items-center p-4 md:p-24 ">
      <div class="container bg-[#343232] rounded-lg w-1/2">
        <div class="text-container text-4xl  bg-[#767474] rounded-lg text-white pb-24 pt-4 ">
          <p>Hoe was uw ervaring met VR-World Breda over het algemeen?</p>
        </div>

       
      
        </div>
        <div class="flex flex-col justify-center items-center"><img src={PicQ1} class="h-64 w-168  m-8 border-4 "></img>
        </div>
        
</div>


  )
}

export default Question1