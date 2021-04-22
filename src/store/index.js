import currentWeatherReducer from "./reducers/currentWeatherReducers";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  currentWeatherReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
