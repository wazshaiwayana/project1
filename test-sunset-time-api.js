var apiKey = "457cbbad81bb1f84bf029b7dd8674602";
var placeInput = "San Diego";
var place = "San Diego";
var buttonsReturned = [];
var buttons = [];
var i = 0;

$(".append-city").append("<button class='history'>" + place + "</button> <br>")

function appendCityButton() {
    if (placeInput != "") {
        place = placeInput;
        if (buttons.includes(place)) {
            return;
        } else {
            $(".append-city").append("<button class='history'>" + place + "</button> <br>")
            buttons.push(place);
            localStorage.setItem("cities", JSON.stringify(buttons));
        }
    } else {
        return;
    }
}

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

if (localStorage.getItem("cities") !== null) {
    buttonsReturned = localStorage.getItem("cities");
    buttons = JSON.parse(buttonsReturned);

    while (i < buttons.length) {
        $(".append-city").append("<button class='history'>" + buttons[i] + "</button> <br>")
        i++
    }
}

currentWeather();

$(".search-btn").on("click", function () {
    placeInput = $("#search").val().trim();
    appendCityButton();
    currentWeather();
});


$(".history").on("click", function () {
    placeInput = $(this).text();
    appendCityButton();
    currentWeather();
});