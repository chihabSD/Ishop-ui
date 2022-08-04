import { clearLoading, setLoading } from "../reducers/loader";
import {
  authenticateUser,
  clearUserInfo,
  getUserInfo,
  unauthenticateUser,
} from "../reducers/profile";

// Login
export const _login = (details) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      dispatch(getUserInfo(details));
      dispatch(authenticateUser());
      dispatch(clearLoading());
    } catch (e) {}
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
