import { getUserInfo } from "../reducers/profile";


export const _login = (details ) => {
  return async dispatch => {
    try {
    console.log(details);
      dispatch(getUserInfo(details))
    } catch (e) {
  
    }
  };
};


