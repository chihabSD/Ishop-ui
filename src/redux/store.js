import {configureStore} from '@reduxjs/toolkit';

import testReducer from './reducers/test';
import profileReducer from './reducers/profile';


export default configureStore({
  reducer: {
    testReducer,
    profileReducer
   
  },
});