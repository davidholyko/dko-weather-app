// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'

const conditions = {
  Clouds: 'Cloudy',
  Clear: 'Clear Skys',
  Snow: 'Snowy',
  Rain: 'Rainy'
}

const parseWeatherCondition = weather => conditions[weather]

module.exports = parseWeatherCondition
