// const store = require('../store')
const api = require('./api')
const ui = require('./ui')

const onGetWeatherData = () => {
  let id = 4930956
  if (event) { 
    event.preventDefault()
    id = $(event.target).data('city-id')
  }
  api.getWeatherData(id)
    .then(ui.getWeatherDataSuccess)
    .catch(console.error)
}

const addHandlers = () => {
  $('.city').on('click', onGetWeatherData)
}

const onPageLoad = () => {
  onGetWeatherData()
}

module.exports = {
  addHandlers,
  onPageLoad
}
