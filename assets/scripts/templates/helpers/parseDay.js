// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'

const moment = require('moment')

const parseDate = date => moment(date * 1000).format('dddd')

module.exports = parseDate
