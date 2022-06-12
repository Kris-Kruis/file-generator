import fs from 'fs';
import path from 'path';
import generateWeatherScheme from './generateWeatherScheme';
import WeatherEnum from '../../src/api/weather/weatherEnum';

(async () => {
  const weatherArr: WeatherEnum[] = Object.keys(WeatherEnum).map((name) => WeatherEnum[name])

  for (const weather of weatherArr) {
    await generateWeatherScheme(weather);
  }
})();
