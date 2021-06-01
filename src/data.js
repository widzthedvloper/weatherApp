import renderInfo from './domManipulation';

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
      // eslint-disable-next-line no-console
      renderInfo(temperature, city, humidity, minTemp, maxTemp, description);
    })
    .catch((error) => error);
};

const consumeData = async (location) => {
  try {
    const resultApi = await apiInfo(location);
    return resultApi;
  } catch (error) {
    return error;
  }
};
export default consumeData;