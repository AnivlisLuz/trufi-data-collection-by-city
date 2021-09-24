const { osmToGtfs, OSMOverpassDownloader } = require('trufi-osm-to-gtfs')
// westlimit=-63.823636; southlimit=44.590953; eastlimit=-63.375516; northlimit=44.81409
osmToGtfs({
  outputFiles: { outputDir: __dirname + '/out' },
  geojsonOptions: {
    osmDataGetter: new OSMOverpassDownloader({
      west: -63.823636,
      south: 44.590953,
      east: -63.375516,
      north: 44.81409
    })
  },
}).catch(error => console.error(error))
