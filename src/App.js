import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from "./Layout";
import MiEspacio from "./components/MiEspacio/MiEspacio.js";
// <<<<<<< HEAD
import MiPerfil from "./components/MiPerfil/MiPerfil.js";

// =======
import Recetas from "./components/Recetas/Recetas.js"
// >>>>>>> bed6159a384df8a3e224d506298dea09ecc49f55

function App() {
  return (
    <Router>
      <Switch>
        <Layout exact path="/">
          <Recetas></Recetas>
        </Layout>
        <Layout path="/MiEspacio">
          <MiEspacio />
        </Layout>
        <Layout path="/RecetasGuardadas">
        </Layout>
        <Layout path="/AlimentacionDia">
        </Layout>
        <Layout path="/MiPerfil">
          <MiPerfil />
        </Layout>
      </Switch>
    </Router>
  )
}

export default App;
