// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'

const parseTime = date => {
  let output = ''

  const hour = Number(date.substring(11, 13))
  const m = hour >= 12 ? 'PM' : 'AM'
  output = `${hour % 12}:00 ${m}`

  if (!hour) { output = 'Midnight' }
  if (!(hour - 12)) { output = 'Noon' }

  return output
}

module.exports = parseTime
