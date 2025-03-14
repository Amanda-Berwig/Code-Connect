import "./App.css";
import Sidebar from "./assets/components/Sidebar";
import BarraDePesquisa from "./assets/components/BarraDePesquisa";
import Filtro from "./assets/components/Filtro";
import Ordenacao from "./assets/components/Ordenação";
import Card from "./assets/components/Card";
import { useEffect, useState } from "react";

function App() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    // Faz uma requisição para a API usando fetch()
    fetch(
      "https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes"
    )
      // Quando a resposta chegar, converte o conteúdo para JSON
      .then((resposta) => resposta.json())

      // Quando os dados forem convertidos, atualiza o estado com os dados recebidos
      .then((dados) => setDados(dados));
  }, []); // O array vazio [] garante que o useEffect execute apenas uma vez, quando o componente for montado

  return (
    <div className="container">
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtro />
        <Ordenacao />
        <ul className="lista__cards">
          {/* Cria uma lista <ul> com a classe CSS "lista__cards" para estilização */}

          {
            dados // Verifica se "dados" contém informações
              ? dados.map((item, index) => (
                  /* Se "dados" existir, percorre a lista com .map() */

                  <li key={index}>
                    {/* Cria um item de lista <li> para cada elemento de "dados" */}
                    {/* Atributo "key" ajuda o React a identificar cada item de forma única */}
                    <Card
                      id={item.id}
                      imagemUrl={item.imagem_capa}
                      titulo={item.titulo}
                      resumo={item.resumo}
                      linhasDeCodigo={item.linhas_de_codigo}
                      compartilhamentos={item.compartilhamentos}
                      comentarios={item.comentarios}
                      usuario={item.usuario}
                    />
                    {/* Enviando props para o */}
                    {/* Renderiza o componente <Card/> dentro do <li> */}
                  </li>
                ))
              : null // Se "dados" for null ou undefined, não exibe nada
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
