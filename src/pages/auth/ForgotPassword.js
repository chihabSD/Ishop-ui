import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRedux } from "../../hooks/useRedux";
const ForgotPassword = ({ history }) => {
  const { loading } = useRedux();
  const [email, setEmail] = useState("");

  const config = {
    url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT_URL,
    handleCodeInApp: true,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // sign with the email link that is sent during step 1 of registration
      await auth.sendPasswordResetEmail(email, config);
      setEmail("");
      toast.success("Check your email for password reset link");
      //   if (data.user.emailVerified) {
      //     // remove user from LS

      //     window.localStorage.removeItem("emailForRegistration");

      //     // get user id token from current user
      //     let user = auth.currentUser;

      //     // update password
      //     await user.updatePassword(password);

      //     // user token
      //     const idTokenResult = await user.getIdTokenResult();

      //     // Redux store

      //     console.log("user", user, "idtokenResult", idTokenResult);
      //     history.push("/");
      //     // redirect
      //   }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const ForgotPasswordForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Type your email"
        name="email"
        value={email}
        className="form-control"
        autoFocus
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <button type="submit" className="btn btn-raised" disabled={!email}>
        Submit
      </button>
    </form>
  );
  return (
    <div className="container col-md-6 offset-md-3 p-5">
      {loading ? <h4>Loading ...</h4> : <h4>Forgot Password ? </h4>}
      {ForgotPasswordForm()}
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
