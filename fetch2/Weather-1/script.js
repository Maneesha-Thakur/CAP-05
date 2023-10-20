const apiKey = '5207bd7aed0c6e2535ff38c29e538033';
        const weatherContainer = document.getElementById('weatherContainer');
        const cityInput = document.getElementById('cityInput');
        const searchButton = document.getElementById('searchButton');
        const mapIframe = document.getElementById('gmap_canvas');
    
        searchButton.addEventListener('click', () => {
            const city = cityInput.value;
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
                .then(response => response.json())
                .then(data => {
                    // Extract and display weather data in the weatherContainer
                    const weatherDetails = `
                        <h2>Weather in ${data.name}, ${data.sys.country}</h2>
                        <p>Temperature: ${data.main.temp} &#8451;</p>
                        <p>Min Temperature: ${data.main.temp_min} &#8451;</p>
                        <p>Max Temperature: ${data.main.temp_max} &#8451;</p>
                        <p>Wind: ${data.wind.speed} m/s</p>
                        <p>Clouds: ${data.weather[0].description}</p>
                        <p>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
                        <p>Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
                    `;
                    weatherContainer.innerHTML = weatherDetails;
    
                
                    const encodedCity = encodeURIComponent(city); 
                    mapIframe.src = `https://maps.google.com/maps?q=${encodedCity}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
                })
                .catch(error => {
                    console.error(error);
                    
                });
        });