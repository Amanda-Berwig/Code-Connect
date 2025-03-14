import "./App.css";
import Sidebar from "./assets/components/Sidebar";
import BarraDePesquisa from "./assets/components/BarraDePesquisa";
import Filtro from "./assets/components/Filtro";
import Ordenacao from "./assets/components/Ordenação";
import Card from "./assets/components/Card";

function App() {
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
