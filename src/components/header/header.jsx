import "./header.css"
import Link from "../link/Link"
import { useLocation } from "react-router-dom"

export default function Header() {
  const location = useLocation();
  const showHeader = location.pathname !== "/" && location.pathname !== "/Cadastro";

    function Sair(){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/';
    }

  return (
    <>
      {showHeader && (
        <header>
          <div className="Header-principal">
            <div className="Header-option">
              <Link to="/Home" label="Home"></Link>
            </div>
            <div className="Header-option">
              <Link to="/Contatos" label="Contatos"></Link>
            </div>
            <div className="Header-option">
                <button onClick={Sair} className="botaoSair">Sair</button>
            </div>
          </div>
        </header>
      )}
    </>
  )
}