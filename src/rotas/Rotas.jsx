import {Routes, Route} from "react-router-dom"
import Home from "../pages/home/Home"
import Contatos from "../pages/contatos/Contatos"
import Login from "../pages/login/Login"
import Cadastro from "../pages/cadastrar/Cadastro"

export default function Rotas(){
    return(
        <div>
            <Routes>
                <Route path="https://victorvaz-dev.github.io/" element={<Login/>} />
                <Route path="https://victorvaz-dev.github.io/Cadastro" element={<Cadastro/>} />
                <Route path="https://victorvaz-dev.github.io/Home" element={<Home/>}/>
                <Route path="https://victorvaz-dev.github.io/Contatos" element={<Contatos/>}/>
            </Routes>
        </div>
    )
}