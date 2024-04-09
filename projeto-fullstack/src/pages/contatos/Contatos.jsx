import "./Contatos.css"
import InputForms from "../../components/inputForms/InputForms"

export default function Contatos(){
    return(
        <div className="divContatos">
            <div className="bodyContatos">
                <h1>Preencha seus dados para entrarmos em contato!</h1>
                <InputForms label="Nome" type="text" placeholder="Digite seu nome" id="nome"/>
                <InputForms label="E-mail" type="text" placeholder="Digite seu e-mail" id="email"/>
                <InputForms label="CEP" type="text" placeholder="Digite seu CEP" id="Cep"/>
                <InputForms label="Rua" type="text" placeholder="Digite sua Rua" id="Rua"/>
                <InputForms label="Bairro" type="text" placeholder="Digite seu Bairro" id="Bairro"/>
                <InputForms label="Cidade" type="text" placeholder="Digite sua cidade" id="Cidade"/>
                <div className="inputComentario">
                    <label>Comentário</label>
                    <textarea name="Comentario" placeholder="Deixe sua dúvida aqui" cols="30" rows="5" id="Comentario"></textarea>
                </div>
                <button onClick="enviarForms" className="botao-contatos">Pronto!</button>
            </div>
        </div>
    )
}