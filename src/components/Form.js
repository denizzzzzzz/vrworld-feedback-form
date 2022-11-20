import React from 'react'

function Form() {
  return (
    <div className='form'>
        <div className='progressbar'></div>

                <div className='form-container'>
                <div className='header'></div>
                <div className='body'></div>
                <div className='footer'>
                    <button className='text-white'>Prev</button>
                    <button className='text-white'>Next</button>
            </div>
        </div>
    </div>
  )
}

export default Form