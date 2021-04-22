import key from "./apiKey";

export const currentWeather = `api.openweathermap.org/data/2.5/weather?appid${key}`;

export const dailyWeather = `https://api.openweathermap.org/data/2.5/onecall?appid${key}`;
