import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate, useMatch, UNSAFE_LocationContext } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
// import Home from "./pages/Home/index";
import Header from "./components/header/Header";
import RegisterComplete from "./pages/auth/CompleteRegistration";
import { Provider } from "react-redux";
import store from "./redux/store";
import { auth } from "./firebase";
import { _firebaseLogin } from "./redux/actions/auth";
import ForgotPassword from "./pages/auth/ForgotPassword";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import { _getCurrentProfile } from "./redux/actions/user";
import setAutheader from "./api/setAutheader";
import ProtectedUserRoutes from "./routes/protectedUserRoutes";
import History from "./pages/History";
import "./index.scss";
import Footer from "./components/footer";
import { ParentContainer } from "./styles/Containers";
import Home from "./pages/home";
import '../src/fontAwesome';
import AccountSettings from "./pages/AccountSettings";
import NotFound from "./pages/404";
import Profile from "./pages/profile";
import Privacy from "./pages/privacy";
import Preferences from "./pages/Preferences";
import Security from "./pages/security";
import Address from "./pages/address";
import Cards from "./pages/cards";
import Emails from "./pages/emails";
import Orders from "./pages/orders";
import ReturnRefunds from "./pages/returnRefunds";
import Me from "./pages/Me";
const App = () => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();

        // dispatch()
        const { email, emailVerified } = user;
        setAutheader(idTokenResult.token);
        store.dispatch(_getCurrentProfile());
        // store.dispatch(_firebaseLogin({email,  token :idTokenResult.token, emailVerified }))
        // store.dispatch(_firebaseLogin({  name:res.data.name,
        //   email: res.data.email,
        //   token: idTokenResult.token,
        //   emailVerified: user.emailVerified,
        //   role:res.data.role,
        //   _id:res.data._id}))
      }
    });
    return () => unsubscribe();
  }, []);
  
  // const [currentLocation, setCurrentLocation] = useState('')
  //   const location = useLocation();
  // useEffect(() => {
  //   console.log(location);
  //   setCurrentLocation(location.pathname)

  // }, [location])




  return (
    <Provider store={store}>
      {/* <Header /> */}

        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route exact path="/account/preferences" element={<Preferences />} />
            <Route exact path="/account/settings/menu" element={<AccountSettings />} />
            <Route exact path="/account/emails" element={<Emails />} />
            <Route exact path="/account/address" element={<Address />} />
            <Route exact path="/account/cards" element={<Cards />} />
            <Route exact path="/account/security" element={<Security />} />
            <Route exact path="/account/privacy" element={<Privacy />} />
            <Route exact path="/account/orders" element={<Orders />} />
            <Route exact path="/account/profile" element={<Profile />} />

            <Route path="/account/profile">
                <Route index element={<Profile />} />
                <Route path=":userId" element={<Me />} />
              </Route>


            <Route exact path="/account/returns" element={<ReturnRefunds />} />
            <Route exact path="/" element={<Home />} />
            
          </Route>


          <Route element={<PublicRoutes />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/forgot/password" element={<ForgotPassword />} />
            <Route
              exact
              path="/register/complete"
              element={<RegisterComplete />}
            />
            <Route exact path="/register" element={<Register />} />
          </Route>
            <Route exact path="*" element={<NotFound />} />
        </Routes>
        {store.getState().pageReducer.currentPage !== '/notFound' ?     <Footer /> : null}
     
    </Provider>
  );
};

export default App;
