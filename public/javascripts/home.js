const loadData = (map) => {
  restaurants.forEach(r => addMarker(r.name, {
    lat: r.location.coordinates[0],
    lng: r.location.coordinates[1]
  }, map))

}