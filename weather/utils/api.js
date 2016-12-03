var rootURL = 'api.openweathermap.org/data/2.5/weather?APPID=8e7e5ad91b6ab8cee2866027ff6491d1';
var kelvinToC = function (kelvin){
  return math.round(kelvin-273.15) + '˚C';
}
module.exports = function(lat,lon){
  rootURL = `${rootURL}&lat=${lat}&lon=${lon}`;
  return fetch(rootURL)
    .then(function(response){
      return response.json()
    }).catch((error) => console.warn("fetch error:", error))
    .then(function(json){
      return {
        city: json.city,
        temp: kelvinToC(json.main.temp),
        desc: json.weather[0].description
      }
    });
}
