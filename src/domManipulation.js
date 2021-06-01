const renderInfo = (temperature, city, humidity, minTemp, maxTemp, description, pressure) => {
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

  const thePressure = document.getElementById('pressure');
  thePressure.innerHTML = pressure;
};

const setAttribute = () => {
  const content = document.getElementById('content');
  content.setAttribute('class', 'content');
};

export { renderInfo, setAttribute };