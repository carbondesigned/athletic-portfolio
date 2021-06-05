import React from "react"
import styled from "styled-components"
import { Route, BrowserRouter as Router } from "react-router-dom"

//Theme
import Theme from "./Theme"

//Pages
import Home from "./pages/Home"

function App() {
  return (
    <div className="app">
      <Theme>
        <Router>
          <Route path="/">
            <Home />
          </Route>
        </Router>
      </Theme>
    </div>
  )
}

export default App
