import * as Types from "../actions/types";
const init = [];

const donorReducer = (state = init, action) => {
  switch (action.type) {
    case Types.SET_DONOR:
      return action.payload.donor;
    case Types.USER_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
export default donorReducer;
