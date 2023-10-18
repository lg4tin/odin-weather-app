/*eslint-disable*/

//MODEL

async function getWeather(city) {

  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=01e585a4ff61420c823232424231610&q=${city}`, {mode: 'cors'})
    
    const weatherData = await response.json();
    const data = Object.entries(weatherData.current);

    let newArray = siftData(data);

    content.textContent = newArray
  
    return newArray;
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
content.textContent = 'hi'




//CONTROLLER

const button = document.querySelector('#submit');
const input = document.querySelector('#input')
button.addEventListener('click', () => {
  getWeather(input.value)
})