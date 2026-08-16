// Weather app js

const searchInput = document.querySelector(".searchInput");
const searchBtn = document.querySelector(".searchBtn");

const currentWeatherCard = document.querySelector(".currentWeather");
const cityDisplay = document.querySelector(".city");
const dateDisplay = document.querySelector(".date");
const temperatureDisplay = document.querySelector(".temperature");
const descriptionDisplay = document.querySelector(".description");
const highLowDisplay = document.querySelector(".highLow");

const humidityDisplay = document.querySelector(".humidityValue");
const windDisplay = document.querySelector(".windValue");
const pressureDisplay = document.querySelector(".pressureValue");
const feelsLikeDisplay = document.querySelector(".feelsLikeValue");

const forecastDays = document.querySelectorAll(".day");

const hourlyCards = document.querySelectorAll(".hourCard");


async function getWeatherData(city){

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);

    if(!response.ok){

        const errorData = await response.json();
        throw new Error(errorData.message);
    
    }
    return await response.json();
}

async function getForecastData(city){

    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Could not fetch forecast data");
    }
    return await response.json();
}

function processForecastData(forecastList){

    const dailyForecast = {};

    forecastList.forEach(item => {

        const date = item.dt_txt.split(" ")[0];

        if(!dailyForecast[date]){

            dailyForecast[date] = {
                date: date,
                high: item.main.temp_max,
                low: item.main.temp_min,
                weather: item.weather[0].description,
                weatherId: item.weather[0].id
            };

        }
        else{

            dailyForecast[date].high =
                Math.max(
                    dailyForecast[date].high,
                    item.main.temp_max
                );

            dailyForecast[date].low =
                Math.min(
                    dailyForecast[date].low,
                    item.main.temp_min
                );

        }

    });

    return dailyForecast;

}

function getWeatherEmoji(weatherId){

    switch(true){

        case weatherId >= 200 && weatherId < 300:
            return "⛈️";

        case weatherId >= 300 && weatherId < 400:
            return "🌦️";

        case weatherId >= 500 && weatherId < 600:
            return "🌧️";

        case weatherId >= 600 && weatherId < 700:
            return "❄️";

        case weatherId >= 700 && weatherId < 800:
            return "🌫️";

        case weatherId === 800:
            return "☀️";

        case weatherId > 800 && weatherId < 900:
            return "☁️";

        default:
            return "❓";
    }
}

function getWeatherBackground(weatherId){

    if(weatherId >= 200 && weatherId < 300){
        return "images/stormy.jpg";
    }

    if(weatherId >= 300 && weatherId < 600){
        return "images/rainy.jpg";
    }

    if(weatherId >= 600 && weatherId < 700){
        return "images/snowy.jpg";
    }

    if(weatherId >= 700 && weatherId < 800){
        return "images/mist.jpg";
    }

    if(weatherId === 800){
        return "images/clear.jpg";
    }

    if(weatherId > 800 && weatherId < 900){
        return "images/cloudy2.jpg";
    }

    return "images/cloudy2.jpg";
}

function displayForecast(dailyForecast){

    const dates = Object.keys(dailyForecast);

    const today = new Date().toISOString().split("T")[0];

    const futureDates = dates.filter(date => date > today);

    forecastDays.forEach((day, index) => {

        const date = futureDates[index];

        if(!date){
            return;
        }

        const forecast = dailyForecast[date];

        const weatherIcon = getWeatherEmoji(forecast.weatherId);

        const dayName = new Date(date).toLocaleDateString("en-US", {
            weekday: "long"
        });

        day.children[0].textContent = dayName;

        day.children[1].textContent = weatherIcon;

        day.children[2].textContent =
            `${forecast.high.toFixed(0)}°`;

        day.children[3].textContent =
            `${forecast.low.toFixed(0)}°`;

    });

}

function displayHourlyForecast(forecastList){

    hourlyCards.forEach((card, index) => {

        const forecast = forecastList[index];

        if(!forecast){
            return;
        }

        const time = new Date(forecast.dt * 1000);

        const formattedTime = time.toLocaleTimeString("en-US", {
            hour: "numeric",
            hour12: true
        });

        const temperature = `${forecast.main.temp.toFixed(0)}°C`;

        const weatherIcon = getWeatherEmoji(forecast.weather[0].id);

        card.children[0].textContent = formattedTime;

        card.children[1].textContent = weatherIcon;

        card.children[2].textContent = temperature;

    });

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

async function displayWeather(city){

    const weatherData = await getWeatherData(city);

    const forecastData = await getForecastData(city);

    const dailyForecast =
        processForecastData(forecastData.list);

    const today =
        new Date().toISOString().split("T")[0];

    const todayForecast =
        dailyForecast[today];

    const weatherId =
        weatherData.weather[0].id;

    cityDisplay.textContent =
        weatherData.name;

    temperatureDisplay.textContent =
        `${weatherData.main.temp.toFixed(0)}°C`;

    descriptionDisplay.textContent =
        formatDescription(weatherData.weather[0].description);

    dateDisplay.textContent =
        formatDate();

    if(todayForecast){

        highLowDisplay.textContent =
            `H ${todayForecast.high.toFixed(0)}°C • L ${todayForecast.low.toFixed(0)}°C`;

    }

    humidityDisplay.textContent =
        `${weatherData.main.humidity}%`;

    windDisplay.textContent =
        `${(weatherData.wind.speed * 3.6).toFixed(1)} km/h`;

    pressureDisplay.textContent =
        `${weatherData.main.pressure} hPa`;

    feelsLikeDisplay.textContent =
        `${weatherData.main.feels_like.toFixed(0)}°C`;

    displayForecast(dailyForecast);

    displayHourlyForecast(forecastData.list);

    const backgroundImage =
        getWeatherBackground(weatherId);

    currentWeatherCard.style.backgroundImage =
        `linear-gradient(
            90deg,
            rgba(5, 10, 22, 0.72) 0%,
            rgba(5, 10, 22, 0.42) 50%,
            rgba(5, 10, 22, 0.18) 100%
        ),
        linear-gradient(
            0deg,
            rgba(5, 10, 22, 0.45) 0%,
            transparent 45%
        ),
        url("${backgroundImage}")`;

}

searchBtn.addEventListener("click", async () => {

    const city = searchInput.value.trim();

    if(!city){
        return;
    }

    try {
        await displayWeather(city);
    }
    
    catch(error) {
        console.error(error);
    }
});

