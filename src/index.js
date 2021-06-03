import './style.css';
import consumeData from './data';

const findWeather = () => {
  document.getElementById('button').onclick = () => {
    const city = document.getElementById('inputLocation').value;
    consumeData(city);
  };
};

findWeather();
consumeData();
