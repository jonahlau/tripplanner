/*******************
TRIP PLANNING STORE
*******************/
var dayPlans = [{day: "", hotel: "", thingsToDo: [], restaurants: []}];

/****************
MAP FUNCTIONALITY
*****************/



var initialize = function() {
  var markers = [];
  var dayCount = 1;
  $("#add-day").on("click", function() {
    dayCount++;
    $(".btn-days").last().after("<button type=\"button\" class=\"btn btn-default btn-days\" id=\"day"+dayCount+"\">Day "+dayCount+"</button>");
  });

  $(".btn-days").on("click", function() {
    $(".btn-days").filter(".active").removeClass("active");
    $(this).addClass("active");
  });

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
    var $hotel_ul = $("#hotel-ul");
    $hotel_ul.append("<li id=\"inner-li\">"+selectedHotel+"</li>")
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
      title: selectedThing,
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
}

$(document).on("ready", function() {
initialize();
});
