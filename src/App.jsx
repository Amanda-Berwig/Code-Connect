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
        <Card />
      </div>
    </div>
  );
}

export default App;
