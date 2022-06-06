import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import donorReducer from "./donorReducer";
// import clubReducer from "./clubReducer";
// import gameReducer from './gameReducer';
// import betReducer from './betReducer';
// import TransactionReducer from './TransactionReducer';
// import balanceTransferReducer from './balanceTransferReducer';

const { combineReducers } = require("redux");

const reducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  donor: donorReducer,
});
export default reducer;
