'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const apiKey = require('./weather/api-key')
const weatherEvents = require('./weather/events')

$(() => {
  // your JS code goes here
  apiKey()
  weatherEvents.addHandlers()
  weatherEvents.onPageLoad()
})
