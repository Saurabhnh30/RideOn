var directionsDisplay = new google.maps.DirectionsRenderer();

var directionsService = new google.maps.DirectionsService();

var map;

var start = new google.maps.LatLng(19.221971, 72.957830);
var end = new google.maps.LatLng(22.555722, 88.351528);

var mapOptions = {
  zoom: 14,
  center: start
};

map = new google.maps.Map(document.getElementById('map'), mapOptions);

directionsDisplay.setMap(map);

function calculateRoute () {
  var request = {
    origin: start,
    destination: end,
    travelMode: 'DRIVING'
  };

  directionsService.route(request, function(result, status) {

    if (status == "OK") {
      // render direction here
      directionsDisplay.setDirections(result);
    }

  });
}

calculateRoute();

// button onclick
// document.getElementById('get_direction').onclick = function () {
//   calculateRoute();
// };
