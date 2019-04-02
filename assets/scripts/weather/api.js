const store = require('../store')
const config = require('../config')

const getWeatherData = city => {
  return $.ajax({
    url: `${config.apiUrl}/data/2.5/forecast?id=${city}&APPID=${store.api_key}`
  })
}

module.exports = {
  getWeatherData
}
