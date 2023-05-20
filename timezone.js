const date1 = new Date();
document.getElementById("city").innerHTML =
"Name of the Timezone: " + Intl.DateTimeFormat().resolvedOptions().timeZone;
getLocation();
var x = document.getElementById("lanlon");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

var requestOptions = {
    method: 'GET',
  };
  
  fetch("https://api.geoapify.com/v1/geocode/reverse?lat=51.21709661403662&lon=6.7782883744862374&apiKey=98128524e7a44280a0763ef14c62d0e2", requestOptions)
    .then(resp => resp.json())
.then((result) => {
  if (result.length) {
	  console.log(result[0].timezone);
  } else {
    console.log("No location found");
  }
});


/*fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=46.739&lon=2.327&format=json&apiKey=YOUR_API_KEY`)
.then(resp => resp.json())
.then((result) => {
  if (result.length) {
    document.getElementById("name").innerHTML=(result[0].timezone);
  } else {
    document.getElementById("name").innerHTML="No location found";
  }
});*/
