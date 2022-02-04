import React,{useState} from 'react'

export default function Textfrom(props) {
    const handleUpclick=()=>
    {
       let newText=text.toUpperCase();
       setText(newText);
       props.showAlert("Converted to UpperCase","success");
    }
    const handleLowclick=()=>
    {
       let newText=text.toLowerCase();
       setText(newText);
       props.showAlert("Converted to LowerCase","success");
    }
    const handleResetclick=()=>
    {
       let newText='';
       setText(newText);
       props.showAlert("Text Cleared","danger");
    }
    const handleTrimclick=()=>
    {
       let newText=text.trim();
       setText(newText);
       props.showAlert("Text Trimmed","success");
    }
    const handleExtraSpaces=()=>
    {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces","success");
    }
    const handleCopy=()=>
    {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied","success");
    }
    const handleOnchange=(event)=>
    {
        setText(event.target.value);
    }
    const [text,setText]=useState('');
    
    return (<>
        <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>{props.heading}</h2>
            <textarea cols="30" rows="6" style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} className='form-control' value={text} onChange={handleOnchange} id='myText'></textarea><br/>
            <button className="btn btn-primary m-1" disabled={text.length===0} onClick={handleUpclick}>UPPERCASE</button>
            <button className="btn btn-primary m-1" disabled={text.length===0} onClick={handleLowclick}>lowercase</button>
            <button className="btn btn-primary m-1" disabled={text.length===0} onClick={handleTrimclick}>Trim Spaces</button>
            <button className="btn btn-primary m-1" disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extraspace</button>
            <button className="btn btn-primary m-1" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary m-1" disabled={text.length===0} onClick={handleResetclick}>Reset</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h3>Your Text Summary</h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview!!"}</p>
        </div>
    </>)
}