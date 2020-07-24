import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/about'
import Privacy from './components/privacy'
import Nav from './components/nav'
import Taco from './components/taco'
import Home from './components/home'

const App = () => (
  <Router>
    <div className="app">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/taco" component={Taco} />
      </Switch>
    </div>
  </Router>
)

export default App
