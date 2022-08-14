import React, { useEffect, useState } from "react";
import { auth, googleAuthProvider } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "antd";
import { GoogleOutlined, MailOutlined } from "@ant-design/icons";
import { useRedux } from "../../hooks/useRedux";
import { _firebaseLogin, _nativeLogin, _updateOrCreateUser } from "../../redux/actions/auth";
import { clearLoading } from "../../redux/reducers/loader";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { async } from "@firebase/util";
import axios from "axios";
import setAutheader from "../../api/setAutheader";
import { sendEmailLink } from "./sendeEmailLink";
import Header from "../../components/header/Header";
import HeaderTwo from "../../components/header/HeaderTwo";
import FormButton from "../../components/Inputs/FormButton";
const Login = ({ history }) => {
  const navigate = useNavigate
  const { dispatch, loading, user } = useRedux();
  const data = {
    email: "",
    password: "",
  };
  const [inputs, setInputs] = useState(data);
  const { email, password } = inputs;
  const handleInputs = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const roleBasedRedirect = (role) => {
    if(role === 'admin'){

     navigate('/admin') 
    }else {

     navigate('/user/history') 
    }
  }
  const googleLogin = async () => {
    try {
      const data = await auth.signInWithPopup(googleAuthProvider);
      const { user } = data;
      const idTokenResult = await user.getIdTokenResult();
      // console.log(user);
      // dispatch(_nativeLogin({ user: "chihafs" }));
      // Requst to our own backend



      dispatch(_updateOrCreateUser({token:idTokenResult.token,   emailVerified: user.emailVerified}))
     


    } catch (error) {
      toast.error(error.message);
      dispatch(clearLoading());
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const data = sendEmailLink({email, password})
   
    try {
      const data = await auth.signInWithEmailAndPassword(email, password);
      // const { user } = data;
      const idTokenResult = await data.user.getIdTokenResult();

      setAutheader(idTokenResult.token);
      dispatch(_updateOrCreateUser({token:idTokenResult.token,   emailVerified: data.user.emailVerified}), navigate)      

      // history.push("/");
      // roleBasedRedirect(user.role)
    } catch (error) {
      toast.error(error.message);
      dispatch(clearLoading());
    }
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
    </form>
  );
  return (
    <div>
      <HeaderTwo>
        <FormButton label="Register" textColor="#111"/>
      </HeaderTwo>
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {loading ? (
            <h4 className="text-denger">Loading....</h4>
          ) : (
            <h4>Login</h4>
          )}
          {loginForm()}
          <Button
            icon={<GoogleOutlined />}
            block
            shape="round"
            type="danger"
            className="mb-3"
            size="large"
            onClick={googleLogin}
          >
            Login with Google
          </Button>
          <Link to="/forgot/password" className="float-right text-danger">
            Forgot your password ?{" "}
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
    </div>
  );
};

export default Login;
