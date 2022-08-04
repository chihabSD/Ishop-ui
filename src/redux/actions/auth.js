import { clearUserInfo, getUserInfo } from "../reducers/profile";


// Login
export const _login = (details ) => {
  return async dispatch => {
    try {
      dispatch(getUserInfo(details))
    } catch (e) {
  
    }
  };
};


// Logout
export const _logout = (  ) => {
  return async dispatch => {
    try {
      dispatch(clearUserInfo())
    
    } catch (e) {
  
    }
  };
};

