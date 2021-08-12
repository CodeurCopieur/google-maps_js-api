//Utilisation deGoogle Maps JavaScript API

function initMap() {
  const location = {lat: 48.716221, lng: 2.246890};
  const urlFlag = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

  // Map options
  const options = {
    zoom: 18,
    center: location
  }

  // New map
  const map = new google.maps.Map(document.getElementById('map1'), options);

  // Add marker
  const marker = new google.maps.Marker({position: location, map: map, icon: urlFlag});

  const infoWindow = new google.maps.InfoWindow({content: '<h1>Opticien Krys</h1>'});

  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  })
}