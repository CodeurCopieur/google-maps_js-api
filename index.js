//Utilisation deGoogle Maps JavaScript API

function initMap() {
  const location = {lat:48.8662271385715, lng:2.3213006589350997};
  const urlFlag = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

  // Map options
  const options = {
    zoom: 13,
    center: location
  }

  // New map
  const map = new google.maps.Map(document.getElementById('map1'), options);
  // Listen for click on map
  google.maps.event.addListener(map, 'click', event => {
    // Add marker
    addMaker({coords:event.latLng});
  })

  // Array of markers
  const markers = [
    {
      coords:{lat: 48.85973419181977,lng: 2.295084081610593},
      iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      content:'<h1>Tour Eiffel</h1>'
    },
    {
      coords:{lat: 48.87488309058383,lng: 2.295392511932058},
      content:'<h1>Arc de Triomphe</h1>'
    },
    {
      coords:{lat: 48.8662271385715,lng: 2.3213006589350997},
      content:'<h1>Place de la concorde</h1>'
    }
  ]

  // Loop through makers
  markers.forEach( marker => {
    // Add marker
    addMaker(marker);
  })

  
  /*
  addMaker({coords:{lat: 48.87488309058383, lng: 2.295392511932058}});
  addMaker({coords:{lat: 48.8662271385715, lng: 2.3213006589350997}});
  */

  // Add maker Function
  function addMaker(props) {
      const marker = new google.maps.Marker({
        position: props.coords,
        map: map,
        //icon: props.iconImage
      });

      //check for customicon
      if(props.iconImage) {
        marker.setIcon(props.iconImage)
      }

      //check content
      if(props.content) {
        const infoWindow = new google.maps.InfoWindow({
          content: props.content
        });

      marker.addListener('click', function() {
        infoWindow.open(map, marker);
      });
      
    }
  }

  /* Add marker
    const marker = new google.maps.Marker({position: location, map: map, icon: urlFlag});

    const infoWindow = new google.maps.InfoWindow({content: '<h1>Opticien Krys</h1>'});

    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });
  */
}