import "./Header.css"
import Link from "../link/Link"

export default function Header(){

    return(
        <header>
            <div className="Header-principal">
                <div className="Header-option">
                    <Link to="/Home" label="Home"></Link>
                </div>
                <div className="Header-option">
                    Contatos
                </div>
                <div className="Header-option">
                    Bonificações
                </div>
                <div className="Header-option">
                    Sair
                </div>
            </div>
        </header>
    )
}