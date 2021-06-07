import React from "react"
import styled from "styled-components"
import {
  Route,
  Switch,
  useLocation,
  BrowserRouter as Router,
} from "react-router-dom"

//Theme
import Theme from "./Theme"

//Pages
import Home from "./pages/Home"
import PortfolioPage from "./pages/PortfolioPage"

function App() {
  return (
    <div className="app">
      <Theme>
        <Router>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/portfolio">
            <PortfolioPage />
          </Route>
        </Router>
      </Theme>
    </div>
  )
}

export default App
