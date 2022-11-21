import React, { useState } from 'react'
import Question3Pic from '../assets/FotoVraag3.jpeg'


function Question3({}) {
  const[Answer3,setAnswerQuestion3]=useState();
  const[Answer3Anders,setAnswerQuestion3Anders]=useState();

  console.log("het laastste antwoord op vraag 3:"+Answer3);
  console.log("het laastste antwoord op vraag 3 anders:"+Answer3Anders);

  return (
    <div className='QuestionsContainer'>
    <div className='SmallText text-white text-2xl grid  grid-cols-4 grid-rows-2 gap-4'>
    <label>Zeker!</label>
    <input type="radio" name="Question3" value="Zeker!" onChange={e=>setAnswerQuestion3(e.target.value)} className='w-5 h-10 '/>
    <label>Wellicht</label>
    <input type="radio" name="Question3" value="Wellicht" onChange={e=>setAnswerQuestion3(e.target.value)} className='w-5 h-10 '/>
    <label>Nee</label>
    <input type="radio" name="Question3" value="Nee" onChange={e=>setAnswerQuestion3(e.target.value)} className='w-5 h-10 '/>
    <label>Anders</label>
    <input type="text" 
    className='text-black w-52 border-solid border-2 border-black rounded-lg'
    value={Answer3Anders}
    onChange={(e)=>{setAnswerQuestion3Anders(e.target.value)} }
    />

</div>
<div class="flex flex-col justify-center items-center">
        <img src={Question3Pic} class="w-96 rounded-full mb-4 mt-4 border-solid border-8 border-black "></img>
</div>
</div>
  )
}

export default Question3