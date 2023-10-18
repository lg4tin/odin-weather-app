/*eslint-disable*/

//MODEL

async function getWeather(city) {

  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=01e585a4ff61420c823232424231610&q=${city}`, {mode: 'cors'})
    
    const weatherData = await response.json();
    const data = Object.entries(weatherData.current);

    let newArray = siftData(data);
    const dataWeNeed = newArray.map(i => i[1]);

    displayWeather(dataWeNeed[0], dataWeNeed[1], dataWeNeed[2], dataWeNeed[3], dataWeNeed[4])
  
    return dataWeNeed;
  } catch(err) {
    content.textContent = 'Incorrect City';
  }
}

getWeather('tampa')

function siftData(obj) {
  let filteredObj = obj.filter(data => data[0] == 'temp_f' || data[0] == 'temp_c' || data[0] == 'feelslike_f' || data[0] == 'humidity' || data[0] == 'wind_mph');
  return filteredObj;
}


//VIEW 

const content = document.querySelector('#content');

function displayWeather(a,b,c,d,f) {
  content.innerHTML = '';

  let header = document.createElement('h1');
  header.textContent = input.value;

  let div = document.createElement('div');
  div.classList.add('box');

  let tempF = document.createElement('div');
  tempF.textContent = `The temperature in F is: ${a}`;
  div.appendChild(tempF);

  let tempC = document.createElement('div');
  tempC.textContent = `The temperature in C is: ${b}`;
  div.appendChild(tempC);

  let feelsLike = document.createElement('div');
  feelsLike.textContent = `Feels like ${c}`;
  div.appendChild(feelsLike);

  let humidity = document.createElement('div');
  humidity.textContent = `Feels like ${d}`;
  div.appendChild(humidity);

  let wind = document.createElement('div');
  wind.textContent = `Feels like ${f}`;
  div.appendChild(wind);

  content.appendChild(header)
  content.appendChild(div);
}

//CONTROLLER

const button = document.querySelector('#submit');
const input = document.querySelector('#input')
button.addEventListener('click', () => {
  getWeather(input.value)
})