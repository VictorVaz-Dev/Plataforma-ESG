import "./Contatos.css"
import InputForms from "../../components/inputForms/InputForms"

export default function Contatos(){
    return(
        <div className="divContatos">
            <div className="bodyContatos">
                <h1>Preencha seus dados para entrarmos em contato!</h1>
                <InputForms label="Nome" type="text" placeholder="Digite seu nome" id="nome"/>
                <InputForms label="Sobrenome" type="text" placeholder="Digite seu sobrenome" id="sobrenome" />
                <InputForms label="E-mail" type="text" placeholder="Digite seu e-mail para contato" id="contato" />
                <InputForms label="Número" type="text" placeholder="Digite número para contato" id="numero"/>
                <InputForms label="Localidade" type="text" placeholder="Digite a sua localidade" id="comentario"/>
                <div className="inputComentario">
                    <label>Comentário</label>
                    <textarea name="Comentario" placeholder="Deixe sua dúvida aqui" cols="30" rows="5"></textarea>
                </div>
                <button onClick="enviarForms" className="botao-contatos">Pronto!</button>
            </div>
        </div>
    )
}