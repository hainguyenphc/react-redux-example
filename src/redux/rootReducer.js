import { useReducer } from "react";
import { combineReducers } from "redux";
import cakeReducer from "./cake/CakeReducer";
import songReducer from "./song/SongReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  song: songReducer,
  user: useReducer,
});

export default rootReducer;
