import InputForms from "../../components/inputForms/InputForms"
import "./Login.css"
import Link from "../../components/link/Link"
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState } from "react";
import { auth } from "../../services/FirebaseConfig";


export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    
    function Logar(e){
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    if (error) {
        alert("Senha ou Email incorretos");
        location.reload();
        return;
    }

    if(loading){
        return <p>Carregando...</p>
    }

    if (user) {
        alert("Cliente Logado! Seja bem vindo " + email);
        location.assign("/Home");
        return;
    }


    return(
        <div className="div-login">
            <div className="login">
                <div className="titulo-login">
                    <h2>Entre para conhecer nosso site !</h2>
                </div>
                <InputForms label="E-mail" type="text" placeholder="exemplo@exemplo.com" onChange={(e) => setEmail(e.target.value)}/>
                <InputForms label="Senha" type="text" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)}/>
                <div className="div-botao-login">
                    <button onClick={Logar} className="botao-login">Entrar</button>
                </div>
                <div className="div-cadastro">
                    <p>Não possui um cadastro ?</p>
                    <Link to="/Cadastro" label="Acesse aqui"/>
                </div>
            </div>
        </div>
    )
}