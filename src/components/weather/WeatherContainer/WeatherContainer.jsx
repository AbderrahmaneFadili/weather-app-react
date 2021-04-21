import React from "react";
import { Container } from "../../../themes/GlobalStyle";
import { WeatherWrapper } from "./WeatherContainer.styles";
import Locations from "../Locations/Loactions";
import WeatherCard from "../WeatherCard/WeatherCard";
import WeatherMap from "../WeatherMap/WeatherMap";
import DailyWeather from "../DailyWeather/DailyWeather";

const WeatherContainer = () => {
  return (
    <WeatherWrapper>
      <Container>
        <Locations />
        <WeatherCard />
        <WeatherMap />
        <DailyWeather />
      </Container>
    </WeatherWrapper>
  );
};

export default WeatherContainer;
