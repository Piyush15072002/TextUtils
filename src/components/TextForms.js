import React,{useState} from 'react';


export default function TextForms(props) {
  const [text,setText] = useState('');
  // the default value of text is this - Your Text to analyze...
  // setText is used to update the value of text like this
  // This is called as State

  // function that runs when onClick event occurs
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UPPERCASE","success");
  }
  
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  }
  
  
  const removeSpace = () => {
    let newText = text.replaceAll(' ','');
    setText(newText);
    props.showAlert("Removed spaces from the text","success");
  }
  
  const removeExtraSpace =()=>{
    let newText= text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Removed extra spaces from the text","success");
  }
  
  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Successfully Cleared the Text box","success");
  }
  
  const addDot = () => {
    let newText = text.padEnd((text.length)+1,'.');
    setText(newText);
    props.showAlert("Added Dot  .","success");
  }
  const addQ = () => {
    let newText = text.padEnd((text.length)+1,'?');
    setText(newText);
    props.showAlert("Added Question Mark  ?","success");
  }
  
  const copyAll = () => {
    const text = document.getElementById('floatingTextarea2');
    text.select()
    navigator.clipboard.writeText(text.value);
    props.showAlert("Successfully Copied to Clipboard","success");
  }

  
  const handleOnChange= (event) => {
    setText(event.target.value);
    
  } 

  return (
    <>
  
      <div className="container text-center" style={{color : props.mode==='dark'?'crimson':'#a4133c'}}>

      
      <h1>ENTER YOUR TEXT</h1>
    
      <div className="form-floating" >
      <textarea style={{backgroundColor : props.mode==='light'? '#fdf0d5':'black', color : props.mode==='dark'?'cyan':'red'}} className="form-control" id="floatingTextarea2" value={text} onChange={handleOnChange}  ></textarea>
  
      </div>
      <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>

      <button className="btn btn-info my-3 mx-3" onClick={handleLoClick}>Convert to lowercase</button>

      <button className="btn btn-secondary my-2 mx-2" onClick={removeSpace}>Remove Spaces</button>

      <button className="btn btn-dark my-3 mx-2" onClick={removeExtraSpace}>remove Extra Spaces</button>
      
      <button className="btn btn-warning my-3 mx-1" onClick={addDot}>&bull;</button>
      <button className="btn btn-warning my-3 mx-1" onClick={addQ}>?</button>

      <button className="btn btn-outline-success my-3 mx-3" onClick={copyAll}>Copy Text</button>
      <button className="btn btn-danger my-3 mx-3" onClick={clearText}>Clear Text</button>
      </div>


        
        <div className="container my-3 " style={{backgroundColor : props.mode==='light'? '#fdf0d5':'black', color : props.mode==='dark'?'#ffbd00':'#208b3a'}}>
        <h2 style={{color : props.mode==='dark'?'#9ef01a':'green'}}>Preview</h2>
        <p className="card px-3 py-3" style={{backgroundColor : props.mode==='light'? '#fdf0d5':'black', color : props.mode==='dark'?'cyan':'#208b3a'}}><b>{text}</b></p>
        </div>

        <div className="container my-3" style={{backgroundColor : props.mode==='light'? '#fdf0d5':'black', color : props.mode==='dark'?'cyan':'#208b3a'}} >

          <div className="row" style={{backgroundColor : props.mode==='light'? '#fdf0d5':'#03071e', color : props.mode==='dark'?'cyan':'#208b3a'}}>

            <div className="col card" style={{backgroundColor : props.mode==='light'? '#fdf0d5':'#03071e', color : props.mode==='dark'?'#ffea00':'black'}}>
            <p>{text.length} <b>Characters</b></p>
            </div>

            <div className="col card" style={{backgroundColor : props.mode==='light'? '#fdf0d5':'#03071e', color : props.mode==='dark'?'#ffea00':'black'}}>
            <p>{text.split(" ").length} <b>Words</b></p>
            </div>

            <div className="col card" style={{backgroundColor : props.mode==='light'? '#fdf0d5':'#03071e', color : props.mode==='dark'?'#ffea00':'black'}}>
            <p>{ 0.008 *text.split(" ").length} <b>minutes read time</b></p>
            </div>

        </div>
        
     
  </div>
    
    </>

  );
}
