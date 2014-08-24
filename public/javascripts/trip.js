/*******************
TRIP PLANNING STORE
*******************/

var dayPlans = [{
  day: 1,
  hotels: [],
  thingsToDo: [],
  restaurants: [],
  markers: []
}];

var allMarkers = [];

var currentDay = dayPlans[0];
console.log("current day is: " + dayPlans[0].day);
$("#day1").on('click', function() {
  clearMarkers();
  currentDay=dayPlans[0];
  setMap(map);
  $(".btn-days").removeClass("active");
  $(this).addClass("active");
  renderActivitiesForDay();

  console.log("current day is: " + dayPlans[0].day);
});

function addDay() {
  var newDay = {
    day: dayPlans.length + 1,
    hotels: [],
    thingsToDo: [],
    restaurants: [],
    markers: []
  };
  dayPlans.push(newDay);
  currentDay=dayPlans[newDay.day-1];
  var $dayBtn = $("<button type='button' class='btn btn-default btn-days'> Day "+ newDay.day +"</button>");
  $dayBtn.on('click', function() {
    clearMarkers();
    currentDay=dayPlans[newDay.day-1];
    setMap(map);
    $(".btn-days").removeClass("active");
    $(this).addClass("active");
    renderActivitiesForDay();
    console.log("current day is: " + dayPlans[newDay.day-1].day);
  });
  $(".btn-days").last().after($dayBtn);
  console.log("current day is: " + dayPlans[newDay.day-1].day);
}

function renderActivitiesForDay() {

  var delBtn = "<button class='btn btn-danger'>-</button>";
  /*** render hotels ***/
  var hotelsToRender = "";
  currentDay.hotels.forEach(function(hotel) {
      hotelsToRender+= "<li>"+hotel+"<button class='btn btn-danger' style='float: right'>-</button></li>";
    });
  $("#hotel-ul").html(function() {
    return hotelsToRender;
  });

  /*** render things ***/
  var thingsToRender = "";
  currentDay.thingsToDo.forEach(function(thing) {
      thingsToRender+= "<li>"+thing+ "</li>";
    });
  $("#things-ul").html(function() {
    return thingsToRender;
  });

  /*** render restaurants ***/
  var restaurantsToRender = "";
  currentDay.restaurants.forEach(function(restaurant) {
      restaurantsToRender+= "<li>"+restaurant+"</li>";
    });
  $("#restaurants-ul").html(function() {
    return restaurantsToRender;
  });
}

function setMap(map) {
  for (var i=0; i<currentDay.markers.length; i++) {
    currentDay.markers[i].setMap(map);
  }
}

function clearMarkers() {
  for (var i=0; i<allMarkers.length; i++) {
    allMarkers[i].setMap(null);
  }
}

/****************
MAP FUNCTIONALITY
*****************/

var initialize = function() { /* Initialize begins here */

  $("#add-day").on("click", function() {
    addDay();
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
    $hotel_ul.append("<li id='inner-li'>"+selectedHotel+"<button class='btn btn-danger' style='float: right'>-</button></li>");

    currentDay.markers.push(marker);
    allMarkers.push(marker);
    currentDay.hotels.push(selectedHotel);
    console.log(currentDay);
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
    var $things_ul = $("#things-ul");
    $things_ul.append("<li id='inner-li'>"+selectedThing+"<button class='btn btn-danger' style='float: right'>-</button></li>");

    currentDay.markers.push(marker);
    allMarkers.push(marker);
    currentDay.thingsToDo.push(selectedThing);
    console.log(currentDay);
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
    });
    marker.setMap(map);
    var $restaurants_ul = $("#restaurants-ul");
    $restaurants_ul.append("<li id='inner-li'>"+selectedResto+"<button class='btn btn-danger' style='float: right'>-</button></li>");

    currentDay.markers.push(marker);
    allMarkers.push(marker);
    currentDay.restaurants.push(selectedResto);
    console.log(currentDay);
  });
}; /* Initialize ends */

$(document).on("ready", function() {
initialize();
});
