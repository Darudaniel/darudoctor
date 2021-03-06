import './App.css';
import { useEffect } from 'react'
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
import Checkout from './containers/Checkout'
import Information from './containers/Information'
import Payment from './containers/Payment.jsx'
import Success from './containers/Success.jsx'

import AppContext from './context/AppContext'
import useInitialState from './hooks/useInitialState'
import ReactGA from 'react-ga'

//Implementacion de tag manager
import TagManager from 'react-gtm-module'
const tagManagerArgs = {
  gtmId: 'GTM-WN92JL5'
}
TagManager.initialize(tagManagerArgs)
// hasta aqui

function App() {
  useEffect(() => {
    ReactGA.initialize('UA-198971628-2')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  const initialState = useInitialState()


  return (
    <AppContext.Provider value={initialState}>
      <Router>
          <Layout>
            <Switch>
              {/* CONTAINERS */}
              <Route exact path="/home" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/checkout/information" component={Information} />
              <Route exact path="/checkout/payment" component={Payment} />
              <Route exact path="/checkout/success" component={Success} />

              {/* APPS */}
              <Route exact path="/liquidos-neonatos" component={NeonatalFluidCalculator} />
              
              {/* DEFAULT */}
              <Route exact component={Home} />
            </Switch>
          </Layout>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
