import React, { useState } from 'react'
import Question1Pic from '../assets/FotoVraag1.jpg'

function Question1({}) {
  
  const[Answer1,setAnswerQuestion1]=useState();
  const[Answer1Anders,setAnswerQuestion1Anders]=useState();

  console.log("het laastste antwoord op vraag 1:"+Answer1);
  console.log("het laastste antwoord op vraag 1 anders:"+Answer1Anders);


  return (
    
    <div class="QuestionsContainer">
    <div className='SmallText text-white text-2xl grid  grid-cols-4 grid-rows-2 gap-4'>
        <label>Goed</label>
        <input type="radio" name="Question1" value="Goed" onChange={e=>setAnswerQuestion1(e.target.value)} class="w-5 h-10 ">
        </input>
        <label>Slecht</label>
        <input type="radio" name="Question1" value="Slecht" onChange={e=>setAnswerQuestion1(e.target.value)} class="w-5 h-10 "/>
        <label>Vreselijk</label>
        <input type="radio"  name="Question1" value="Vreselijk" onChange={e=>setAnswerQuestion1(e.target.value)} class="w-5 h-10 "/>
        <label>Anders</label>
        <input type="text" 
    className='text-black w-52 border-solid border-2 border-black rounded-lg'
    value={Answer1Anders}
    onChange={(e)=>{setAnswerQuestion1Anders(e.target.value)} }
    />
    </div>
     <div className='flex flex-col justify-center items-center'>
     <img src={Question1Pic} class="w-96 rounded-full mb-4 mt-4 border-solid border-8 border-black "></img>
</div>
</div>
  )
}

export default Question1