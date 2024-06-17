import React, { useEffect, useState } from "react";
import "./Cliente.css";

export default function Cliente() {
    const [email, setEmail] = useState('');

    useEffect(() => {
        // Obter o email do localStorage
        const userEmail = localStorage.getItem('userEmail');
        if (userEmail) {
            setEmail(userEmail);
        } else {
            // Redirecionar para o login se não houver email no localStorage
            location.assign("/Login");
        }
    }, []);

    return (
        <div className="customer-area">
            <header>
                <h1>Área do Cliente</h1>
            </header>
            <div className="user-info">
                <h2>Bem-vindo, {email}</h2>
                <p>Email: {email}</p>
            </div>
            <div className="order-list">
                <h2>Seus Pedidos</h2>
                <ul>
                    <li>
                        <p>Pedido #1</p>
                        <p>Status: Em processamento</p>
                    </li>
                    <li>
                        <p>Pedido #2</p>
                        <p>Status: Concluído</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
