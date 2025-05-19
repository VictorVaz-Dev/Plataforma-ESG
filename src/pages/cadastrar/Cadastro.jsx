import "./Cadastro.css"
import Link from "../../components/link/Link";
import InputForms from "../../components/inputForms/InputForms"
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../services/FirebaseConfig";
import { useState } from "react";
import Lightning from '../../components/lightning/lightning';


export default function Cadastro() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    function Cadastrar(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }

    if (error) {
        <div>
            <p>Error: {error.message}</p>
        </div>
    }

    if (loading) {
        return <p>Carregando...</p>
    }

    if (user) {
        location.assign("/");
        return;
    }

    return (
        <div className="light">
            <Lightning

                hue={260}
                xOffset={0}
                speed={1}
                intensity={1}
                size={1}
            />

            <div className="div-cadastrar">
                <div className="cadastro">
                    <div className="titulo-cadastro">
                        <h2>Faça seu cadastro para aproveitar nosso site !</h2>
                    </div>
                    <InputForms label="E-mail" type="text" placeholder="exemplo@exemplo.com" id="user" onChange={(e) => setEmail(e.target.value)} />
                    <InputForms label="Senha" type="text" placeholder="Digite uma senha" id="Senha" onChange={(e) => setPassword(e.target.value)} />
                    <div className="div-botao-cadastro">
                        <Link to="/" label="Voltar"></Link>
                        <button onClick={Cadastrar} className="botao-cadastro">Cadastrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}