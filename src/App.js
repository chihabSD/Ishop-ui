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

  return (
    <Provider store={store}>
      <Header />

<ParentContainer>

      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route exact path="/admindashboard" element={<AdminDashboard />} />
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
      </Routes>
</ParentContainer>
      <Footer />
    </Provider>
  );
};

export default App;
