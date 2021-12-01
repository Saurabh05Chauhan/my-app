import React,{useState} from 'react'
import './TextForm.css';


export default function TextForm(props) {
    const[text,setText]= useState("");
    const handleOnChange= (event)=>{
        setText(event.target.value);
        
    }

    const handleUpperClick=()=>{
        let upperText = text.toUpperCase();
        setText(upperText);if(text!==""){
        props.ShowAlert("success","Text Chnage to Upper Case");}
        else{
            props.ShowAlert("danger","Enter Text to Initiate");
        }
    }

    const handleLowClick=()=>{
        let lowerText = text.toLowerCase();
        setText(lowerText);
        if(text!==""){
            props.ShowAlert("success","Text Chnage to Lower Case");
        }else{
            props.ShowAlert("danger","Enter Text to Initiate");
        }
        
    }

    const handleClearClick=()=>{
        setText('');
        if(text!==""){
        props.ShowAlert("success","Text Cleared");}
        else{
            props.ShowAlert("danger","Enter Text to Initiate");
        }
    }

    const handleCopyClick=()=>{
        let textcpy= document.getElementById('txtArea');
        textcpy.select();
        navigator.clipboard.writeText(textcpy.value);
        if(text!==""){
        props.ShowAlert("success","Text Copied");
        }else{
            props.ShowAlert("danger","Enter Text to Initiate");
        }
    }

    const handleSpaceClick=()=>{
        let newtext= text.split(/[  ]+/);
        setText(newtext.join(" "));if(text!==""){
        props.ShowAlert("success","Extra Space Cleared");
        }else{
            props.ShowAlert("danger","Enter Text to Initiate");
        }
    }

    //  const [style, setStyle] = useState('White')
    //  {
    //      if(props.mode==='light'){
    //          setStyle({color:'black'
    //         })

    //      }
    //      else{
    //          setStyle({color:'white'})
    //      }
    // }

    return (
        <>
        <div className="container mb-3">
        <h1 style={{color:props.mode==="light"?"black":"white"}} >{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{background:props.mode==="light"?"white":"#020072", color:props.mode==="light"?"black":"white"}} value={text} onChange={handleOnChange} placeholder="Enter Your Text" id="txtArea" rows="8" ></textarea>
            </div>
            <button type="button" onClick={handleUpperClick} className="btn btn-primary mx-1">To Upper Case</button>
            <button type="button" onClick={handleLowClick} className="btn btn-primary mx-1">To Lower Case</button>
            <button type="button" onClick={handleClearClick} className="btn btn-primary mx-1">Clear Text</button>
            <button type="button" onClick={handleCopyClick} className="btn btn-primary mx-1">Copy Text</button>
            <button type="button" onClick={handleSpaceClick} className="btn btn-primary mx-1">Remove Extra Space</button>
        </div>
        <div className="container my-3">
            <h3 style={{color:props.mode==="light"?"black":"white"}}>Text Status</h3>
            <p style={{color:props.mode==="light"?"black":"white"}}>{text===""?0:text.split(/\b[ .*]\b/).length} Words and {text.length} Characters</p>
        </div>
        <div className="container my-3">
            <h3 style={{color:props.mode==="light"?"black":"white"}}>Text Preview</h3>
            <p style={{color:props.mode==="light"?"black":"white"}}>{text}</p>
        </div>
        </>
    )
}
