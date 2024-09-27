import "./header.css";
import Link from "../link/Link";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const showHeader = location.pathname !== "/" && location.pathname !== "/Cadastro";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function Sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  }

  // Função para alternar o menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {showHeader && (
        <header>
          <div className="header-principal">
            <div className="menu-toggle" onClick={toggleMenu}>
              {/* Ícone do menu hamburguer */}
              <span className="hamburger-icon">&#9776;</span>
            </div>
            <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
              <div className="header-option">
                <Link to="/Home" label="Home"></Link>
              </div>
              <div className="header-option">
                <Link to="/Contatos" label="Contatos"></Link>
              </div>
              <div className="header-option">
                <Link to="/Clientes" label="Área do cliente"></Link>
              </div>
              <div className="header-option">
                <Link to="/Suporte" label="FAQ"></Link>
              </div>
              <div className="header-option">
                <Link to="/Condominio" label="Condominio"></Link>
              </div>
              <div className="header-option">
                <button onClick={Sair} className="botaoSair">
                  Sair
                </button>
              </div>
            </nav>
          </div>
        </header>
      )}
    </>
  );
}