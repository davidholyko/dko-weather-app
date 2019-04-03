// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'

const months = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December'
}

const parseDate = date => {
  let output = ''

  const year = date.substring(0, 4)
  const month = date.substring(5, 7)
  const day = date.substring(8, 10)

  output = `${months[Number(month)]} ${Number(day)} ${year}`

  return output
}

module.exports = parseDate
