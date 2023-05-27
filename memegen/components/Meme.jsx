import React from 'react'
export default function Meme(){
    function handleClick(){

    }
    return(
        <main>
            <div className="form">
                <input type="text" className="form-input"/>
                <input type="text" className="form-input"/>
                <button className='form--button' onClick={handleClick}>Generate a new image</button>
            </div>
        </main>
    )
}