const renderInfo = (temperature, city, humidity, minTemp, maxTemp, description) => {
  const temp = document.getElementById('main-temp');
  temp.innerHTML = temperature;
};