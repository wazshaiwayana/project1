var apiKey = "457cbbad81bb1f84bf029b7dd8674602";
var place = "";
 
function currentWeather() {
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + place + "&appid=" + apiKey,
        method: "GET"
    }).then(function (response) {
      var iconCode = response.weather[0].icon;
      var iconurl = "http://openweathermap.org/img/w/" + iconCode + ".png";
        $("#cityName").text(response.name);
        $("#city-name").text( moment().month() + "/" + moment().date() + "/" + moment().year());
        $("#temperature").text("Temperature: " + ((response.main.temp - 273.15) * 9 / 5 + 32).toFixed(1) + "°F");
        $("#humidity").text("Humidity: " + response.main.humidity + "%");
        $("#wind-speed").html("Wind Speed: " + "<br/>" +  response.wind.speed + "MPH");
        $("#wicon").attr("src", iconurl);
        
        // this is converting sunset time from unix to regular time, however its in military time. 
        let unix_timestamp = response.sys.sunset
        var date = new Date(unix_timestamp * 1000);
        console.log(date);
        var hours= date.getHours();
        var minutes= "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
 
        var formattedTime = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
        console.log(formattedTime);
 
        const normalTime = milToStandard(formattedTime);
        $("#sunset").html("Sunset Time: " + "<br/>" + normalTime);
        console.log(normalTime);
        // this is converting sunrise time from unix to regular time,  returned in military time. 
        let unix_timestamp1 = response.sys.sunrise
        var date = new Date(unix_timestamp1 * 1000);
        console.log(date);
        var hours= date.getHours();
        var minutes= "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        
        var formattedTime1 = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
        console.log(formattedTime1);
        $("#sunrise").html("Sunrise Time: " + "<br/>" + formattedTime1);       
    });
}
 
currentWeather();
 
$(".search-btn").on("click", function () {
    place = $("#search").val().trim();
    currentWeather();
}); 
 
function milToStandard(value) {
  if (value !== null && value !== undefined){ 
    if(value.indexOf('AM') > -1 || value.indexOf('PM') > -1){ 
      return value;
    }
    else {
      if(value.length == 8){ 
        var hour = value.substring ( 0,2 );
        var minutes = value.substring ( 3,5 ); 
        var identifier = 'AM'; 
 
        if(hour == 12){ 
          identifier = 'PM';
        }
        if(hour == 0){ 
          hour=12;
        }
        if(hour > 12){ 
          hour = hour - 12;
          identifier='PM';
        }
        return hour + ':' + minutes + ' ' + identifier; 
      }
      else { 
        return value;
      }
    }
  }
};
