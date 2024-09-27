import React, { useEffect, useState } from "react";
import { getFirestore, collection, onSnapshot } from "firebase/firestore"; // Firestore imports
import "./Condominio.css";

export default function Condominio() {
    const [blocos, setBlocos] = useState([]); // Blocos de apartamentos
    const [colaboradores, setColaboradores] = useState([]); // Colaboradores do condomínio
    const [pagamentos, setPagamentos] = useState([]); // Pagamentos dos apartamentos
    const [reclamacoes, setReclamacoes] = useState([]); // Reclamações do condomínio

    const db = getFirestore(); // Inicializa o Firestore

    // Função para buscar blocos de apartamentos em tempo real
    useEffect(() => {
        const unsubscribeBlocos = onSnapshot(collection(db, "blocos"), (snapshot) => {
            const blocosList = snapshot.docs.map(doc => doc.data());
            setBlocos(blocosList);
        });

        const unsubscribeColaboradores = onSnapshot(collection(db, "colaboradores"), (snapshot) => {
            const colaboradoresList = snapshot.docs.map(doc => doc.data());
            setColaboradores(colaboradoresList);
        });

        const unsubscribePagamentos = onSnapshot(collection(db, "pagamentos"), (snapshot) => {
            const pagamentosList = snapshot.docs.map(doc => doc.data());
            setPagamentos(pagamentosList);
        });

        const unsubscribeReclamacoes = onSnapshot(collection(db, "reclamacoes"), (snapshot) => {
            const reclamacoesList = snapshot.docs.map(doc => doc.data());
            setReclamacoes(reclamacoesList);
        });

        // Cleanup subscriptions
        return () => {
            unsubscribeBlocos();
            unsubscribeColaboradores();
            unsubscribePagamentos();
            unsubscribeReclamacoes();
        };
    }, [db]);

    return (
        <div className="condominio-area">
            <header>
                <h1>Status do Condomínio</h1>
            </header>

            {/* Seção 1: Blocos e Apartamentos */}
            <section className="blocos-section">
                <h2>Blocos e Apartamentos</h2>
                <br />
                <div className="blocos-grid">
                    {blocos.map((bloco, index) => (
                        <div key={index} className="bloco-card">
                            <h3>{bloco.nome}</h3>
                            <p>Total de apartamentos: {bloco.apartamentos}</p>
                            <p>Apartamentos ocupados: {bloco.ocupados}</p>
                            <div className="progress-bar">
                                <div 
                                    className="progress-fill" 
                                    style={{ width: `${(bloco.ocupados / bloco.apartamentos) * 100}%` }}>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Seção 2: Colaboradores */}
            <section className="colaboradores-section">
                <h2>Colaboradores</h2>
                <br />
                <div className="colaboradores-grid">
                    {colaboradores.map((colaborador, index) => (
                        <div key={index} className="colaborador-card">
                            <h3>{colaborador.nome}</h3>
                            <p>Cargo: {colaborador.cargo}</p>
                            <p>Telefone: {colaborador.telefone}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
