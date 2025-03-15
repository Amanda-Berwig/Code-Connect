import "./App.css";
import Sidebar from "./assets/components/Sidebar";
import BarraDePesquisa from "./assets/components/BarraDePesquisa";
import Filtro from "./assets/components/Filtro";
import Ordenacao from "./assets/components/Ordenação";
import Card from "./assets/components/Card";
import { useEffect, useState } from "react";

const tagsEstaticas = ["programacao", "frontend", "html", "css", "javascript"];

function App() {
  const [dados, setDados] = useState([]);
  const [tagsSelecionadas, setTagsSelecionadas] = useState([]); // Estado das tags escolhidas
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

  const dadosFiltrados = tagsSelecionadas.length
    ? dados.filter((post) =>
        tagsSelecionadas.every((tag) => post.tags.includes(tag))
      )
    : dados;

  return (
    <div className="container">
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtro
          tags={tagsEstaticas}
          tagsSelecionadas={tagsSelecionadas}
          setTagsSelecionadas={setTagsSelecionadas}
        />
        <Ordenacao />
        <ul className="lista__cards">
          {dadosFiltrados.length > 0 ? (
            dadosFiltrados.map((item, index) => (
              <li key={index}>
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
              </li>
            ))
          ) : (
            <p>Nenhum post encontrado.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
