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
        document.getElementById("sunrise").innerHTML = data.sunrise;
        document.getElementById("sunset").innerHTML = data.sunset;
    } catch (error) {
        console.error(error);
    }
}


getWeather("Delhi");

document.getElementById("weather-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const city = document.getElementById("city").value;
    getWeather(city); // Call getWeather function with the city value
});