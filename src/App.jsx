import "./App.css";
import Sidebar from "./assets/components/Sidebar";
import BarraDePesquisa from "./assets/components/BarraDePesquisa";
import Filtro from "./assets/components/Filtro";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtro />
      </div>
    </div>
  );
}

export default App;
