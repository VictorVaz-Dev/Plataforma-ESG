import InputForms from "../../components/inputForms/InputForms"
import "./Login.css"
import Link from "../../components/link/Link"

export default function Login(){
    return(
        <div className="div-login">
            <div className="login">
                <div className="titulo-login">
                    <h2>Entre para conhecer nosso site !</h2>
                </div>
                <InputForms label="Usuário" type="text" placeholder="Digite seu Usuário" id="User"/>
                <InputForms label="Senha" type="text" placeholder="Digite sua senha" id="Senha"/>
                <div className="div-botao-login">
                    <button onClick="enviarForms" className="botao-login">Entrar</button>
                </div>
                <div className="div-cadastro">
                    <p>Não possui um cadastro ?</p>
                    <Link to="/Cadastrar" label="Acesse aqui"/>
                </div>
            </div>
        </div>
    )
}