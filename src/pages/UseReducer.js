import { useReducer } from "react";

const initialState = {
  count: 0,
  isShow: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREAMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREAMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "SHOW_HIDE":
      return {
        ...state,
        isShow: !state.isShow,
      };
    default:
      throw new Error();
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, isShow } = state;
  return (
    <div>
      <h1>ini adalah page useReducer</h1>
      <div>
        <button onClick={() => dispatch({ type: "INCREAMENT" })}>
          Increament
        </button>
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch({ type: "DECREAMENT" })}>
          Increament
        </button>
        <div>
          {isShow && <h1>SAYA TAMPIL</h1>}
          <button onClick={() => dispatch({ type: "SHOW_HIDE" })}>
            Show or Hide
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
