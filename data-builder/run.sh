#!/bin/bash

rm -rf ./temp/
rm -rf ./out/$city.zip
mkdir ./temp/
mkdir ./temp/tiles
mkdir ./temp/otp

wget -O ./input.osm.pbf "https://download.geofabrik.de$geofabrik_url_path"

osmium extract --bbox=$bbox  --set-bounds  ./input.osm.pbf  --output "./temp/otp/$city.osm.pbf"

./tilemaker/build/tilemaker --input "./temp/otp/$city.osm.pbf" --output "./temp/tiles/$city.mbtiles" --process ./tilemaker/resources/process-openmaptiles.lua --config ./tilemaker/resources/config-openmaptiles.json

cp ./gtfs.zip ./temp/otp/gtfs.zip
cd ./temp
zip -r ../out/$city.zip ./