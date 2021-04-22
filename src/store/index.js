import currentWeatherReducer from "./reducers/currentWeatherReducers";
import dailyWeahterReducer from "./reducers/dailyWeatherReducers";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  currentWeatherReducer,
  dailyWeahterReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
