import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [message, setMessage] = useState('');  // Armazena a mensagem atual
  const [chat, setChat] = useState([]);  // Armazena as conversas (mensagens do usuário e bot)
  const [loading, setLoading] = useState(false);  // Para mostrar que o bot está processando

  // Função para enviar mensagem ao chatbot
  const [isLoading, setIsLoading] = useState(false);

const sendMessage = async () => {
  if (message.trim() === '' || isLoading) return;

  setIsLoading(true);  // Desativa o botão durante o processamento
  const userMessage = { text: message, sender: 'user' };
  setChat([...chat, userMessage]);

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const botMessage = { text: response.data.choices[0].message.content, sender: 'bot' };
    setChat([...chat, userMessage, botMessage]);

  } catch (error) {
    console.error('Erro ao enviar mensagem:', error);
  }

  setIsLoading(false);  // Reativa o botão após o processamento
  setMessage('');
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
        onKeyPress={(e) => (e.key === 'Enter' ? sendMessage() : null)}  // Envia a mensagem ao pressionar Enter
      />
      <button style={styles.button} onClick={sendMessage}>Send</button>
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
