import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../layout/Loader/Loader";
import DailyWeatherCard from "../DailyWeatherCard/DailyWeatherCard";
import { DailyWeatherWrapper } from "./DailyWeather.styles";
import { getDailyWeatherByCoords } from "../../../store/actions/dailyWeatherActions";

const DailyWeather = () => {
  const { currentWeatherResult, dailyWeahterResult } = useSelector((state) => ({
    currentWeatherResult: state.currentWeatherReducer,
    dailyWeahterResult: state.dailyWeahterReducer,
  }));

  const dispatch = useDispatch();
  const { currentWeather, loading } = currentWeatherResult;

  useEffect(() => {
    if (currentWeather !== null) {
      dispatch(
        getDailyWeatherByCoords(
          currentWeather.coord.lat,
          currentWeather.coord.lon,
        ),
      );
    }
  }, [currentWeather]);

  const { dailyWeather } = dailyWeahterResult;

  return (
    <DailyWeatherWrapper>
      {loading && <Loader />}
      {dailyWeather &&
        dailyWeather.map((dw, i) => (
          <DailyWeatherCard {...dw} key={i.toString()} />
        ))}
    </DailyWeatherWrapper>
  );
};

export default DailyWeather;
