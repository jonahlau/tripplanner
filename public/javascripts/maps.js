var map;
function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(40.705786,-74.007672),
    zoom: 15
  };
  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);
