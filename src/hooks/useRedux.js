import { useDispatch, useSelector } from "react-redux";
const useRedux = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const {
   profileReducer: { user },
  } = state;
  return {
    dispatch,

   
    user
  };
};

export { useRedux };
