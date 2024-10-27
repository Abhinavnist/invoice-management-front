import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage"; 
import Deshboard from "./components/Deshboard/Deshboard";
import Invoicedetails from "./components/Deshboard/Invoicedetails";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define your routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          
          <Route path="/" element={<Deshboard />}>
            <Route path="invoicedetails" element={<Invoicedetails />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
