const { osmToGtfs, OSMPBFReader } = require('trufi-osm-to-gtfs')
const path = require('path')
// -66.453088,-17.762296,-65.758056,-17.238372
osmToGtfs({
  outputFiles: { outputDir: __dirname + '/out', gtfs: false },
  geojsonOptions: {
    osmDataGetter: new OSMPBFReader(path.join(__dirname, "city.osm.pbf"))
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
