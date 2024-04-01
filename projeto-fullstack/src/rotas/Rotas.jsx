import {Routes, Route} from "react-router-dom"
import Home from "../pages/home/Home"

export default function Rotas(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    )
}