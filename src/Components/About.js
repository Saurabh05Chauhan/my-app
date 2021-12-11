import React from 'react'
// import { useState } from 'react/cjs/react.development'

export default function About(props) {

    // const [myStyle, setmyStyle] = useState({
    // color:'black',
    // backgroundColor:'white'})

    // const [btnText, setbtnText] = useState("Enable Dark Mode")
    // const [btnClass, setbtnClass] = useState("btn btn-light")
    // const toggleStyle=()=>{
    //     if(myStyle.color==='black'){
    //         setmyStyle({
    //             color:'white',
    //             backgroundColor:'Black',
    //             border:'1px solid white'
    //         },
    //         )
    //         setbtnText("Disable Dark Mode")
    //         setbtnClass("btn btn-dark")
    //     }
    //     else{
    //         setmyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setbtnText("Enable Dark Mode")
    //         setbtnClass("btn btn-light")
    //     }
    // }

    return (
        
        <>
        <div className="container"  >
            <div className="card"  >
                <h5 className="card-header" style={{color:props.mode==="light"?"black":"white", backgroundColor:props.mode==="light"?"#77728026":"#706fa2"}}>About Us</h5>
                <div className="card-body" style={{color:props.mode==="light"?"black":"white", backgroundColor:props.mode==="light"?"white":"#3a395a"}}>
                    
                    <p className="card-text">Text Utils is a text utility application used for various text manipulations and calculate text length and words.</p>
                </div>
            </div>
        </div>
        {/* <div className="container my-3">
            <button className={btnClass} onClick={toggleStyle}>{btnText}</button>
        </div> */}
        </>
    )
}
