import React, { useState } from "react"
import styled from "styled-components"
import {
  Route,
  Switch,
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom"

//Theme
import Theme from "./Theme"

//Pages
import Home from "./pages/Home"
import PortfolioPage from "./pages/PortfolioPage"
import DetailPage from "./pages/DetailPage/DetailPage"
import Navbar from "./components/Navbar"
import Routine from "./pages/Routine"
import Reflection from "./pages/Reflection"

function App() {
  return (
    <div className="app">
      <Theme>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/portfolio" exact>
              <PortfolioPage />
            </Route>
            <Route path="/portfolio/:id">
              <DetailPage />
            </Route>
            <Route path="/routine">
              <Routine />
            </Route>
            <Route to="/reflection">
              <Reflection />
            </Route>
          </Switch>
        </Router>
      </Theme>
    </div>
  )
}

export default App
