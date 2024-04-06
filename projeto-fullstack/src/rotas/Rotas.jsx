import {Routes, Route} from "react-router-dom"
import Home from "../pages/home/Home"
import Contatos from "../pages/contatos/Contatos"

export default function Rotas(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Contatos" element={<Contatos/>}/>
            </Routes>
        </div>
    )
}