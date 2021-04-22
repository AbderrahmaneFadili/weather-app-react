import {
  GET_DAILY_WEATHER_SUCC,
  GET_DAILY_WEATHER_START,
  GET_DAILY_WEATHER_FAIL,
} from "../types/dailyWeatherTypes";

const initialState = {
  loading: false,
  error: null,
  dailyWeather: null,
};

const dailyWeahterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DAILY_WEATHER_START:
      return {
        ...state,
        loading: true,
        error: null,
        dailyWeather: null,
      };

    case GET_DAILY_WEATHER_SUCC:
      return {
        ...state,
        loading: false,
        error: null,
        dailyWeather: action.payload.daily,
      };

    case GET_DAILY_WEATHER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        dailyWeather: null,
      };

    default:
      return state;
  }
};

export default dailyWeahterReducer;
