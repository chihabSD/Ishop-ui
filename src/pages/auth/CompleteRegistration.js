import React, { useState } from "react";
import { auth } from "../../firebase";
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const RegisterComplete = ({history}) => {
    console.log(history);
  
  const [email, setEmail] = useState("")
  const handleInputs = (e) => {
    setEmail(e.target.value)

  }
  const handleSubmit = async (e) => {

    e.preventDefault()
    console.log(email);
    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL, 
      handleCodeInApp : true
    }
    await auth.sendSignInLinkToEmail(email, config)
    toast.success(`Email is sent to ${email}. CLick the link to complete your registration.`)
    window.localStorage.setItem('emailForRegistration', email)
    
    setEmail("")
  }
  const registerForm = () => <form onSubmit={handleSubmit}>
    <input   type='email' placeholder="Email address" name="email" value={email} className="form-control" onChange={handleInputs} autoFocus/>
  <button type="submit" className="btn  btn-raised" > Register</button>
  </form>
  return (
    <div className="container p-5">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h1> Register</h1>
      {registerForm()}
      </div>
    </div>
    <ToastContainer />
    </div>
  );
};

export default RegisterComplete;
