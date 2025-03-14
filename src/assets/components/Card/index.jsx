import Capa from "./assets/capaa.svg";
import Code from "./assets/code.svg";
import Chat from "./assets/chat.svg";
import Share from "./assets/share.svg";
import Icone from "./assets/icone.svg";
import "./styles.css";

export default function Card() {
  return (
    <article className="card">
      <div className="card__imagem">
        <img src={Capa} alt="imagem do post" />
      </div>
      <div className="card__conteudo">
        <div className="conteudo__texto">
          <h3>Titulo do post</h3>
          <p>Resumo do post</p>
        </div>
        <div className="conteudo__rodape">
          <ul>
            <li>
              <img src={Code} alt="icone code" />
              100
            </li>
            <li>
              <img src={Share} alt="compartilhamentos" />
              120
            </li>
            <li>
              <img src={Chat} alt="chat" />
              50
            </li>
          </ul>
          <div className="rodape_usuario">
            <img src={Icone} alt="imagem do usuario" />
            @amanda
          </div>
        </div>
      </div>
    </article>
  );
}
