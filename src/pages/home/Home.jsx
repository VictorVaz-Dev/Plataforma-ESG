import "./Home.css"
import Link from "../../components/link/Link"
import imgPlanejamento from "../../assets/home/planejamento.jpg"
import imgFrontend from "../../assets/home/frontend.jpg"
import imgBackend from "../../assets/home/backend.jpg"
import imgImplantacao from "../../assets/home/implantacao.jpg"
import imgTestes from "../../assets/home/testes.jpg"
import Paragrafo from "../../components/paragrafo/Paragrafo"

export default function Home(){
    return(
    <div className="home">
        <div className="foto-fullstack-home">
        </div>
        
        <div className="titulo-home">
            <h1>Projeto Fullstack Fiap</h1>
            <h2> Desenvolvendo um Projeto Full Stack: Integrando Frontend e Backend</h2>
        </div>

        <div class="div-principal-home">
            <div className="conteudo-home">
                <div className="conteudo-paragrafo">
                    <Paragrafo titulo="1. Planejamento e Design:" text="Todo projeto full stack começa com uma fase de planejamento e design. Isso envolve a definição dos requisitos do sistema, a criação de wireframes e protótipos para a interface do usuário e a arquitetura geral do sistema. Durante esta fase, é crucial considerar as tecnologias a serem utilizadas tanto no frontend quanto no backend, garantindo que elas sejam compatíveis e atendam aos requisitos do projeto."/>
                    <img src={imgPlanejamento} alt="imagem planejamentos" />
                </div>
                <div className="conteudo-paragrafo">
                    <Paragrafo titulo="2. Desenvolvimento Frontend:" text="O frontend de um projeto full stack é a parte do aplicativo com a qual o usuário interage diretamente. Isso inclui elementos visuais, como layouts, botões, formulários e outros componentes de interface do usuário. As tecnologias comuns usadas para desenvolvimento frontend incluem HTML, CSS e JavaScript, juntamente com bibliotecas e frameworks populares, como React, Angular e Vue.js. Durante o desenvolvimento frontend, é importante garantir que o aplicativo seja responsivo e ofereça uma experiência de usuário agradável em diferentes dispositivos e tamanhos de tela."/>
                    <img src={imgFrontend} alt="Imagem frontend"/>
                </div>
                <div className="conteudo-paragrafo">
                    <Paragrafo titulo="3. Desenvolvimento Backend:" text="O backend de um projeto full stack é responsável por gerenciar a lógica de negócios, processar solicitações do cliente, acessar e manipular dados e fornecer respostas para o frontend. As tecnologias comuns usadas para desenvolvimento backend incluem linguagens de programação como Python, JavaScript (Node.js), Ruby e frameworks como Django, Flask, Express.js, Ruby on Rails, entre outros. Durante o desenvolvimento backend, é importante garantir que o aplicativo seja seguro, escalável e eficiente em termos de desempenho."/>
                    <img src={imgBackend} alt="imagem backend" />
                </div>
                <div className="conteudo-paragrafo">
                    <Paragrafo titulo="4. Integração e Testes:" text="Após o desenvolvimento do frontend e do backend, é hora de integrar essas partes em um sistema coeso. Isso envolve conectar o frontend ao backend por meio de APIs (interfaces de programação de aplicativos) e garantir que os dados sejam transmitidos corretamente entre as duas camadas. Além disso, é essencial realizar testes abrangentes para verificar se o aplicativo funciona conforme o esperado e se atende aos requisitos do cliente em termos de funcionalidade, desempenho e segurança."/>
                    <img src={imgTestes} alt="imagem testes" />
                </div>
                <div className="conteudo-paragrafo">
                    <Paragrafo titulo="5. Implantação e Manutenção:" text="Depois que o aplicativo foi integrado e testado com sucesso, ele está pronto para ser implantado em um ambiente de produção. Isso envolve configurar servidores, banco de dados e outros recursos necessários para hospedar o aplicativo online. Além disso, é importante implementar práticas de monitoramento e manutenção para garantir que o aplicativo continue funcionando de maneira eficaz e segura após o lançamento.Em resumo, um projeto full stack é uma jornada emocionante que envolve a colaboração de desenvolvedores frontend e backend para criar aplicativos web poderosos e funcionais. Com um planejamento cuidadoso, desenvolvimento diligente e testes abrangentes, é possível criar projetos full stack de alta qualidade que atendam às necessidades dos usuários e impulsionem o sucesso dos negócios."/>
                    <img src={imgImplantacao} alt="imagem implantação" />
                </div>
            </div>
        </div>
            <div className="botao-home">
                <Link to="/Contatos" label="Entre em contato" />
            </div>
    </div>
    )
}