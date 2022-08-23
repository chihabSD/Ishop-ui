import {configureStore} from '@reduxjs/toolkit';

import profileReducer from './reducers/profile';
import loadingReducer from './reducers/loader';
import pageReducer from './reducers/page';
import  modalReducer  from './reducers/modals';


export default configureStore({
  reducer: {

    profileReducer, loadingReducer, pageReducer
   
    , modalReducer
  },
});