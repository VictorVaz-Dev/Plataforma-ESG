import "./InputForms.css"
import React from "react"

const inputForms = (props) =>{
    const {type, label, placeholder, row, id} = props;

    return(
        <div className="inputForms">
            <label>{label}</label>
            <input type={type} placeholder={placeholder} rows={row} id={id}></input>
        </div>
    )
}

export default inputForms