import React from "react";
import DailyWeatherCard from "../DailyWeatherCard/DailyWeatherCard";
import { DailyWeatherWrapper } from "./DailyWeather.styles";

const daily = [
  {
    date: "Thu, Apr 22",
    icon: "http://openweathermap.org/img/wn/01d@2x.png",
    minMax: "20/14 °C",
  },
  {
    date: "Thu, Apr 22",
    icon: "http://openweathermap.org/img/wn/01d@2x.png",
    minMax: "20/14 °C",
  },
  {
    date: "Thu, Apr 22",
    icon: "http://openweathermap.org/img/wn/01d@2x.png",
    minMax: "20/14 °C",
  },
  {
    date: "Thu, Apr 22",
    icon: "http://openweathermap.org/img/wn/01d@2x.png",
    minMax: "20/14 °C",
  },
  {
    date: "Thu, Apr 22",
    icon: "http://openweathermap.org/img/wn/01d@2x.png",
    minMax: "20/14 °C",
  },
  {
    date: "Thu, Apr 22",
    icon: "http://openweathermap.org/img/wn/01d@2x.png",
    minMax: "20/14 °C",
  },
  {
    date: "Thu, Apr 22",
    icon: "http://openweathermap.org/img/wn/01d@2x.png",
    minMax: "20/14 °C",
  },
  {
    date: "Thu, Apr 22",
    icon: "http://openweathermap.org/img/wn/01d@2x.png",
    minMax: "20/14 °C",
  },
];

const DailyWeather = () => {
  return (
    <DailyWeatherWrapper>
      {daily.map((d) => (
        <DailyWeatherCard {...d} />
      ))}
    </DailyWeatherWrapper>
  );
};

export default DailyWeather;
