const { osmToGtfs, OSMOverpassDownloader } = require('trufi-osm-to-gtfs')
// -73.104656,5.755485,-72.9504,5.877577
osmToGtfs({
  outputFiles: { outputDir: __dirname + '/out' },
  geojsonOptions: {
    osmDataGetter: new OSMOverpassDownloader({
      west: -73.104656,
      south: 5.755485,
      east: -72.9504,
      north: 5.877577
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
