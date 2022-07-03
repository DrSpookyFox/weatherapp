import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

let weatherForecast = async function (cityName = "columbus") {
  const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.APPID}`;

  const data = await fetch(apiUrl).then((response) => response.json());

  const days = [];

  for (let i = 0; i < data.list.length; i += 8) {
    days.push(data.list[i]);
  }

  return days;
};

const fiveDay = await weatherForecast();

const currentDay = function (today) {
  const date = today.dt_txt;
  const weather = today.weather[0];
  const weatherIcon = weather.icon;
  const humidity = today.main.humidity;
  const windy = today.wind.speed;
  const temperature = today.main.temp;

  //    html inject
};

currentDay(fiveDay[0]);

const forecast = function (fiveDay) {
  for (let i = 0; i < fiveDay.length; i++) {
    const date = fiveDay[i].dt_txt;
    const weather = fiveDay[i].weather[0];
    const weatherIcon = weather.icon;
    const humidity = fiveDay[i].main.humidity;
    const windy = fiveDay[i].wind.speed;
    const temperature = fiveDay[i].main.temp;
  }
};

forecast(fiveDay);
