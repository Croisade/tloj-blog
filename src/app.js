import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import About from './components/pages/About'
import Nav from './components/nav'
import Home from './components/pages/Home'
import { sections } from './data/data'

const App = () => (
  <Router>
    <div className="app">
      <Container maxWith="lg">
        <Nav sections={sections} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/technology" component={About} />
          <Route path="/politics" component={About} />
          <Route path="/health" component={About} />
          <Route path="/anime" component={About} />
          <Route path="/schedule" component={About} />
        </Switch>
      </Container>
    </div>
  </Router>
)

export default App
