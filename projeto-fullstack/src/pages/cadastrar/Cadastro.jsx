import "./Cadastro.css"
import InputForms from "../../components/inputForms/InputForms"


export default function Cadastro(){
    return(
        <div className="div-cadastrar">
        <div className="cadastro">
            <div className="titulo-cadastro">
                <h2>Faça seu cadastro para aproveitar nosso site !</h2>
            </div>
            <InputForms label="Usuário" type="text" placeholder="Digite seu Usuário" id="User"/>
            <InputForms label="Senha" type="text" placeholder="Digite sua senha" id="Senha"/>
            <div className="div-botao-cadastro">
                <button onClick="enviarForms" className="botao-cadastro">Cadastrar</button>
            </div>
        </div>
    </div>
    )
}