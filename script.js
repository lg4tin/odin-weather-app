/*eslint-disable*/


const img = document.querySelector('img');
    async function getWeather(city) {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=01e585a4ff61420c823232424231610&q=${city}`, {mode: 'cors'})
        
      const weatherData = await response.json()
      //img.src = catData.data.images.original.url;
      console.log(weatherData.current.temp_f, weatherData.current.temp_c)
    }