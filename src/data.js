import { renderInfo, setAttribute, changeBackground } from './domManipulation';

const convertData = (temperature, city, humidity, minTemp, maxTemp, description, pressure, sym) => {
  const newTemp = (temperature * (9 / 5) + 32);
  const newCity = city;
  const newHumidity = humidity;
  const newMinTemp = (minTemp * (9 / 5) + 32);
  const newMaxTemp = (maxTemp * (9 / 5) + 32);
  const newDescrip = description;
  const newPressure = pressure;

  renderInfo(newTemp, newCity, newHumidity, newMinTemp, newMaxTemp, newDescrip, newPressure, sym);
};

const grabToggleButton = (temperature, city, humidity, minTemp, maxTemp, description, pressure) => {
  let count = 0;
  const myToggleButton = document.getElementById('toggleButton');
  myToggleButton.onclick = () => {
    if (count === 0) {
      renderInfo(temperature, city, humidity, minTemp, maxTemp, description, pressure, '&#8451;');
      count += 1;
    } else {
      convertData(temperature, city, humidity, minTemp, maxTemp, description, pressure, '&#8457;');
      count = 0;
    }
  };
};

const apiInfo = (location) => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=c7911001fbb406aa98e26c70ab98ec78`, { mode: 'cors' })
    .then((api) => (api.json()))
    .then((api) => {
      const temperature = Math.round((api.main.temp) - 273);
      const city = api.name;
      const { humidity } = api.main;
      const minTemp = Math.round((api.main.temp_min) - 273);
      const maxTemp = Math.round((api.main.temp_max) - 273);
      const { description } = api.weather[0];
      const { pressure } = api.main;
      changeBackground(temperature);
      grabToggleButton(temperature, city, humidity, minTemp, maxTemp, description, pressure);
      renderInfo(temperature, city, humidity, minTemp, maxTemp, description, pressure, '&#8451;');
    })
    .catch((error) => error);
};

const consumeData = async (location = 'San Francisco') => {
  try {
    const resultApi = await apiInfo(location);
    setAttribute();
    return resultApi;
  } catch (error) {
    return error;
  }
};
export default consumeData;