import {
  GET_CURRENT_WEATHER_START,
  GET_CURRENT_WEATHER_SUCC,
  GET_CURRENT_WEATHER_FAIL,
} from "../types/currentWeatherTypes";

const initialState = {
  loading: false,
  currentWeather: null,
  error: null,
};

const currentWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_WEATHER_START:
      return {
        ...state,
        loading: true,
        currentWeather: null,
        error: null,
      };
    case GET_CURRENT_WEATHER_SUCC:
      return {
        ...state,
        loading: false,
        currentWeather: action.payload,
        error: null,
      };
    case GET_CURRENT_WEATHER_FAIL:
      return {
        ...state,
        loading: false,
        currentWeather: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default currentWeatherReducer;
