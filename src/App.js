import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from "./Layout";
import MiEspacio from "./components/MiEspacio/MiEspacio.js";

function App() {
  return (
    <Router>
      <Switch>
        <Layout exact path="/">
        </Layout>
        <Layout path="/MiEspacio">
          <MiEspacio />
        </Layout>
        <Layout path="/RecetasGuardadas">
        </Layout>
        <Layout path="/AlimentacionDia">
        </Layout>
        <Layout path="/MiPerfil">
        </Layout>
      </Switch>
    </Router>
  )
}

export default App;
