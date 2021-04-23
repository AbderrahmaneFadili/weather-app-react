import currentWeatherReducer from "./reducers/currentWeatherReducers";
import dailyWeahterReducer from "./reducers/dailyWeatherReducers";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer, getFirebase } from "react-redux-firebase";

const rootReducer = combineReducers({
  currentWeatherReducer,
  dailyWeahterReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument(getFirebase)),
);

export default store;
