// Weather app js

const searchInput = document.querySelector(".searchInput");
const searchBtn = document.querySelector(".searchBtn");

const cityDisplay = document.querySelector(".city");
const dateDisplay = document.querySelector(".date");
const temperatureDisplay = document.querySelector(".temperature");
const descriptionDisplay = document.querySelector(".description");
const highLowDisplay = document.querySelector(".highLow");

const humidityDisplay = document.querySelector(".humidityValue");
const windDisplay = document.querySelector(".windValue");
const pressureDisplay = document.querySelector(".pressureValue");
const feelsLikeDisplay = document.querySelector(".feelsLikeValue");


async function getWeatherData(city){

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);

    if(!response.ok){

        const errorData = await response.json();
        throw new Error(errorData.message);

    }

    return await response.json();
}

function formatDate(){

    const today = new Date();

    return today.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric"
    });

}

function formatDescription(description){

    return description.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");

}

searchBtn.addEventListener("click", async () => {

    const city = searchInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            console.log(weatherData);
            
            cityDisplay.textContent = weatherData.name;

            temperatureDisplay.textContent = `${weatherData.main.temp.toFixed(0)}°C`;

            descriptionDisplay.textContent = formatDescription(weatherData.weather[0].description);

            dateDisplay.textContent = formatDate();

            highLowDisplay.textContent = `H ${weatherData.main.temp_max.toFixed(0)}°C • L ${weatherData.main.temp_min.toFixed(0)}°C`;

            humidityDisplay.textContent = `${weatherData.main.humidity}%`;

            windDisplay.textContent = `${(weatherData.wind.speed * 3.6).toFixed(1)} km/h`;

            pressureDisplay.textContent = `${weatherData.main.pressure} hPa`;

            feelsLikeDisplay.textContent = `${weatherData.main.feels_like.toFixed(0)}°C`;
        }

        catch(error){
            console.error(error);
        }
    }
});

