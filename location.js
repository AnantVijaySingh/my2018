/*
- Build an array of locations visited
- compare current city to the list of locations visited
- mark the travel to a new city goal as done
*/

var currentLocation;
var locationsVisited = ["UK", "India", "USA", "Norway" ];

// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0
// };

// function success(pos) {
//   var crd = pos.coords;

//   console.log('Your current position is:');
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   console.log(`More or less ${crd.accuracy} meters.`);
// };

// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }; AIzaSyBnqhpxF7bb5VH4EeSQVDNy6eG6aHDgNUg

// navigator.geolocation.getCurrentPosition(success, error, options);


function getLocation () {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(findLocation);
	} else {
		console.log('Location Not Found');
	}
}

function findLocation(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	getAddress(latitude,longitude);
}

function getAddress(latitude,longitude){
	var request = new XMLHttpRequest();

	var method = 'GET';
	var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+latitude+','+longitude+'&sensor=true';
	var async = true;

	request.open(method, url, async);
	request.onreadystatechange = function(){
	  if(request.readyState == 4 && request.status == 200){
	    var data = JSON.parse(request.responseText);
	    var address = data.results[0];
	    console.log(address.formatted_address);
	  }
	};
request.send();
};