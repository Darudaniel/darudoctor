import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Layout from './components/Layout'
import About from './containers/About'
import Contact from './containers/Contact'
import Portfolio from './containers/Portfolio.jsx'
import NeonatalFluidCalculator from './containers/NeonatalFluidCalculator';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          {/* CONTAINERS */}
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />

          {/* APPS */}
          <Route exact path="/liquidos-neonatos" component={NeonatalFluidCalculator} />
          
          {/* DEFAULT */}
          <Route exact component={NeonatalFluidCalculator} />
        </Switch>
      </Layout>
  </Router>
  );
}

export default App;
