
import {authApiHandler} from '../../../api/auth';
import {_setError} from '../errors/setError';
import setAuthHeader from '../../../helpers/setAuthHeader';
import {clearError, setError} from '../../reducers/errors';
import {getUserProfile} from '../profile/getUserProfile';
import {clearLoading, toggleLoading} from '../../reducers/loading';
import {success} from './success';
import {names} from '../names';

// NATIVE LOGIN
export const _nativeLogin = (details, lang) => {
  return async dispatch => {
    dispatch(toggleLoading());
    try {
      const {
        data: {token},
      } = await authApiHandler(names.LOGIN, details);
      dispatch(toggleLoading());
      setAuthHeader(token);
      dispatch(success(token));
      dispatch(getUserProfile());
    } catch (e) {
      // setTimeout(() => {
      //   dispatch(clearError());
      // }, 2000);
      dispatch(toggleLoading());
      dispatch(setError(e.response.data.error));
    }
  };
};


