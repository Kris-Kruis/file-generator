import fs from 'fs';
import path from 'path';

import generateWeatherFileContent from './generateWeatherFileContent';
import WeatherEnum from '../../src/api/weather/weatherEnum';
import getWeather from '../../src/api/weather/getWeather';
import capitalizeFirstLetter from '../../src/helpers/capitalizeFirstLetter';

const fileDescription = `/**
 * !!! НЕ РЕДАКТИРОВАТЬ !!!
 *
 * Данный файл генерируется автоматически из схемы api.openweathermap.org
 * Для обновления схемы, запустите команду "npm run generate:weather"
 * Для настройки отредактируйте файлы в /scripts/weather
 */

`;

export default async function generateWeatherScheme(weather: WeatherEnum): Promise<void> {
  try {
    const responseAboutWeather = await getWeather(weather);

    const fileName = `${weather}Weather`;
    const fullFileName = `${fileName}.ts`;
    const dest = path.join(__dirname, `../../src/api/weather/weatherInCities/${fullFileName}`);
    const weatherSchemeName = capitalizeFirstLetter(fileName);

    if (!responseAboutWeather) {
      fs.writeFileSync(dest, `${fileDescription}`);
      return;
    }

    const fileContent = generateWeatherFileContent(weatherSchemeName, responseAboutWeather);

    fs.writeFileSync(dest, `${fileDescription}${fileContent}`);
  } catch (error) {
    throw Error(`${error}`);
  }
}
