import React,{useState} from "react"


export default function TextForm(props) {
    
    const [text, setText]= useState('');
    
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase", "success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase", "success");
    }
    const handleExtraSpace = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra space cleared", "success");

  }
    
    
    const handleClear = ()=>{
        let newText = " ";
        setText(newText);
        props.showAlert("Text cleared","success");
    }
    const handleOnChange =(event)=>{
        setText(event.target.value);
    }
    
    
    return (
        <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#171750':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleUpClick}>convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleLoClick}>convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleClear}>clear</button>
      <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Space</button>
     
     
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((ele)=>{return ele.length!==0}).length } Minutes taken to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  );
}
            