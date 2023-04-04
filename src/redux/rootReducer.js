import { combineReducers } from "redux";
import cakeReducer from "./cake/CakeReducer";
import songReducer from "./song/SongReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  song: songReducer,
});

export default rootReducer;
