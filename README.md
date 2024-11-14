# Генерация файлов по данным погоды

Приложение генерирует файлы о погоде на основе данных из api.openweathermap.org

Запускается с помощью команды
 
### `npm run generate:weather`

Создает файлы с данными по погоде в городах (на примере Санкт-Петербурга) в src/api/weather/weatherInCities

Скрипт лежит в scripts/weather/generateWeather.ts

Для генерации погоды по другим городам требуется добавить новый город в src\api\weather\weatherEnum.ts,
а в src\api\weather\citiesCoordinates.ts проставить его координаты
