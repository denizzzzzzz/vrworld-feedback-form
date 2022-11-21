import React, {useState} from 'react'
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import Question5 from './Question5';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";





function Form() {
const [Question, setQuestion] = useState(0);
const [formData, setFormData] = useState({
//   Vraag1Anders:"",
//   Vraag2Anders:"",
//   Vraag3Anders:"",
//   Vraag4Anders:"",

})


const QuestionTitles = 
        [
        "Hoe was uw ervaring met VR-World Breda over het algemeen?", 
        "Wat vond u van de games bij VR-World Breda?",
        "Zou u VR-World Breda nog een keer bezoeken?",
        "Wat kon er beter bij VR-World Breda?",
        "Tot slot, welk cijfer zou u VR-World Breda geven?"
        ]
        const AnswerDisplay = () =>{
           if(Question == 0){
            return<Question1 formData={formData} setFormData={setFormData}/>
           }
           else if(Question == 1){
            return<Question2 formData={formData} setFormData={setFormData}/>
           }
           else if(Question == 2){
            return<Question3 formData={formData} setFormData={setFormData}/>
           }
           else if(Question == 3){
            return<Question4 formData={formData} setFormData={setFormData}/>
           }
           else if(Question == 4){
            return<Question5/>
           }
          
        }
  return (
    <div className='form flex flex-col justify-center items-center'>
        <div className='progressbar mt-24'>
            <div style={{width: Question == 0 ? "20%" : Question == 1 ? "40%" : Question == 2 ? "60%" : Question == 3 ? "80%" : "100%"}}>

            </div>
        </div>
                <div className='form-container bg-[#343232] rounded-lg'>
                <div className='Title text-white text-3xl bg-[#767474] rounded-lg pt-8 pb-8 mb-12'>
                    <h1>{QuestionTitles[Question]}</h1>
                </div>
                <div className='body'>
                {AnswerDisplay()}
                </div>
                </div>
                <div className='footer'>
                
                <button 
                disabled={Question == 0}
                onClick={()=>{
                    setQuestion((currPage)=> currPage -1);
                }}>
                    
                    <FaArrowAltCircleLeft className='text-6xl text-[#85550E] mt-6'/>
                    
                    </button>
                <button
                    className='m-4'
                    onClick={()=>{
                        if(Question == QuestionTitles.length -1){
                            alert("FORMULIER VERZENDEN");
                        }
                        else{
                            setQuestion((currPage) => currPage + 1);
                        }
                       
                    }}>
                    {Question == QuestionTitles.length -1 ? <FaCheckCircle className='text-6xl text-[#85550E] mt-6'/> : <FaArrowAltCircleRight className='text-6xl text-[#85550E] mt-6'/>}
                    

                    </button>
            </div>
        
    </div>
  )
}

export default Form