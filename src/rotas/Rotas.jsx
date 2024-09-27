import {Routes, Route} from "react-router-dom"
import Home from "../pages/home/Home"
import Contatos from "../pages/contatos/Contatos"
import Login from "../pages/login/Login"
import Cadastro from "../pages/cadastrar/Cadastro"
import Cliente from "../pages/cliente/Cliente"
import Suporte from "../pages/faq/Suporte"
import Condominio from "../pages/condominio/Condominio"

export default function Rotas(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/Cadastro" element={<Cadastro/>} />
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Contatos" element={<Contatos/>}/>
                <Route path="/Clientes" element={<Cliente/>}/>
                <Route path="/Suporte" element={<Suporte/>}/>
                <Route path="/Condominio" element={<Condominio/>}/>
            </Routes>
        </div>
    )
}