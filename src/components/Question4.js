import React, { useState } from 'react'
import Question4Pic from '../assets/FotoVraag4.jfif'


function Question4({}) {

  const[Answer4,setAnswerQuestion4]=useState();
  const[Answer4Anders,setAnswerQuestion4Anders]=useState();

  console.log("het laastste antwoord op vraag 4:"+Answer4);
  console.log("het laastste antwoord op vraag 4 anders:"+Answer4Anders);

  return (
    <div className='QuestionsContainer'>
    <div className='SmallText text-white text-2xl grid  grid-cols-4 grid-rows-2 gap-4'>
    <label>Niks</label>
    <input type="radio" value="Zeker!" onChange={e=>setAnswerQuestion4(e.target.value)} className='w-5 h-10 '/>
    <label>De games</label>
    <input type="radio" value="Zeker!" onChange={e=>setAnswerQuestion4(e.target.value)} className='w-5 h-10 '/>
    <label>Het personeel</label>
    <input type="radio" value="Zeker!" onChange={e=>setAnswerQuestion4(e.target.value)} className='w-5 h-10 '/>
    <label>Anders</label>
    <input type="text" 
    className='text-black w-52 border-solid border-2 border-black rounded-lg'
    value={Answer4Anders}
    onChange={(e)=>{setAnswerQuestion4Anders(e.target.value)} }
    />
    
</div>
<div class="flex flex-col justify-center items-center">
        <img src={Question4Pic} class="w-96  rounded-full mb-4 mt-4 border-solid border-8 border-black "></img>
</div>
</div>
  )
}

export default Question4