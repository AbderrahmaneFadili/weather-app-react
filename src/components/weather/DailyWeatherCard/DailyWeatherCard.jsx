import React from "react";
import {
  DailyWeatherCardWrapper,
  DailyWeatherDate,
  DailyWeatherIcon,
  DailyWeatherMinMax,
} from "./DailyWeatherCard.styles";

const DailyWeatherCard = ({ date, icon, minMax }) => {
  return (
    <DailyWeatherCardWrapper>
      <DailyWeatherDate>{date}</DailyWeatherDate>
      <DailyWeatherIcon src={icon} />
      <DailyWeatherMinMax>{minMax}</DailyWeatherMinMax>
    </DailyWeatherCardWrapper>
  );
};

export default DailyWeatherCard;
