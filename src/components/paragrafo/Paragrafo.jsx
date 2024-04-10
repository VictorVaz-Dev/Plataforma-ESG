import "./Paragrafo.css"
import React from "react"

const Paragrafo = (props) =>{
    const {text, titulo} = props;

    return(
        <div className="paragrafo">
            <h3>{titulo}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Paragrafo