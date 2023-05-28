import React from 'react'
export default function Meme(){
    const[formValue,setFormValue]=React.useState(
        {firstValue:"",
        lastValue:""
    })
    
    function handleChange(event){
        const {name,value}=event.target
        setFormValue(prevValue=>{
            return {
                ...prevValue,
                [name]:value
            }
        })
    }
    function handleSubmit(event){
        event.preventDefault()

    }
    return(
        <main>
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" placeholder="top" className="form-input" name="firstValue" onChange={handleChange} value={formValue.firstValue}/>
                <input type="text" placeholder="bottom" value={formValue.lastValue} className="form-input" name="lastValue" onChange={handleChange} />
                <button className='form--button'>Generate a new image</button>
            </form>
            <div className="meme">
                <img src=""className="meme--image" />
                <h2 className="meme--text top">{formValue.firstValue}</h2>
                <h2 className="meme--text bottom">{formValue.lastValue}</h2>
            </div>
        </main>
    )
}