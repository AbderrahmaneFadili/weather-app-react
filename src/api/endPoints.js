import key from "./apiKey";

export const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${key}&units=metric`;

export const dailyWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall?appid=${key}&units=metric`;
