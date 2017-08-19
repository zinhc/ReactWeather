var axios = require('axios');

const OPEN_WERATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c8ab32ed4c1de561615800ad107e0514&units=imperial';

// c8ab32ed4c1de561615800ad107e0514 (api key)

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WERATHER_MAP_URL}&q=${encodedLocation}`; //query string

    return axios.get(requestUrl).then(function (res) {
      
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (error) {
      throw new Error(error.response.data.message);
    });

  }
}
