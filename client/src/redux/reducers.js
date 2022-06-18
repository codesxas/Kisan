import { combineReducers } from "redux";

import PostReducer from "./contacts/reducer";

const rootReducer = combineReducers({
  PostReducer,
});

export default rootReducer;