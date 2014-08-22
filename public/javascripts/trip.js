/*******************
TRIP PLANNING STORE
*******************/


/****************
MAP FUNCTIONALITY
*****************/

$("#hotels-add-btn").on("click", function() {
  var selectedHotel = $("#hotelDropdown").val();
  var lat;
  var lng;
  for (var i=0; i<all_hotels.length; i++) {
    if (all_hotels[i].name==selectedHotel) {
      lat = (all_hotels[i].place[0].location[0]);
      lng = (all_hotels[i].place[0].location[1]);
    }
  }
  var markerCoords = new google.maps.LatLng(lat,lng);
  var marker = new google.maps.Marker({
    position: markerCoords,
    animation: google.maps.Animation.DROP,
    title: selectedHotel
  });
  marker.setMap(map);
  var $hotel_id = $("hotel-id");
  $hotel_id.append("<ul id=\"hotel-ul\">"+selectedHotel+"</ul>")
});

$("#things-add-btn").on("click", function() {
  var selectedThing = $("#thingsDropdown").val();
  var lat;
  var lng;
  for (var i=0; i<all_things_to_do.length; i++) {
    if (all_things_to_do[i].name==selectedThing) {
      lat = (all_things_to_do[i].place[0].location[0]);
      lng = (all_things_to_do[i].place[0].location[1]);
    }
  }
  var markerCoords = new google.maps.LatLng(lat,lng);
  var marker = new google.maps.Marker({
    position: markerCoords,
    animation: google.maps.Animation.DROP,
    title: selectedThing
  });
  marker.setMap(map);
});

$("#resto-add-btn").on("click", function() {
  var selectedResto = $("#restaurantsDropdown").val();
  var lat;
  var lng;
  for (var i=0; i<all_restaurants.length; i++) {
    if (all_restaurants[i].name==selectedResto) {
      lat = (all_restaurants[i].place[0].location[0]);
      lng = (all_restaurants[i].place[0].location[1]);
    }
  }
  var markerCoords = new google.maps.LatLng(lat,lng);
  var marker = new google.maps.Marker({
    position: markerCoords,
    animation: google.maps.Animation.DROP,
    title: selectedResto
  })
  marker.setMap(map);
});




