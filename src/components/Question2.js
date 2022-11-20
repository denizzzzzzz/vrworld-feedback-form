import React from 'react'
import Question2Pic from '../assets/FotoVraag2.jfif'

function Question2() {
  return (
    <div>
       <div className='text-white text-2xl grid  grid-cols-4 grid-rows-2 gap-4'>
    <label >Veel variatie</label>
    <input type="radio" className='w-5 h-10 '/>
    <label>Genoeg variatie</label>
    <input type="radio" className='w-5 h-10 '/>
    <label>Te weinig variatie</label>
    <input type="radio" className='w-5 h-10 '/>
    <label>Anders</label>
    <input type="text" className='text-black w-40'/>
    
</div>
<div class="flex flex-col justify-center items-center">
        <img src={Question2Pic} class="w-96 rounded-full mb-4 mt-4 border-solid border-8 border-black "></img>
</div>  
</div>
  )
}

export default Question2