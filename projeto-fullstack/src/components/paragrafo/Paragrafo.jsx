import "./Paragrafo.css"

const Paragrafo = (props) =>{
    const {text, titulo} = props;

    return(
        <div className="paragrafo-home">
            <h3>{titulo}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Paragrafo