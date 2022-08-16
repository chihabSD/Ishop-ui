import axios from 'axios';
import { names } from '../config/names';
import { SERVER_ENDPOINT } from '../config/urls';
const auth = `${SERVER_ENDPOINT}`;

const {GET_PROFILE} = names;


export const userApiHandler = async (name, details) => {
  switch (name) {
    case GET_PROFILE:
      return axios.get(`${auth}/currentprofile`);
    default:
      break;
  }
};