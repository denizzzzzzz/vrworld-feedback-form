import React, {useState} from 'react'

function Form() {

const [Question, setQuestion] = useState(0);

const QuestionTitles = 
        [
        "Hoe was uw ervaring met VR-World Breda over het algemeen?", 
        "Wat vond u van de games bij VR-World Breda?",
        "Zou u VR-World Breda nog een keer bezoeken?",
        "Wat kon er beter bij VR-World Breda?",
        "Tot slot, welk cijfer zou u VR-World Breda geven?"
        ]
  return (
    <div className='form'>
        <div className='progressbar'></div>

                <div className='form-container'>
                <div className='header text-white text-xl'>
                    <h1>{QuestionTitles[Question]}</h1>
                </div>
                <div className='body'></div>
                <div className='footer'>
                <button className='text-white'
                disabled={Question == 0}
                onClick={()=>{
                    setQuestion((currPage)=> currPage -1);
                }}>
                    Prev
                    </button>
                <button className='text-white'
                    disabled={Question == QuestionTitles.length -1}
                    onClick={()=>{
                        setQuestion((currPage)=> currPage +1);
                    }}>
                    Next
                    </button>
            </div>
        </div>
    </div>
  )
}

export default Form