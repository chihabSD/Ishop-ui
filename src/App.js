import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Header from "./components/nav/Header";
import RegisterComplete from "./pages/auth/CompleteRegistration";
import { Provider } from "react-redux";
import store from "./redux/store";
import { auth } from "./firebase";
import { _login } from "./redux/actions/auth";
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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register/complete" component={RegisterComplete} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Provider>
  );
};

export default App;
