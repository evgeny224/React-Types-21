import { combineReducers } from "redux";
import authReducer from "./AuthPage/reducer";
import profileReducer from "./ProfileEditingPage/reducer";

const reducer = combineReducers({
  user: profileReducer,
  auth: authReducer,
});

export default reducer;
