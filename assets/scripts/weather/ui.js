const weatherSlideTemplate = require('../templates/weather.handlebars')
const conversion = require('./conversion')
const Chart = require('chart.js')

const getWeatherDataSuccess = responseData => {
  // console.log(responseData)

  // add city key to each weather item
  responseData.list.forEach((item, index) => {
    item.city = responseData.city.name
    item.index = index
  })

  $('#weather-carousel-items').empty()

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
        // fontSize: '24px',
        color: 'white',
        data: [data],
        backgroundColor: [ 'white' ],
        borderColor: [ 'black' ],
        borderWidth: 1
      }]
    },
    options: {
      legend: {
        labels: {
          fontSize: 0
        }
      },
      scales: {
        scaleLabel: {
          fontSize: 24
        },
        yAxes: [{
          ticks: {
            beginAtZero: true,
            max: 120,
            min: -20,
            fontSize: 24,
            fontColor: 'white'
          },
          gridLines: {
            zeroLineWidth: 5,
            zeroLineColor: 'black'
          }
        }],
        xAxes: [{
          gridLines: {
            lineWidth: 50
          }
        }]
      },
      responsive: false
    }
  })
}

const getWeatherDataFailure = () => {
  $('#failure-modal').modal('show')
}

module.exports = {
  getWeatherDataSuccess,
  getWeatherDataFailure,
  generateChart
}
