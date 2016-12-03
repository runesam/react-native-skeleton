var rootURL = 'http://api.openweathermap.org/data/2.5/weather?APPID=8e7e5ad91b6ab8cee2866027ff6491d1';
var kelvinToC = function (kelvin){
  return Math.round(kelvin-273.15) + '˚C';
}
module.exports = {
  nully:function(lat,lon){
    var URL = `${rootURL}&lat=${lat}&lon=${lon}`;
    return fetch(URL)
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        console.log(response);
        callback(responses);
        return {
          city: response.name,
          temp: kelvinToC(response.main.temp),
          desc: response.weather[0].description
        }
      }).catch((error) => console.warn("fetch error:", error));
  },
  weather:function (lat,lon) {
    return fetch(`${rootURL}&lat=${lat}&lon=${lon}`)
      .then((response) => response.json())
      .then((responseJson) => {
        return {
          city: responseJson.name,
          temp: kelvinToC(responseJson.main.temp),
          desc: responseJson.weather[0].description
        }
      })
      .catch((error) => {
        console.error(error);
      })
    ;
  }
}
