import * as firebase from 'firebase/auth'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
   
  };
firebase.initializeApp(firebaseConfig);
 
// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 