import React, { useState } from 'react';

const Chatbot = () => {
  const [message, setMessage] = useState(''); // Armazena a mensagem atual
  const [chat, setChat] = useState([]); // Armazena as conversas (mensagens do usuário e bot)
  const [loading, setLoading] = useState(false); // Para mostrar que o bot está processando

  // Função para enviar mensagem ao chatbot
  const sendMessage = () => {
    if (message.trim() === '') return;

    const userMessage = { text: message, sender: 'user' };
    setChat((prevChat) => [...prevChat, userMessage]);
    setLoading(true);

    // Respostas pré-programadas
    const botResponse = getBotResponse(message);
    const botMessage = { text: botResponse, sender: 'bot' };

    setTimeout(() => {
      setChat((prevChat) => [...prevChat, botMessage]);
      setLoading(false);
    }, 500); // Tempo simulado para resposta do bot

    setMessage('');
  };

  // Função para obter a resposta do bot baseada na mensagem do usuário
  const getBotResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes('olá') || lowerCaseMessage.includes('oi')) {
      return 'Olá! Como posso ajudar você hoje?';
    }
    if (lowerCaseMessage.includes('como você está')) {
      return 'Estou aqui para ajudar! Como posso assisti-lo?';
    }
    if (lowerCaseMessage.includes('ajuda')) {
      return 'Claro! Me diga com o que você precisa de ajuda.';
    }
    if (lowerCaseMessage.includes('obrigado')) {
      return 'De nada! Se precisar de mais alguma coisa, estou aqui.';
    }
    // Resposta padrão
    return 'Desculpe, não entendi. Pode reformular sua pergunta?';
  };

  return (
    <div style={styles.container}>
      <h1>Chatbot</h1>
      <div style={styles.chatBox}>
        {chat.map((msg, index) => (
          <div
            key={index}
            style={msg.sender === 'user' ? styles.userMsg : styles.botMsg}
          >
            {msg.text}
          </div>
        ))}
        {loading && <div style={styles.loading}>Bot está pensando...</div>}
      </div>
      <input
        style={styles.input}
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === 'Enter' ? sendMessage() : null)} // Envia a mensagem ao pressionar Enter
      />
      <button style={styles.button} onClick={sendMessage}>Enviar</button>
    </div>
  );
};

// Estilos em objeto JS
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    width: '50%',
    margin: '0 auto',
    textAlign: 'center',
  },
  chatBox: {
    border: '1px solid #ddd',
    padding: '10px',
    height: '300px',
    overflowY: 'scroll',
    marginBottom: '10px',
  },
  userMsg: {
    textAlign: 'right',
    color: 'blue',
  },
  botMsg: {
    textAlign: 'left',
    color: 'green',
  },
  loading: {
    fontStyle: 'italic',
    color: '#888',
  },
  input: {
    width: '80%',
    padding: '10px',
    marginRight: '10px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Chatbot;
