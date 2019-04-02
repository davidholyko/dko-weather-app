'use strict'

let apiUrl
const apiUrls = {
  production: 'https://api.openweathermap.org',
  development: 'https://api.openweathermap.org'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
