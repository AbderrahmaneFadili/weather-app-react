import {
  GET_DAILY_WEATHER_SUCC,
  GET_DAILY_WEATHER_START,
  GET_DAILY_WEATHER_FAIL,
} from "../types/dailyWeatherTypes";

import { dailyWeatherUrl } from "../../api/endPoints";

const getDailyWeatherStart = () => ({ type: GET_DAILY_WEATHER_START });

const getDailyWeatherSucc = (payload) => ({
  type: GET_DAILY_WEATHER_SUCC,
  payload,
});

const getDailyWeatherFail = (payload) => ({
  type: GET_DAILY_WEATHER_FAIL,
  payload,
});

export const getDailyWeatherByCoords = (lat, lon) => (dispatch) => {
  dispatch(getDailyWeatherStart());
  fetch(`${dailyWeatherUrl}&lat=${lat}&lon=${lon}&exclude=hourly,minutely`)
    .then((res) => res.json())
    .then((data) => dispatch(getDailyWeatherSucc(data)))
    .catch((error) => dispatch(getDailyWeatherFail(error)));
};
