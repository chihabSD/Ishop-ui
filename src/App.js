import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate, useMatch } from "react-router-dom";
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
import AdminDashboard from "./pages/admin/AdminDashboard";
import Footer from "./components/footer";
import { ParentContainer } from "./styles/Containers";
import Home from "./pages/home";
import '../src/fontAwesome';
import AccountSettings from "./pages/AccountSettings";
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
  
//   const navigation = useNavigate()
//   const location = useLocation();
// console.log(navigation);
  return (
    <Provider store={store}>
      {/* <Header /> */}

      <ParentContainer>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route exact path="/admindashboard" element={<AdminDashboard />} />
            <Route exact path="/account/settings" element={<AccountSettings />} />
            <Route exact path="/" element={<Home />} />
          </Route>

          <Route element={<PublicRoutes />}>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/forgot/password" element={<ForgotPassword />} />
            <Route
              exact
              path="/register/complete"
              element={<RegisterComplete />}
            />
            <Route exact path="/register" element={<Register />} />
          </Route>
            <Route exact path="*" element={<div> Uh oh!
Sorry, the page you were looking for was not found.
Go back to Etsy.com </div>} />
        </Routes>
      </ParentContainer>
      <Footer />
    </Provider>
  );
};

export default App;
