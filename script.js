async function getWeather(city) {

    document.getElementById("cityName").innerHTML = city;
    const url =
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "26fcff581cmshb809e5624bbcf11p137306jsna1d4f76746ac",
            "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
        },
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        // Accessing data properties and updating HTML elements
        // document.getElementById("cloud_pct").innerHTML = data.cloud_pct;

        let timestamp1 = new Date(data.sunrise * 1000).toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'});
        let timestamp2 = new Date(data.sunset * 1000).toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'});

        document.getElementById("temp").innerHTML = data.temp;
        document.getElementById("temp2").innerHTML = data.temp;
        document.getElementById("feels_like").innerHTML = data.feels_like;
        document.getElementById("humidity").innerHTML = data.humidity;
        document.getElementById("humidity2").innerHTML = data.humidity;
        document.getElementById("min_temp").innerHTML = data.min_temp;
        document.getElementById("max_temp").innerHTML = data.max_temp;
        document.getElementById("wind_speed").innerHTML = data.wind_speed;
        document.getElementById("wind_speed2").innerHTML = data.wind_speed;
        document.getElementById("wind_degrees").innerHTML = data.wind_degrees;
        document.getElementById("sunrise").innerHTML = timestamp1;
        document.getElementById("sunset").innerHTML = timestamp2;
    } catch (error) {
        console.error(error);
    }
}


getWeather("Mumbai");

document.getElementById("weather-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const city = document.getElementById("city").value;
    getWeather(city); // Call getWeather function with the city value
});


async function getWeather2(city) {
    const url =
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "26fcff581cmshb809e5624bbcf11p137306jsna1d4f76746ac",
            "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
        },
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        let timestamp1 = new Date(data.sunrise * 1000).toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'});
        let timestamp2 = new Date(data.sunset * 1000).toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'});

        // Accessing data properties and updating HTML elements
        document.getElementById(city + "-" + "temp").innerHTML = data.temp;
        document.getElementById(city + "-" + "feels_like").innerHTML = data.feels_like;
        document.getElementById(city + "-" + "humidity").innerHTML = data.humidity;
        document.getElementById(city + "-" + "min_temp").innerHTML = data.min_temp;
        document.getElementById(city + "-" + "max_temp").innerHTML = data.max_temp;
        document.getElementById(city + "-" + "wind_speed").innerHTML = data.wind_speed;
        document.getElementById(city + "-" + "wind_degrees").innerHTML = data.wind_degrees;
        document.getElementById(city + "-" + "sunrise").innerHTML = timestamp1;
        document.getElementById(city + "-" + "sunset").innerHTML = timestamp2;
    } catch (error) {
        console.error(error);
    }
}

const cities = ['tokyo', 'london', 'seoul', 'karachi'];

async function fetchWeatherForCities() {
    try {
        const promises = cities.map(city => getWeather2(city));
        await Promise.all(promises);
    } catch (error) {
        console.error(error);
    }
}

fetchWeatherForCities();
