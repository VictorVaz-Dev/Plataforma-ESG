import {Routes, Route} from "react-router-dom"
import Home from "../pages/home/Home"
import Contatos from "../pages/contatos/Contatos"
import Login from "../pages/login/Login"
import Cadastro from "../pages/cadastrar/Cadastro"

export default function Rotas(){
    return(
        <div>
            <Routes>
                <Route path="https://github.com/VictorVaz-Dev/Atividade-Fullstack-Fiap/blob/main/src/pages/login/Login.jsx" element={<Login/>} />
                <Route path="https://github.com/VictorVaz-Dev/Atividade-Fullstack-Fiap/blob/main/src/pages/cadastrar/Cadastro.jsx" element={<Cadastro/>} />
                <Route path="https://github.com/VictorVaz-Dev/Atividade-Fullstack-Fiap/blob/main/src/pages/home/Home.jsx" element={<Home/>}/>
                <Route path="https://github.com/VictorVaz-Dev/Atividade-Fullstack-Fiap/blob/main/src/pages/contatos/Contatos.jsx" element={<Contatos/>}/>
            </Routes>
        </div>
    )
}