import React from 'react'
import Question5Pic from '../assets/FotoVraag5.jpg'
function Question5() {
  return (
    <div className='text-white text-xl'>
    <label>Kies hier</label>
    <select className='text-black'>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
      <div class="flex flex-col justify-center items-center">
        <img src={Question5Pic} class="w-96  rounded-full mb-4 mt-4 border-solid border-8 border-black "></img>
</div>
</div>
  )
}

export default Question5