import React, { useState } from "react"
import { TextField, Button, Box } from "@mui/material"
import "./LoginForm.css" // Reusing the same styles as LoginForm
import Logo from "../../assets/images/logo.png"
import {useNavigate} from "react-router-dom"
const ForgetPasswordForm = () => {
  const [email, setEmail] = useState("")
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/enterotp")

  }
  const handlelogin=()=>{
    navigate("/login")
  }

  return (
    <Box className="login-container">
      <Box className="login-form">
        <div className="logo">
          <img
          className="w-[200px]"
            src={Logo}
            alt="logo"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <TextField
            className="textarea"
            placeholder="Enter your email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            className="login-button"
          >
            Send OTP
          </Button>
          <Button
            className="back-to-login"
            onClick={handlelogin}
          >
            Back to Login
          </Button>
        </form>
      </Box>
    </Box>
  )
}

export default ForgetPasswordForm
