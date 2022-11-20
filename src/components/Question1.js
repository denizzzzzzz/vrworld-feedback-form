import React from 'react'
import Question1Pic from '../assets/FotoVraag1.jpg'

function Question1({formData, setFormData}) {
  return (
    <div>
    <div className='text-white text-2xl grid  grid-cols-4 grid-rows-2 gap-4'>
        <label>Goed</label>
        <input type="radio" name="Goed" class="w-5 h-10 "/>
        <label>Slecht</label>
        <input type="radio" name="Slecht" class="w-5 h-10 "/>
        <label>Vreselijk</label>
        <input type="radio"  name="Vreselijk" class="w-5 h-10 "/>
        <label>Anders</label>
        <input 
        className='text-black w-52'
        type="text"   
        name="Vraag1Anders"
        value={formData.Vraag1Anders}
        onChange={(event)=> setFormData({formData, Vraag1Anders: event.target.value})}
        />
    </div>
     <div className='flex flex-col justify-center items-center'>
     <img src={Question1Pic} class="w-96 rounded-full mb-4 mt-4 border-solid border-8 border-black "></img>
</div>
</div>
  )
}

export default Question1