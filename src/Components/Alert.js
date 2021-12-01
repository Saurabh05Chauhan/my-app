import React from 'react'


export default function Alert(props) {
    return (
        props.alert && <div>
           <div class={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.msg}</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}
