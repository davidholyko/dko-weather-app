// const store = require('../store')
const api = require('./api')
const ui = require('./ui')

const onGetWeatherData = () => {
  // city ID of Boston
  const city = 4930956
  api.getWeatherData(city)
    .then(ui.getWeatherDataSuccess)
    .catch(console.error)
}

const addHandlers = () => {}

const onPageLoad = () => {
  onGetWeatherData()
}

module.exports = {
  addHandlers,
  onPageLoad
}
