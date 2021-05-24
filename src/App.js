import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Layout from './components/Layout'
import Home from './containers/Home';
import About from './containers/About'
import Contact from './containers/Contact'
import Portfolio from './containers/Portfolio.jsx'
import NeonatalFluidCalculator from './containers/NeonatalFluidCalculator';
import Services from './containers/Services'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          {/* CONTAINERS */}
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/services" component={Services} />

          {/* APPS */}
          <Route exact path="/liquidos-neonatos" component={NeonatalFluidCalculator} />
          
          {/* DEFAULT */}
          <Route exact component={Home} />
        </Switch>
      </Layout>
  </Router>
  );
}

export default App;
