import {configureStore} from '@reduxjs/toolkit';

import profileReducer from './reducers/profile';
import loadingReducer from './reducers/loader';



export default configureStore({
  reducer: {

    profileReducer, loadingReducer
   
  },
});