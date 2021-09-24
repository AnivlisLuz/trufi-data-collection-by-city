#!/bin/bash
rm -rf ./temp/
mkdir ./temp/
mkdir ./temp/tiles
mkdir ./temp/otp

wget -O ./input.osm.pbf "https://download.geofabrik.de$geofabrik_url_path"

osmium extract --bbox=$bbox  --set-bounds  ./input.osm.pbf  --output "./temp/otp/$city.osm.pbf"

./tilemaker/build/tilemaker --input "./temp/otp/$city.osm.pbf" --output "./temp/tiles/$city.mbtiles" --process ./tilemaker/resources/process-openmaptiles.lua --config ./tilemaker/resources/config-openmaptiles.json
[ -d "./out/$city" ] || mkdir "./out/$city"
cp -a ./temp/. ./out/$city