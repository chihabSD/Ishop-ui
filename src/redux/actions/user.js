import { userApiHandler } from "../../api/user";
import { names } from "../../config/names";
import { clearLoading } from "../reducers/loader";
import { authenticateUser, getUserInfo } from "../reducers/profile";

export const _getCurrentProfile = () => {
  return async (dispatch) => {
    try {
      const { data } = await userApiHandler(names.GET_PROFILE);

      dispatch(getUserInfo(data.user));
      dispatch(authenticateUser());
      dispatch(clearLoading());
      console.log(data);
      //  dispatch(
      //   getUserInfo({
      //     name:data.name,
      //     email: data.email,
      //     token: details.token,
      //     emailVerified: details.emailVerified,
      //     role:data.role,
      //     _id:data._id

      //   })
      // );
    } catch (e) {
      console.log(e.response.data.error);
    }
  };
};
