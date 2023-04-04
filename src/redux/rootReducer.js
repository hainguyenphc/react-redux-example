import { combineReducers } from "redux";
import cakeReducer from "./cake/CakeReducer";
import songReducer from "./song/SongReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  song: songReducer,
  user: userReducer,
});

export default rootReducer;
