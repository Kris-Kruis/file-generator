import fetch from 'node-fetch';
import DataRecord from '../../models/dataRecord';
import CitiesCoordinates from './citiesCoordinates';
import WeatherEnum from './weatherEnum';

// API - https://openweathermap.org/current

const WEATHER_PATH = 'https://api.openweathermap.org/data/2.5/weather';
const APP_ID = 'b12e0d7f11066a8a418d2b927ef97d04';
const LANG = 'ru';
const UNITS = 'metric';

export default async function getWeather(weather: WeatherEnum): Promise<DataRecord | null> {
  const cityCoordinates = CitiesCoordinates.get(weather);
  if (!cityCoordinates) {
    return null;
  }

  const { lat, lon } = cityCoordinates;

  try {
    const response = await fetch(`${WEATHER_PATH}?lat=${lat}&lon=${lon}&appid=${APP_ID}&lang=${LANG}&units=${UNITS}`, {
      method: 'get',
    });
    return response.json();
  } catch(error) {
    return null;
  }
}
