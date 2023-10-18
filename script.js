/*eslint-disable*/



async function getWeather(city) {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=01e585a4ff61420c823232424231610&q=${city}`, {mode: 'cors'})
    
  const weatherData = await response.json();
  //const data = await Object.entries(weatherData.current);

  //console.log(data[2])

  console.log(weatherData.current.temp_f, weatherData.current.temp_c, weatherData.current.feelslike_f, weatherData.current.humidity, weatherData.current.wind_mph, weatherData.location.name)

  return weatherData;
  
}

async function siftData(obj) {
  let filteredObj = obj.filter(data => data[0] == 'temp_f');
  return filteredObj;
}