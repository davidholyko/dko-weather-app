// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'

const farenheight = temp => Math.round((((temp - 273.15) * 1.8) + 32) * 100) / 100

module.exports = farenheight
