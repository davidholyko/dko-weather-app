// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'

const parseTime = date => {
  console.log(typeof date)

  let output = ''

  const hour = Number(date.substring(11, 13))

  const m = hour >= 12 ? 'PM' : 'AM'

  console.log(hour)

  output = `${hour % 12}:00 ${m}`

  return !hour ? 'Midnight' : output
}

module.exports = parseTime
