const express = require('express')
const axios = require('axios')
const router = express.Router()

// router.get('/all', async (request, response) => {
//   axios.get('https://services.swpc.noaa.gov/products/solar-wind/mag-2-hour.json')
//     .then(res => {
//       // [ 'time_tag', 'density', 'speed', 'temperature' ]
//       // let keys = data[0]
//       res.data.shift()
//       let jsonData = res.data.map(x => ({
//         time_tag: x[0],
//         density: x[1],
//         speed: x[2],
//         temperature: x[3]
//       }))

//       response.status(200).json({
//         message: "Data fetched",
//         data: jsonData

//       })
//     })
// })

router.get('/7days', async (request, response) => {

  axios.get('https://services.swpc.noaa.gov/products/solar-wind/plasma-7-day.json')
    .then(res => {
      // [ 'time_tag', 'density', 'speed', 'temperature' ]
      // let keys = data[0]
      res.data.shift()
      let jsonData = res.data.map(x => ({
        time_tag: x[0],
        density: x[1],
        speed: x[2],
        temperature: x[3]
      }))

      response.status(200).json({
        message: "Data fetched",
        data: jsonData

      })
    })
})

router.get('/2hours', async (request, response) => {

  axios.get('https://services.swpc.noaa.gov/products/solar-wind/plasma-2-hour.json')
    .then(res => {
      // [ 'time_tag', 'density', 'speed', 'temperature' ]
      // let keys = data[0]
      res.data.shift()
      let jsonData = res.data.map(x => ({
        time_tag: x[0],
        density: x[1],
        speed: x[2],
        temperature: x[3]
      }))

      response.status(200).json({
        message: "Data fetched",
        data: jsonData

      })
    })
})
module.exports = router;
