const axios = require('axios')

const getLugarLatLng = async (direccion) => {

  let encodedUrl = encodeURI(direccion);

  let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyCJp0dP2uGkxkkBmLXY5Lb0YwmCMEgBT4k`)

  if(resp.data.status === 'ZERO_RESULTS') {
    throw new Error(`No hay resultados para la ciudad ${direccion}`)
  }


  let location = resp.data.results[0]
  let coors = location.geometry

  return {
      direccion,
      lat: coors.location.lat,
      lng: coors.location.lng
  }
}

module.exports = {
  getLugarLatLng
}
