import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//npm install react-router-dom@5

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" components={Home} exact>
            <Home />
          </Route>
          {/* <Route path="/about" compoent={About} exact>
            <About />
          </Route>
          <Route path="/skills" compoent={Skills} exact>
            <Skills />
          </Route>
          <Route path="/contact" compoent={Contact} exact>
            <Contact />
          </Route>
          <Route path="/services" compoent={Services} exact>
            <Services />
          </Route> */}
        </Switch>
      </Router>
    </>
  )
}

export default App
