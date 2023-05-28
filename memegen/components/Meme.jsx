import React from 'react'
export default function Meme(){
    const[firstValue,setFirstValue]=React.useState("")
    function handleChange(event){
        setFirstValue(event.target.value)
        

    }
    console.log(firstValue)
    function handleClick(){

    }
    return(
        <main>
            <div className="form">
                <input type="text" className="form-input" onChange={handleChange}/>
                <input type="text" className="form-input"/>
                <button className='form--button' onClick={handleClick}>Generate a new image</button>
            </div>
        </main>
    )
}