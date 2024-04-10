import "./Contatos.css"
import InputForms from "../../components/inputForms/InputForms"
import Api from "../../services/AxiosConfig"
import React, {useState} from "react"

const Contatos = () => {
    const [cep, setCep] = useState('');
    const [Rua, setRua] = useState('');
    const [Bairro, setBairro] = useState('');
    const [Cidade, setCidade] = useState('');

    function buscarEndereco(cep){
        //Verificar se o CEP não está vazio antes de fazer a chamada da API
        if (cep.trim() === ''){
            //lida com o caso em que o CEP está vazio, se necessário
            return;
        }

        //Fazer a solicitação da API ViaCEP usando o valor atualizado do CEP
        Api.get(`${cep}/json/`)
          .then(response => {
            const dados = response.data;
            setRua(dados.logradouro);
            setBairro(dados.bairro);
            setCidade(dados.localidade);
          })
          .catch(error => {
            console.error('Erro ao buscar endereço:', error.message);
            // Lida com o erro, se necessário
          });
      
    }
    

    return(
        <div className="divContatos">
            <div className="bodyContatos">
                <h1>Preencha seus dados para entrarmos em contato!</h1>
                <InputForms label="Nome" type="text" placeholder="Digite seu nome" id="Nome"/>
                <InputForms label="E-mail" type="email" placeholder="Digite seu e-mail" id="Email"/>
                <InputForms label="CEP" 
                type="text" 
                placeholder="Digite seu CEP" 
                value={cep} 
                id="Cep"
                onInput={(e) => {
                    const novoCep = e.target.value;
                    setCep(novoCep);
                    buscarEndereco(novoCep);
                }}
                />
                <InputForms label="Rua" type="text" placeholder="Digite sua Rua" value={Rua} id="Rua"/>
                <InputForms label="Bairro" type="text" placeholder="Digite seu Bairro" value={Bairro} id="Bairro"/>
                <InputForms label="Cidade" type="text" placeholder="Digite sua cidade" value={Cidade} id="Cidade"/>
                <div className="inputComentario">
                    <label>Comentário</label>
                    <textarea name="Comentario" placeholder="Deixe sua dúvida aqui" cols="30" rows="5" id="Comentario"></textarea>
                </div>
                <button onClick="enviarForms" className="botao-contatos">Pronto!</button>
            </div>
        </div>
    )
}

export default Contatos