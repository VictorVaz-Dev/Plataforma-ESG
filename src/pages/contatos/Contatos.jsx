import "./Contatos.css"
import InputForms from "../../components/inputForms/InputForms"
import Api from "../../services/AxiosConfig"
import React, {useState} from "react"


const Contatos = () => {
    //Vamos usar essas variaveis tanto para a API viacep quanto para enviar no nosso formulario
    const [cep, setCep] = useState('');
    const [Rua, setRua] = useState('');
    const [Bairro, setBairro] = useState('');
    const [Cidade, setCidade] = useState('');
    
    //Essas variaveis vamos utilizar somente para enviar as informações para o formulario
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [comentario, setComentario] = useState('');

    //Função para a api Viacep 
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

          console.log(Bairro);
          console.log(Rua);
          console.log(Cidade);
          console.log(cep);
      
    }

    //---------- Função para enviar as informações para o formulário -----------------------------//
    //Criando variavies que vão receber o id de cada input do formulario



  function pegarNome(e){
    setNome(e.target.value);
  }

  function pegarEmail(e){
    setEmail(e.target.value);
  }

  const pegarComentario = (e) => {
    setComentario(e.target.value);
  }

    
    return(
        <div className="divContatos">
            <div className="bodyContatos">
                <h1>Preencha seus dados para entrarmos em contato!</h1>
                    <InputForms label="Nome" type="text" placeholder="Digite seu nome" id="Nome"/>
                    <InputForms label="E-mail" type="email" placeholder="Digite seu e-mail" id="Email" value={email} onchange="pegarEmail(event)"/>
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
                    <InputForms label="Rua" type="text" placeholder="Digite sua Rua" value={Rua} id="Rua" onInput={(e) => setRua(e.target.value)}/>
                    <InputForms label="Bairro" type="text" placeholder="Digite seu Bairro" value={Bairro} id="Bairro" onInput={(e) => setBairro(e.target.value)}/>
                    <InputForms label="Cidade" type="text" placeholder="Digite sua cidade" value={Cidade} id="Cidade" onInput={(e) => setCidade(e.target.value)}/>
                    <div className="inputComentario">
                        <label>Comentário</label>
                        <textarea name="Comentario" placeholder="Deixe sua dúvida aqui" cols="30" rows="5" id="Comentario" onChange="pegarComentario(event)"></textarea>
                    </div>
                <button onClick="enviarForms" className="botao-contatos">Pronto!</button>
            </div>
        </div>
    )
}

export default Contatos