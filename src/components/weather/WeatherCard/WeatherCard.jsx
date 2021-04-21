import React from "react";
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
} from "./WeatherCard.styles";

const WeatherCard = () => {
  return (
    <WeatherCardWrapper>
      <WeatherDate>10:20 am, Apr 21</WeatherDate>
      <TemperatureContainer>
        <TemperatureImage src={"http://openweathermap.org/img/wn/01d@2x.png"} />
        <Temperature>19°C</Temperature>
      </TemperatureContainer>
      <WeatherInfo>
        <WeatherInfoItem>
          <Info>Feels Like :</Info>
          <Value>18°C</Value>
        </WeatherInfoItem>

        <WeatherInfoItem>
          <Info>Humidity :</Info>
          <Value>60%</Value>
        </WeatherInfoItem>

        <WeatherInfoItem>
          <Info>Visibility :</Info>
          <Value>8 km</Value>
        </WeatherInfoItem>

        <WeatherInfoItem>
          <Info>Pressure :</Info>
          <Value>1019 hPa</Value>
        </WeatherInfoItem>
      </WeatherInfo>
    </WeatherCardWrapper>
  );
};

export default WeatherCard;
