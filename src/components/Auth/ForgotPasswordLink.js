
import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPasswordLink = () => {
  return (
    <div style={{ marginTop: "20px" }}>
    <Link
      to="/forgotpassword"
      style={{
        textDecoration: "underline",
        color: "grey",
        fontSize: "1rem",
        marginTop: "30px",
      }}
    >
      <span>Forgot your password ?</span>
    </Link>
  </div>
  )
}

export default ForgotPasswordLink