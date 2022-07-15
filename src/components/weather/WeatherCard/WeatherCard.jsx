import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  WeatherCardWrapper,
  WeatherDate,
  TemperatureImage,
  TemperatureContainer,
  Temperature,
  WeatherInfo,
  WeatherInfoItem,
  Info,
  Value,
  Name,
} from "./WeatherCard.styles";

import { getCurrentWeatherByCoord } from "../../../store/actions/currentWeatherActions";
import moment from "moment";
import Loader from "../../layout/Loader/Loader";

const WeatherCard = () => {
  //selector for selecting data from reducers
  const { loading, currentWeather } = useSelector(
    (state) => state.currentWeatherReducer,
  );

  //disptach for dispatching action to reducer
  const dispatch = useDispatch();

  useEffect(() => {
    //get the current location position
    window.navigator.geolocation.getCurrentPosition(
      (s) => {
        //dispatch the action
        dispatch(
          getCurrentWeatherByCoord(s.coords.latitude, s.coords.longitude),
        );
      },
      null,
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 },
    );
  }, [dispatch]);

  return (
    <WeatherCardWrapper>
      {loading && <Loader />}
      {currentWeather !== null && currentWeather.message === undefined && (
        <>
          <WeatherDate>
            {moment(new Date(currentWeather.dt * 1000)).format(
              "MMMM D  YYYY, hh:mm a",
            )}
          </WeatherDate>
          <Name>{currentWeather.name}</Name>
          <TemperatureContainer>
            <TemperatureImage
              src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
            />

            <Temperature>{Math.floor(currentWeather.main.temp)}°C</Temperature>
          </TemperatureContainer>
          <WeatherInfo>
            <WeatherInfoItem>
              <Info>Feels Like :</Info>
              <Value>{Math.floor(currentWeather.main.feels_like)}°C</Value>
            </WeatherInfoItem>

            <WeatherInfoItem>
              <Info>Humidity :</Info>
              <Value>{currentWeather.main.humidity}%</Value>
            </WeatherInfoItem>

            <WeatherInfoItem>
              <Info>Visibility :</Info>
              <Value>{(currentWeather.visibility / 1000).toFixed(1)}km</Value>
            </WeatherInfoItem>

            <WeatherInfoItem>
              <Info>Pressure :</Info>
              <Value>{currentWeather.main.pressure} hPa</Value>
            </WeatherInfoItem>
          </WeatherInfo>
        </>
      )}
    </WeatherCardWrapper>
  );
};

export default WeatherCard;
