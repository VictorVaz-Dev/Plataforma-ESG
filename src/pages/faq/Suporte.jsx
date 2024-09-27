import React, { useState } from "react";
import "./Suporte.css";

export default function Suporte() {
    const [faqs, setFaqs] = useState([
        {
            question: "Como faço para alterar meus dados pessoais?",
            answer: "Você pode alterar seus dados pessoais, como email, telefone e endereço, acessando a área do cliente. Basta editar os campos desejados e clicar no botão 'Salvar Dados'.",
            open: false,
        },
        {
            question: "Como adiciono uma reclamação?",
            answer: "Vá até a área 'Suas Reclamações' na página do cliente, escreva sua reclamação no campo indicado e clique em 'Enviar Reclamação'.",
            open: false,
        },
        {
            question: "Como posso apagar uma reclamação?",
            answer: "Caso sua reclamação já tenha sido resolvida, você pode apagá-la clicando no botão 'Apagar Reclamação' ao lado da reclamação na lista de reclamações.",
            open: false,
        },
        {
            question: "Esqueci minha senha. Como posso redefini-la?",
            answer: "Na tela de login, clique em 'Esqueceu sua senha?' e siga as instruções para receber um email com um link para redefinir sua senha.",
            open: false,
        },
        {
            question: "Como faço para acessar as notificações do condomínio?",
            answer: "Você pode visualizar as notificações do condomínio na tela inicial do aplicativo ou na área de 'Configurações', onde você também pode ativar ou desativar as notificações.",
            open: false,
        },
        {
            question: "Posso alterar meu método de login?",
            answer: "Atualmente, oferecemos login via email e senha, além de login social com Google e Facebook. Para mudar seu método de login, você pode fazer isso nas configurações de conta.",
            open: false,
        },
        {
            question: "O que faço se encontrar um problema no sistema?",
            answer: "Se você encontrar algum problema técnico, entre em contato com o suporte pelo chat disponível na área de suporte ou envie um email para nosso suporte técnico.",
            open: false,
        }
    ]);

    const toggleFAQ = index => {
        setFaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open;
            } else {
                faq.open = false;
            }

            return faq;
        }));
    };

    return (
        <div className="support-area">
            <header>
                <h1>Centro de Suporte</h1>
                <h2>Perguntas Frequentes (FAQ)</h2>
            </header>

            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div className="faq-item" key={index}>
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            <h3>{faq.question}</h3>
                            <span>{faq.open ? '-' : '+'}</span>
                        </div>
                        {faq.open && <div className="faq-answer"><p>{faq.answer}</p></div>}
                    </div>
                ))}
            </div>
        </div>
    );
}