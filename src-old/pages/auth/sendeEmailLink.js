import setAutheader from "../../api/setAutheader";
import { auth } from "../../firebase";
export const  sendEmailLink =   async  (details) => {
    const {email, password} = details
    try {
        const data = await auth.signInWithEmailAndPassword(email, password);
        const { user } = data;
        const idTokenResult = await user.getIdTokenResult();
  
        setAutheader(idTokenResult.token )
        const details =  {user, idTokenResult}
        return details 

  
        // history.push("/");
      } catch (error) {
        return error
        // toast.error(error.message);
        // dispatch(clearLoading());
      }
}

