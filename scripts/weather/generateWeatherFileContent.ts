import capitalizeFirstLetter from '../../src/helpers/capitalizeFirstLetter';
import DataRecord from '../../src/models/dataRecord';

export default function generateWeatherFileContent(
  weatherSchemeName: string,
  weatherSchemeData: DataRecord,
): string {
  const { id, name, weather, main } = weatherSchemeData;
  const description = capitalizeFirstLetter(weather[0].description);
  const temp = Math.round(main.temp);
  
  const fileContentLines: string[] = [
    `import WeatherModel from '../weatherModel';`,
    '',
    `const ${weatherSchemeName}: WeatherModel = {`,
    `    id: ${id},`,
    `    location: '${name}',`,
    `    description: '${description}',`,
    `    temp: ${temp},`,
    `};`,
    '',
    `export default ${weatherSchemeName};`,
  ];

  return fileContentLines.join('\n');
}
