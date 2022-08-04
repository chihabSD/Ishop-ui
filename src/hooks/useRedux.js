import { useDispatch, useSelector } from "react-redux";
const useRedux = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const {
    profileReducer: { user, authenticated },
    loadingReducer: { loading },
  } = state;
  return {
    dispatch,

    user,
    loading,
    authenticated
  };
};

export { useRedux };
