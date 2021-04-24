import {
  GET_CURRENT_WEATHER_FAIL,
  GET_CURRENT_WEATHER_SUCC,
  GET_CURRENT_WEATHER_START,
} from "../types/currentWeatherTypes";

import { currentWeatherUrl } from "../../api/endPoints";

//get current weather start
export function getCurrentWeatherStart() {
  return {
    type: GET_CURRENT_WEATHER_START,
  };
}

//get current weather success
export function getCurrentWeatherSucc(payload) {
  return {
    type: GET_CURRENT_WEATHER_SUCC,
    payload,
  };
}

//get current weather Fail
export function getCurrentWeatherFail(payload) {
  return {
    type: GET_CURRENT_WEATHER_FAIL,
    payload,
  };
}

//get current weather action
export const getCurrentWeatherByCity = (city) => (dispatch) => {
  dispatch(getCurrentWeatherStart());
  fetch(`${currentWeatherUrl}&q=${city}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(getCurrentWeatherSucc(data));
    })
    .catch((err) => dispatch(getCurrentWeatherFail(err)));
};

//get current weather action
export const getCurrentWeatherByCoord = (lat, lon) => (dispatch) => {
  dispatch(getCurrentWeatherStart());
  fetch(`${currentWeatherUrl}&lat=${lat}&lon=${lon}`)
    .then((res) => res.json())
    .then((data) => dispatch(getCurrentWeatherSucc(data)))
    .catch((err) => dispatch(getCurrentWeatherFail(err)));
};
