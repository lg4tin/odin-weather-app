/*eslint-disable*/

//MODEL

async function getWeather(city) {

  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=01e585a4ff61420c823232424231610&q=${city}`, {mode: 'cors'})
    
    const weatherData = await response.json();
    const data = Object.entries(weatherData.current);
    const locationData = Object.entries(weatherData.location);

    let newArray = siftData(data);
    const dataWeNeed = newArray.map(i => i[1]);

    let locationArray = siftData2(locationData);
    const locationDataWeNeed = locationArray.map(i => i[1]);

    displayWeather(dataWeNeed[1], dataWeNeed[0], dataWeNeed[2], dataWeNeed[3], dataWeNeed[4], locationDataWeNeed[0], locationDataWeNeed[1]);

    switchTemp(dataWeNeed[1])
  
    return dataWeNeed;
  } catch(err) {
    content.textContent = 'Incorrect City';
  }
}

function siftData(obj) {
  let filteredObj = obj.filter(data => data[0] == 'temp_f' || data[0] == 'temp_c' || data[0] == 'feelslike_f' || data[0] == 'humidity' || data[0] == 'wind_mph');
  return filteredObj;
}

function siftData2(obj) {
  let filteredArray = obj.filter(data => data[0] === 'name' || data[0] == 'region');
  return filteredArray;
}

getWeather('Tampa')

//VIEW 

const content = document.querySelector('#content');

function displayWeather(a,b,c,d,e,f,g) {
  content.innerHTML = '';

  let header = document.createElement('h1');
  header.textContent = `${f}, ${g}`;

  let div = document.createElement('div');
  div.classList.add('box');

  let tempF = document.createElement('div');
  tempF.textContent = `The temperature in F is: ${a}`;
  div.appendChild(tempF);

  let tempC = document.createElement('div');
  tempC.textContent = `The temperature in C is: ${b}`;
  div.appendChild(tempC);

  let feelsLike = document.createElement('div');
  feelsLike.textContent = `Winds speed (mph): ${c}`;
  div.appendChild(feelsLike);

  let humidity = document.createElement('div');
  humidity.textContent = `Humidity is: ${d}`;
  div.appendChild(humidity);

  let wind = document.createElement('div');
  wind.textContent = `Feels like (F): ${e}`;
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

const img = document.querySelector('img');

function switchTemp(temp) {
  if(temp > 60) {
    img.src = 'weather-sunny.svg'
    content.style.backgroundColor = 'orange';
    document.body.style = `background-image: url('sun-clouds-2-1317115.jpg');`;
  } else if(temp <= 59 && temp >= 40) {
    img.src = 'sun-snowflake-variant.svg'
    content.style.backgroundColor = 'yellow';
    document.body.style = `background-image: url('bryan-rodriguez-BckdUV5HFlc-unsplash.jpg');`;
  } else {
    img.src = 'snowflake-alert.svg';
    content.style.backgroundColor = 'lightblue';
    document.body.style = `background-image: url('bryan-rodriguez-BckdUV5HFlc-unsplash.jpg');`;
  }
}