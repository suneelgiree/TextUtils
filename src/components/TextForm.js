import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{   
        console.log("On Change");
        setText(event.target.value);
    }



    const [text, setText] = useState('Enter text here');
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
             <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
             <textarea className="form-control" value = {text} onChange = {handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
             <button className="btn btn-primary" onClick ={handleUpClick} >Convert to Uppercase</button>
            </div>
        </div>

    )
}