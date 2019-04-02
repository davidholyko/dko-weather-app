const weatherSlideTemplate = require('../templates/weather.handlebars')
const conversion = require('./conversion')
const Chart = require('chart.js')

const getWeatherDataSuccess = responseData => {
  console.log(responseData)

  // add city key to each weather item
  responseData.list.forEach((item, index) => {
    item.city = responseData.city.name
    item.index = index
  })

  $('#weather-carousel-items').append(weatherSlideTemplate({weatherItems: responseData.list}))
  responseData.list.forEach((item, index) => generateChart(index, conversion.kelvinToFarenheight(item.main.temp)))
}

const generateChart = (index, data) => {
  const ctx = $(`#temperature-chart-${index}`)[0].getContext('2d')
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      datasets: [{
        label: 'Temp',
        data: [data],
        backgroundColor: [ 'blue' ],
        borderColor: [ 'black' ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            max: 120,
            min: -20
          }
        }]
      },
      responsive: false
    }
  })
}

module.exports = {
  getWeatherDataSuccess,
  generateChart
}
