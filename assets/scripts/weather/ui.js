const weatherSlideTemplate = require('../templates/weather.handlebars')

const getWeatherDataSuccess = responseData => {
  console.log(responseData)

  // add city key to each weather item
  responseData.list.forEach(item => { item.city = responseData.city.name })

  $('#weather-carousel-items').append(weatherSlideTemplate({weatherItems: responseData.list}))

  $('#weather-carousel-items:first-child').addClass('active')
}

module.exports = {
  getWeatherDataSuccess
}
