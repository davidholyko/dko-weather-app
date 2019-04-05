// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'

const parseCityAddress = city => city === 'Hong Kong' ? 'Hong Kong/' : ''

module.exports = parseCityAddress
