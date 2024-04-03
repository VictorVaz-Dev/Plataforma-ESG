import "./Header.css"
import Link from "../link/Link"

export default function Header(){

    return(
        <header>
            <div className="Header-principal">
                <div className="Header-option">
                    <Link to="/" label="Home"></Link>
                </div>
                <div className="Header-option">
                    <Link to="/Contatos" label="Contatos"></Link>
                </div>
                <div className="Header-option">
                    <Link to="/Bonificacoes" label="Bonificações"></Link>
                </div>
                <div className="Header-option">
                    Sair
                </div>
            </div>
        </header>
    )
}