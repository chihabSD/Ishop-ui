import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Header from "./components/nav/Header";
import RegisterComplete from "./pages/auth/CompleteRegistration";
import { Provider } from "react-redux";
import store from "./redux/store";
import { auth } from "./firebase";
import { _login } from "./redux/actions/auth";
import ForgotPassword from "./pages/auth/ForgotPassword";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
const App = () => {
   useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if(user){
        const idTokenResult = await user.getIdTokenResult()

      // dispatch()
      const {email, emailVerified} = user

    store.dispatch(_login({email, idTokenResult, emailVerified }))
      }
    })
    return () => unsubscribe()
  }, [])
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route exact path="/" element={<Home />} />
        </Route>

        <Route element={<PublicRoutes />}>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/forgot/password" component={ForgotPassword} />
          <Route exact path="/register/complete" component={RegisterComplete} />
          <Route exact path="/register" component={Register} />
        </Route>
      </Routes>
    </Provider>
  );
};

export default App;
