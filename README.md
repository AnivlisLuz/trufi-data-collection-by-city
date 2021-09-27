# trufi-data-collection-by-city
``docker-compose --env-file ./config/**env_file** -f ./data-builder/docker-compose.yml up``
`docker-compose --env-file ./config/**env_file** -f ./map-builder/docker-compose.yml up --build map_builder && docker-compose -f ./map-builder/docker-compose.yml stop`