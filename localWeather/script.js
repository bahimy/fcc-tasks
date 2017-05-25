"use strict"

var openWeatherKey = "86993bb59d7d83bb265c0018513bb4d5"
var forecastURL = "http://api.openweathermap.org/data/2.5/weather?"
var forecast = {}

var getCoordinates = function(callback) {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            var returnValue = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }
            callback(returnValue)
        }
    )
}

var fetchJSONFile = function(path, callback) {
    var httpRequest = new XMLHttpRequest()
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText)
                if (callback) callback(data)
            }
        }
    }
    httpRequest.open('GET', path)
    httpRequest.send()
}

getCoordinates(
    function(coordinates) {
        forecastURL += "lat=" + Math.round(coordinates.latitude) + "&"
        forecastURL += "lon=" + Math.round(coordinates.longitude) + "&"
        forecastURL += "appid=" + openWeatherKey
        fetchJSONFile(forecastURL,
            function(data) {
                forecast = data
                console.log(forecast)
            }
        )
    }
)
