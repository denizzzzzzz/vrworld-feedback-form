import React, { useState } from 'react'
import Question2Pic from '../assets/FotoVraag2.jfif'


function Question2({}) {
  const[Answer2,setAnswerQuestion2]=useState();
  const[Answer2Anders,setAnswerQuestion2Anders]=useState();

  console.log("het laastste antwoord op vraag 2:"+Answer2);
  console.log("het laastste antwoord op vraag 2 anders:"+Answer2Anders);

  return (
    <div className='QuestionsContainer'>
       <div className='SmallText text-white text-2xl grid  grid-cols-4 grid-rows-2 gap-4'>
    <label >Veel variatie</label>
    <input type="radio" name="Question2" value="Veel variatie" onChange={e=>setAnswerQuestion2(e.target.value)} className='w-5 h-10 '/>
    <label>Genoeg variatie</label>
    <input type="radio" name="Question2"value="Genoeg variatie" onChange={e=>setAnswerQuestion2(e.target.value)} className='w-5 h-10 '/>
    <label>Te weinig variatie</label>
    <input type="radio" name="Question2" value="Te weinig variatie" onChange={e=>setAnswerQuestion2(e.target.value)} className='w-5 h-10 '/>
    <label>Anders</label>
    <input type="text" 
    className='text-black w-52 border-solid border-2 border-black rounded-lg'
    value={Answer2Anders}
    onChange={(e)=>{setAnswerQuestion2Anders(e.target.value)} }
    />
    
</div>
<div class="flex flex-col justify-center items-center">
        <img src={Question2Pic} class="w-96 rounded-full mb-4 mt-4 border-solid border-8 border-black "></img>
</div>  
</div>
  )
}

export default Question2