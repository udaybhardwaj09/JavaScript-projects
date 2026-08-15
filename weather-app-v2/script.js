// Weather app js

const searchInput = document.querySelector(".searchInput");
const searchBtn = document.querySelector(".searchBtn");

async function getWeatherData(city){

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);

    if(!response.ok){

        const errorData = await response.json();
        throw new Error(errorData.message);

    }

    return await response.json();
}

searchBtn.addEventListener("click", async () => {

    const city = searchInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            console.log(weatherData);
        }

        catch(error){
            console.error(error);
        }
    }
});
