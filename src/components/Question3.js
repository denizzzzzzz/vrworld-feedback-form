import React from 'react'
import Question3Pic from '../assets/FotoVraag3.jpeg'
function Question3() {
  return (
    <div>
    <div className='text-white text-2xl grid  grid-cols-4 grid-rows-2 gap-4'>
    <label>Zeker!</label>
    <input type="radio" className='w-5 h-10 '/>
    <label>Wellicht</label>
    <input type="radio" className='w-5 h-10 '/>
    <label>Nee</label>
    <input type="radio" className='w-5 h-10 '/>
    <label>Anders</label>
    <input type="text" className='text-black w-40 '/>

</div>
<div class="flex flex-col justify-center items-center">
        <img src={Question3Pic} class="w-96 rounded-full mb-4 mt-4 border-solid border-8 border-black "></img>
</div>
</div>
  )
}

export default Question3