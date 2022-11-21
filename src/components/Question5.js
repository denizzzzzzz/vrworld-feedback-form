import Question5Pic from '../assets/FotoVraag5.jpg'
import React, {useState} from 'react';
function Question5() {
    const[dropdown,setDropdown] = useState("10");
    console.log("het laatste antwoord op vraag 5:"+dropdown);
  return (
    <div className='QuestionsContainer'>
    <div className='SmallText text-white text-xl'>
    <label class="pr-4">Kies hier</label>
    <select class="bg-black border-solid border-2 border-black rounded-lg" value={dropdown} onChange={(e)=>{setDropdown(e.target.value)} }className='text-black mb-16'>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      
      <div class="flex flex-col justify-center items-center">
        <img src={Question5Pic} class="w-96  rounded-full mb-4 mt-4 border-solid border-8 border-black "></img>
        
</div>
</div>
</div>
  )
}

export default Question5