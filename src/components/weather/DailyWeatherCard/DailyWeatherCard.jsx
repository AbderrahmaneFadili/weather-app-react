import moment from "moment";
import React from "react";
import {
  DailyWeatherCardWrapper,
  DailyWeatherDate,
  DailyWeatherIcon,
  DailyWeatherMinMax,
} from "./DailyWeatherCard.styles";

const DailyWeatherCard = ({ dt, weather, temp: { min, max } }) => {
  return (
    <DailyWeatherCardWrapper>
      <DailyWeatherDate>
        {moment(new Date(dt * 1000)).format("MMM D, YY")}
      </DailyWeatherDate>
      <DailyWeatherIcon
        src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
      />
      <DailyWeatherMinMax>
        {Math.floor(min)} °C / {Math.floor(max)} °C
      </DailyWeatherMinMax>
    </DailyWeatherCardWrapper>
  );
};

export default DailyWeatherCard;
