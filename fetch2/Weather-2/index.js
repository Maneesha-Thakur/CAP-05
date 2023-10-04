const apiKey = '5207bd7aed0c6e2535ff38c29e538033';
const city = 'New York'; // Replace with the desired city
const days = 5; // Number of forecast days

async function fetchWeatherForecast() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`);
        const data = await response.json();
        
        const forecastContainer = document.getElementById('forecast-container');
        
        // Filter the data to get forecasts for the next 5 days
        const forecastData = data.list.filter(day => {
            const date = new Date(day.dt * 1000);
            const currentDate = new Date();
            const nextFiveDays = new Date(currentDate);
            nextFiveDays.setDate(currentDate.getDate() + days);
            return date <= nextFiveDays;
        });
        
        forecastData.forEach(day => {
            const date = new Date(day.dt * 1000);
            const temperature = Math.round(day.main.temp);
            const description = day.weather[0].description;
            
            const card = document.createElement('div');
            card.classList.add('forecast-card');
            card.innerHTML = `
                <p>Date: ${date.toDateString()}</p>
                <p>Temperature: ${temperature}°C</p>
                <p>Description: ${description}</p>
            `;
            
            forecastContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Call the fetchWeatherForecast function when the page loads
window.onload = fetchWeatherForecast;
