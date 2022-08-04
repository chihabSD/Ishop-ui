import React, { useState } from "react";
import { auth } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "antd";
import { MailOutlined } from "@ant-design/icons";

const Login = () => {
  const data = {
    email: "",
    password: "",
  };
  const [inputs, setInputs] = useState(data);
  const { email, password } = inputs;
  const handleInputs = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  const loginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          placeholder="Email address"
          name="email"
          value={email}
          className="form-control"
          onChange={handleInputs}
          autoFocus
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          className="form-control"
          onChange={handleInputs}
        />
      </div>
      <br />

      <Button
        icon={<MailOutlined />}
        block
        shape="round"
        type="primary"
        className="mb-3"
        size="large"
        disabled={!email || password.length < 6}
        onClick={handleSubmit}
      >
        Login with Email/Password
      </Button>
      {/* <button type="submit" className="btn  btn-raised">
        Login
      </button> */}
    </form>
  );
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1> Login</h1>
          {loginForm()}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
