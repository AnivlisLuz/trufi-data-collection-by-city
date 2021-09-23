const { osmToGtfs, OSMOverpassDownloader } = require('trufi-osm-to-gtfs')
// -66.453088,-17.762296,-65.758056,-17.238372
osmToGtfs({
  outputFiles: { outputDir: __dirname + '/out' },
  geojsonOptions: {
    osmDataGetter: new OSMOverpassDownloader({
      west: -66.453088,
      south: -17.762296,
      east: -65.758056,
      north: -17.238372
    })
  },
  gtfsOptions: {
    stopNameBuilder: stops => {
      if (!stops || stops.length == 0) {
        stops = ['innominada']
      }
      return stops.join(' y ')
    }
  }
}).catch(error => console.error(error))
