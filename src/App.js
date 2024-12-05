import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Deshboard from "./components/Deshboard/Deshboard";
import Invoicedetails from "./components/Deshboard/Invoicedetails";
import LoginPage from "./pages/LoginPage/LoginPage";
import ChangePasswordForm from "./components/LoginForm/ChangePasswordForm";
import EnterOtpForm from "./components/LoginForm/EnterOtpForm";
import ForgetPasswordForm from "./components/LoginForm/ForgetPasswordForm ";
import LoginForm from "./components/LoginForm/LoginForm";
import SenityPassed from "./components/Deshboard/SenityPassed";
import SenityFailed from "./components/Deshboard/SenityFailed";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />}>
            <Route path="login" element={<LoginForm />} />
            <Route path="changepassword" element={<ChangePasswordForm />} />
            <Route path="forgotpassword" element={<ForgetPasswordForm />} />
            <Route path="enterotp" element={<EnterOtpForm />} />
          </Route>

          <Route path="/" element={<Deshboard />}>
            <Route path="invoicedetails" element={<Invoicedetails />} />
            <Route path="senityPassed" element={<SenityPassed />} />
            <Route path="senityFailed" element={<SenityFailed />} />


          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
