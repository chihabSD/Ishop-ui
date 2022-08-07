import axios from "axios";
import { authApiHandler } from "../../api/auth";
import { names } from "../../config/names";
import { clearLoading, setLoading } from "../reducers/loader";
import {
  authenticateUser,
  clearUserInfo,
  getUserInfo,
  unauthenticateUser,
} from "../reducers/profile";

// Login
export const _firebaseLogin = (details) => {
  console.log('_FIREBASELogin is called ', details);
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      dispatch(getUserInfo(details));
      dispatch(authenticateUser());
      dispatch(clearLoading());
    } catch (e) {}
  };
};


export const _updateOrCreateUser = (details, navigate ) => {
  return async (dispatch) => {
    try {
      const { data } = await authApiHandler(names.CREATEORUPDATEUSER, details.token);
    
         dispatch(
          getUserInfo({
            name:data.name, 
            email: data.email,
            token: details.token,
            emailVerified: details.emailVerified,
            role:data.role, 
            _id:data._id

          })
        );
      // setAuthHeader(token);
      // dispatch(success(token));
      // dispatch(getUserProfile());
    } catch (e) {
      // setTimeout(() => {
      //   dispatch(clearError());
      // }, 2000);
      // dispatch(toggleLoading());
      // dispatch(setError(e.response.data.error));
      console.log(e.response.data.error);
    }
  };
};

export const _nativeLogin = (details ) => {
  return async (dispatch) => {
    try {
      console.log(details);
      // const { data } = await authApiHandler(names.LOGIN, details);
      // setAuthHeader(token);
      // dispatch(success(token));
      // dispatch(getUserProfile());
    } catch (e) {
      // setTimeout(() => {
      //   dispatch(clearError());
      // }, 2000);
      // dispatch(toggleLoading());
      // dispatch(setError(e.response.data.error));
      console.log(e.response.data.error);
    }
  };
};

// Logout
export const _logout = () => {
  return async (dispatch) => {
    try {
      dispatch(clearUserInfo());
      dispatch(unauthenticateUser());
    } catch (e) {}
  };
};
