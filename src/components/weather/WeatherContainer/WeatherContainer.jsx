import React from "react";
import { Container } from "../../../themes/GlobalStyle";
import { WeatherWrapper } from "./WeatherContainer.styles";
import Locations from "../Locations/Loactions";
import WeatherCard from "../WeatherCard/WeatherCard";
import WeatherMap from "../WeatherMap/WeatherMap";
import DailyWeather from "../DailyWeather/DailyWeather";
import AddLocation from "../AddLocation/AddLocation";

const WeatherContainer = () => {
  return (
    <WeatherWrapper>
      <Container>
        <AddLocation />
      </Container>
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
