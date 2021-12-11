import React from 'react'


export default function Alert(props) {
    return (
        <div style={{height:"50px"}} >
            {props.alert && <div>
            <div class={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
                    <strong>{props.alert.msg}</strong>
                    
                </div>
            </div>}
        </div>
    )
}
