import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRedux } from "../../hooks/useRedux";
import { _firebaseLogin, _updateOrCreateUser } from "../../redux/actions/auth";
const RegisterComplete = ({ history }) => {

  const {dispatch} = useRedux()
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
    if (!email || !password) {
      toast.error("Email or password is missing");
      return;
    }

    if(password.length < 6) {

      toast.error("Password must be at least 6 characters long", toast.name);
      return;
    
    }
    const url = window.location.href;

    try {
      // sign with the email link that is sent during step 1 of registration
      const data = await auth.signInWithEmailLink(email, url);

      if (data.user.emailVerified) {
        // remove user from LS

        window.localStorage.removeItem("emailForRegistration");

        // get user id token from current user
        let user = auth.currentUser;

        // update password
        await user.updatePassword(password);

        // user token
        const idTokenResult = await user.getIdTokenResult();

        // Redux store
        dispatch(_updateOrCreateUser({token:idTokenResult.token,   emailVerified: user.emailVerified}))
       
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    setInputs({
      ...inputs,
      email: window.localStorage.getItem("emailForRegistration"),
    });
  }, []);
  const CompleteRegistrationForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder={email}
        name="email"
        value={email}
        className="form-control"
        autoFocus
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={handleInputs}
        className="form-control"
        autoFocus
      />
      <br />
      <button type="submit" className="btn  btn-raised">
        COMPLETE REGISTRATION
      </button>
    </form>
  );
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h3>Complete Registration</h3>
          {CompleteRegistrationForm()}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterComplete;
