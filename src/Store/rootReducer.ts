import { combineReducers } from "redux";
import authReducer from "./AuthPage/reducer";
import profileReducer from "./ProfileEditingPage/reducer";
import photoReducer from "./UserPhoto/reducer";

const reducer = combineReducers({
  user: profileReducer,
  auth: authReducer,
  photo: photoReducer,
});

export default reducer;
