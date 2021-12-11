import React from 'react'

export default function Contact(props) {
    return (
        <div>
            <div className="card text-dark bg-light mb-3" >
                <h3 className="card-header" style={{color:props.mode==="light"?"black":"white", backgroundColor:props.mode==="light"?"#77728026":"#706fa2"}}>Contact</h3>
                <div className="card-body"  style={{color:props.mode==="light"?"black":"white", backgroundColor:props.mode==="light"?"white":"#3a395a"}}>
                    <p className="card-text">
                        <ul>
                            <li><strong>Phone No</strong>:  8006638142</li>
                            <li><strong>Email ID</strong>:  csaurabh660@gmail.com</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    )
}
