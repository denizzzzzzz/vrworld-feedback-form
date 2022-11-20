import React from 'react'
import Question4Pic from '../assets/FotoVraag4.jfif'

function Question4() {
  return (
    <div>
    <div className='text-white text-2xl grid  grid-cols-4 grid-rows-2 gap-4'>
    <label>Niks</label>
    <input type="radio" className='w-5 h-10 '/>
    <label>De games</label>
    <input type="radio" className='w-5 h-10 '/>
    <label>Het personeel</label>
    <input type="radio" className='w-5 h-10 '/>
    <label>Anders</label>
    <input type="text" className='text-black w-32 '/>
    
</div>
<div class="flex flex-col justify-center items-center">
        <img src={Question4Pic} class="w-96  rounded-full mb-4 mt-4 border-solid border-8 border-black "></img>
</div>
</div>
  )
}

export default Question4