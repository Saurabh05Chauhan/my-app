import React from 'react'
import { useState } from 'react/cjs/react.development'

export default function About() {

    const [myStyle, setmyStyle] = useState({
    color:'black',
    backgroundColor:'white'})

    const [btnText, setbtnText] = useState("Enable Dark Mode")
    const [btnClass, setbtnClass] = useState("btn btn-light")
    const toggleStyle=()=>{
        if(myStyle.color==='black'){
            setmyStyle({
                color:'white',
                backgroundColor:'Black',
                border:'1px solid white'
            },
            )
            setbtnText("Disable Dark Mode")
            setbtnClass("btn btn-dark")
        }
        else{
            setmyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setbtnText("Enable Dark Mode")
            setbtnClass("btn btn-light")
        }
    }

    return (
        
        <>
        <div className="container"  >
            <div className="card" style={myStyle} >
                <h5 className="card-header">About Us</h5>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
        </div>
        <div className="container my-3">
            <button className={btnClass} onClick={toggleStyle}>{btnText}</button>
        </div>
        </>
    )
}
