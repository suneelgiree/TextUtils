import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        console.log("Lowercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{   
        console.log("On Change");
        setText(event.target.value);
    }
    const handleRevClick = ()=>{
        console.log("Reverse was clicked " + text);
        let newText = text.split('').reverse().join('');
        setText(newText);
    }
    const handleClearClick = ()=>{
        console.log("Clear was clicked " + text);
        let newText = '';
        setText(newText);
    }



    const [text, setText] = useState('Enter text here');
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
             <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
             <textarea className="form-control" value = {text} onChange = {handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
             <button className="btn btn-primary mx-2" onClick ={handleUpClick} >Convert to Uppercase</button>
             <button className="btn btn-primary mx-2" onClick ={handleLoClick} >Convert to Lowercase</button>
             <button className="btn btn-primary mx-2" onClick ={handleRevClick} >Convert to Reverse</button>
             <button className="btn btn-primary mx-2" onClick ={handleClearClick} >Clear</button>



        </div>
        <div className="container">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}