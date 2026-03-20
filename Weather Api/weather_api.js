const apiKey = "1a4280a6680f9244bee0a4e447e3e05b"; // Replace with your actual OpenWeatherMap API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    const weatherCondition = data.weather[0].main.toLowerCase();

    if (weatherCondition.includes("cloud")) {
        weatherIcon.src = "images/clouds.png";
    } else if (weatherCondition.includes("clear")) {
        weatherIcon.src = "images/clear.png";
    } else if (weatherCondition.includes("rain")) {
        weatherIcon.src = "images/rain.png";
    } else if (weatherCondition.includes("drizzle")) {
        weatherIcon.src = "images/drizzle.png";
    } else if (weatherCondition.includes("snow")) {
        weatherIcon.src = "images/snow.png";
    } else {
        weatherIcon.src = "images/mist.png";
    }
}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city) {
        checkWeather(city);
    }
});
