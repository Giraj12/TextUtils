import React, {useState} from 'react'






export default function Textform(props) {

    const [text, setText]= useState("");

    const handleUpClick= ()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upper-case","success");


    }

    const handleLoClick= ()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lower-case","success");


    }

    const handleOnChange=(event)=>{
        setText(event.target.value);

    }

    const handleCopy=()=>{
      var text=document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("text copied to clipboard","success");

    }
    const handleExtraSpaces=()=>{
      let newText=text.replace(/\s+/g, " ");
      setText(newText);
      props.showAlert("extra-spaces removed","success");
    }

    const handleClear=()=>{
      let newText="";
      setText(newText);
      props.showAlert("text cleared","success");
    }


  return (

    <>
    
    
    
    <div className='container'  style={{color: props.mode==='dark'?'white':'black'}}>

    <h1>{props.heading}</h1>


  <div className="form-group">
    <textarea className="form-control" id="mybox" rows="7" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'black'}}></textarea>
  </div>


  <button className='btn btn-primary my-3 mx-1'  onClick={handleUpClick}>Convert to UpperCase </button>
  <button className='btn btn-primary my-3 mx-1'  onClick={handleLoClick}>Convert to LowerCase </button>
  <button className='btn btn-primary my-3 mx-1'  onClick={handleCopy}>Copy to Clipboard </button>
  <button className='btn btn-primary my-3 mx-1'  onClick={handleExtraSpaces}>Clear ExtraSpaces </button>
  <button className='btn btn-primary my-3 mx-1'  onClick={handleClear}>Clear Text </button>
  

      
    </div>

    <div className='container my-3'  style={{color: props.mode==='dark'?'white':'black'}}>

        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>Reading time-{0.008 *text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>

    </div>
    </>
  )
}