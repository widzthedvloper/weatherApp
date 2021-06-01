// eslint-disable-next-line import/no-cycle
import consumeData from './data';

const renderInfo = (temperature, city, humidity, minTemp, maxTemp, description) => {
  const temp = document.getElementById('main-temp');
  temp.innerHTML = temperature;

  const theCity = document.getElementById('city');
  theCity.innerHTML = city;

  const theHumidity = document.getElementById('humidity');
  theHumidity.innerHTML = humidity;

  const theMinTemp = document.getElementById('temp_min');
  theMinTemp.innerHTML = minTemp;

  const theMaxTemp = document.getElementById('temp_max');
  theMaxTemp.innerHTML = maxTemp;

  const theDescription = document.getElementById('weather-description');
  theDescription.innerHTML = description;
};

const findWeather = () => {
  document.getElementById('button').onclick = () => {
    const city = document.getElementById('inputLocation').Value;
    consumeData(city);
  };
};

export { renderInfo, findWeather };