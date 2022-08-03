import { useDispatch, useSelector } from "react-redux";
const useRedux = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const {
    testReducer: { username },
  } = state;
  return {
    dispatch,

    username,
  };
};

export { useRedux };
