import React, { useState } from "react"
import { TextField, Button, Box } from "@mui/material"
import logo from "./../../assets/images/astha-brand-logo.png"
import "./LoginForm.css"
import apple from "./../../assets/images/apple-fill.svg"
import playstore from "./../../assets/images/google-play-icon.png"
import heart from "./../../assets/images/heart-pulse-fill.svg"
import { useNavigate } from "react-router-dom"
import axios from "axios"
// import { errorToast, successToast } from "../../utils/toastConfig"

const LoginForm = ({ showForgetPasswordForm }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!username || !password) {
      alert("Please provide both email and password")
      return
    }

    try {
      setIsLoading(true)

      // Make login API request
      const response = await axios.post(
        "https://invoice-management-backend.vercel.app/api/auth/login",
        {
          email: username,
          password,
        }
      )

      console.log("Login Response:", response.data) // Log the response to inspect the data

      const { token, email } = response.data

      if (!token || !email) {
        alert("Invalid credentials or unexpected response data")
        return
      }

      // Store token and role information in localStorage
      localStorage.setItem("token", token)

      // Navigate to home page after successful login
      alert("Login successful")
      setTimeout(() => {
        navigate("/invoicedetails")
      }, 1000)
    } catch (err) {
      console.error("Failed to login", err)
      alert("Failed to login")
    } finally {
      setIsLoading(false)
    }
  }
  const handleforgate=()=>{
    navigate("/forgotpassword")
  }

  return (
    <Box className="login-container">
      <Box className="login-form">
        <form onSubmit={handleSubmit}>
          <TextField
            className="textarea"
            placeholder="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            className="textarea"
            placeholder="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={isLoading}
            fullWidth
            className="login-button"
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
          <p
            className="forgot-password cursor-pointer"
            onClick={handleforgate}
          >
            Forgot Password?
          </p>
          <div className="download-links">
            <p>Available On</p>
            <section>
              <span className="flex flex-col items-center justify-center">
                <img
                  src={playstore}
                  alt=""
                />
                <a href="https://play.google.com/"> Play Store</a>{" "}
              </span>
              <span className="flex flex-col items-center justify-center">
                <img
                  src={apple}
                  alt=""
                />
                <a href="https://www.apple.com/in/app-store/">App Store</a>
              </span>
            </section>
          </div>
          <div className="footer">
            <p className="flex items-center justify-center">
              Made with{" "}
              <img
                src={heart}
                alt=""
              />{" "}
              in India
            </p>
            <p>Copyright © 2024 Aastha</p>
          </div> 
        </form>
      </Box>
    </Box>
  )
}

export default LoginForm
