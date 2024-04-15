import "./InputForms.css"
import React from "react"

const InputForms = (props) =>{
    const {type, label, placeholder, id, value, onChange, onInput} = props;

    return(
        <div className="inputForms">
            <label>{label}</label>
            <input 
                type={type} 
                placeholder={placeholder} 
                id={id} 
                value={value}
                onChange={onChange}
                onInput={onInput}
            ></input>
        </div>
    )
}

export default InputForms