var apiKey = "457cbbad81bb1f84bf029b7dd8674602";
var place = "";

function currentWeather() {
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + place + "&appid=" + apiKey,
        method: "GET"
    }).then(function (response) {
        $("#cityName").text(response.name);
        $("#city-name").text( moment().month() + "/" + moment().date() + "/" + moment().year());
        $("#temperature").text("Temperature: " + ((response.main.temp - 273.15) * 9 / 5 + 32).toFixed(1) + "°F");
        $("#humidity").text("Humidity: " + response.main.humidity + "%");
        $("#wind-speed").html("Wind Speed: " + "<br/>" +  response.wind.speed + "MPH");
        $("#sunset").html("Sunset Time: " + "<br/>" + response.sys.sunset)
        var longitude = response.coord.lon;
        var latitude = response.coord.lat;
    });
}

currentWeather();

$(".search-btn").on("click", function () {
    place = $("#search").val().trim();
    currentWeather();
});