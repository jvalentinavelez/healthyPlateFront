import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header.js";
import Receta from "./components/Receta/Receta.js";
import Recetas from "./components/Recetas/Recetas.js"

function App() {
  return (
    <> 
      <Header></Header>
      <Receta></Receta>
      <Recetas></Recetas>
      
    </>
  )
}

export default App;
