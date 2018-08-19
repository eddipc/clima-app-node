const axios = require('axios')

const getClima = async (lat, lng) => {

  let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lng}&appid=17876028b891ba5c8b96afec656e8da0`)

  let temp = await resp.data.main.temp

  return temp
}

module.exports = {
  getClima
}
