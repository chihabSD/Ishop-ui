import axios from 'axios';
import { names } from '../config/names';
import { SERVER_ENDPOINT } from '../config/urls';
// import {getHeader} from './header';
const auth = `${SERVER_ENDPOINT}`;

const {LOGIN, CREATEORUPDATEUSER,  SOCIAL_LOGIN_GOOGLE, LOGOUT, LEGACY_LOGIN, REGISTER} = names;


// handle auth
export const authApiHandler = async (name, details) => {

    console.log('update or create details in api', details);
//   const header = await getHeader();
  switch (name) {
    case CREATEORUPDATEUSER:
      return axios.post(`${auth}/createorupdateuser`, {}, { headers: { Authorization: `Bearer ${details}` } });
    // case LOGIN:
    //   return axios.post(`${auth}/login`, details, header);
    // case REGISTER:
    //   return axios.post(`${auth}/register`, details, header);

    // case LOGOUT:
    //   return axios.post(`${auth}/logout`, details, header);

    // case LEGACY_LOGIN:
    //   return axios.post(`${auth}/login/legacy`, details, header);

    // case SOCIAL_LOGIN_GOOGLE:
    //   return axios.post(`${auth}/login/google/auth`, details, header);

    default:
      break;
  }
};