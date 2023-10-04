function getWeather() {
    const apiKey = '5207bd7aed0c6e2535ff38c29e538033';
    const city = document.getElementById('cityInput').value;
    const weatherDataDiv = document.getElementById('weatherData');
    
    // Make an API request to OpenWeatherMap to get weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)



        .then(response => response.json())
        .then(data => {
            // Extract relevant weather information
            const { main, wind, clouds, sys } = data;
            const minTemp = main.temp_min;
            const maxTemp = main.temp_max;
            const windSpeed = wind.speed;
            const cloudiness = clouds.all;
            const sunrise = new Date(sys.sunrise * 1000).toLocaleTimeString();
            const sunset = new Date(sys.sunset * 1000).toLocaleTimeString();

            // Display weather information
            weatherDataDiv.innerHTML = `
                <h2>${city}</h2>
                <p>Min Temp: ${minTemp} K</p>
                <p>Max Temp: ${maxTemp} K</p>
                <p>Wind Speed: ${windSpeed} m/s</p>
                <p>Cloudiness: ${cloudiness}%</p>
                <p>Sunrise: ${sunrise}</p>
                <p>Sunset: ${sunset}</p>
            `;
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
            weatherDataDiv.innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
        });
    const mapDiv = document.getElementById('map');
    mapDiv.innerHTML = `<iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>`;

}

 
//   const apiKey = '5207bd7aed0c6e2535ff38c29e538033';

//   const searchButton = document.getElementById('searchButton');
//   const cityInput = document.getElementById('cityInput');

//   searchButton.addEventListener('click', () => {
//       const city = cityInput.value;

   
//       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
//           .then(response => response.json())
//           .then(data => {
     
//               document.getElementById('minTemp').textContent = data.main.temp_min;
//               document.getElementById('maxTemp').textContent = data.main.temp_max;
//               document.getElementById('wind').textContent = data.wind.speed;
//               document.getElementById('clouds').textContent = data.clouds.all;
//               const sunriseTimestamp = new Date(data.sys.sunrise * 1000);
//               document.getElementById('sunrise').textContent = sunriseTimestamp.toLocaleTimeString();
//               const sunsetTimestamp = new Date(data.sys.sunset * 1000);
//               document.getElementById('sunset').textContent = sunsetTimestamp.toLocaleTimeString();
//           })
//           .catch(error => {
//               console.error('Error fetching weather data:', error);
//           });

//           const mapDiv = document.getElementById('map');
// mapDiv.innerHTML = `<iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>`;

//       // const map = document.getElementById('map');
//       // map.src = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${city}`;
//   });