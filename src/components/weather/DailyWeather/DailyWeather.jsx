import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../layout/Loader/Loader";
import DailyWeatherCard from "../DailyWeatherCard/DailyWeatherCard";
import { DailyWeatherWrapper } from "./DailyWeather.styles";
import { getDailyWeatherByCoords } from "../../../store/actions/dailyWeatherActions";

const DailyWeather = () => {
  const dispatch = useDispatch();
  const currentWeatherResult = useSelector(
    (state) => state.currentWeatherReducer,
  );

  const { currentWeather } = currentWeatherResult;

  useEffect(() => {
    if (currentWeather && currentWeather.coord !== undefined) {
      dispatch(
        getDailyWeatherByCoords(
          currentWeather.coord.lat,
          currentWeather.coord.lon,
        ),
      );
    }
  }, [currentWeather]);

  const dailyWeahterResult = useSelector((state) => state.dailyWeahterReducer);
  const { dailyWeather, loading } = dailyWeahterResult;

  return (
    <DailyWeatherWrapper>
      {loading && <Loader />}
      {dailyWeather &&
        currentWeather &&
        currentWeather.message === undefined &&
        dailyWeather.map((dw, i) => (
          <DailyWeatherCard {...dw} key={i.toString()} />
        ))}
    </DailyWeatherWrapper>
  );
};

export default DailyWeather;
