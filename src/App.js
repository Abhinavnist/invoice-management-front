import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage/LoginPage"
import HomePage from "./pages/HomePage/HomePage" // Import your homepage or other components
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define your routes here */}
          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route
            path="/home"
            element={<HomePage />}
          />{" "}
          {/* Example for home page */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
