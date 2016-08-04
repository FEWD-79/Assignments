// $(document).ready(function() {
//     jQuery.getScript('http://www.geoplugin.net/javascript.gp', function()
//   {
//     var country = geoplugin_countryName();
//     var zone = geoplugin_region();
//     var district = geoplugin_city();
//     console.log("Your location is: " + country + ", " + zone + ", " + district);
//   });
// });

  // alert("Your location is: " + geoplugin_countryName() + ", " + geoplugin_region() + ", " + geoplugin_city());

$(function() {
  // DOM is now ready
  //_500pxSDK = function () { line 7
  //window._500px = new _500pxSDK(); line 464
  _500px.init({
      sdk_key: '7047647e1293746f6e070dbe55eb2ec68b2ee6cd'
    });

  $('#login').click(function() {
    _500px.login();
  });

    // When a successful login to 500px is made, they fire off the 'authorization_obtained' event
  _500px.on('authorization_obtained', function() {
    // Successful OAuth login!
        $('.sign-in-view').hide();
        $('.image-results-view').show();

        // check if navigator geolocation is available from the browser
      if (navigator.geolocation) {
        // if it is use the getCurrentPosition method to retrieve the Window's location
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var long = position.coords.longitude;

            console.log('lat: ', lat);
            console.log('long: ', long);

        // Feel free to adjust the search radius as you see fit
        var radius = '25mi';

        var searchOptions = {
          geo: lat + ',' + long + ',' + radius,
          only: 'Landscapes', // We only want landscape photos
          image_size: 3, // This isn't neccessary but by default the images are thumbnail sized
            rpp: 28,  // Return 28 results
            sort: 'highest_rating'  // Sort results by highest rated
        };

        _500px.api('/photos/search', searchOptions, function(response) {
          if (response.data.photos.length == 0) {
            alert('No photos found!');
          } else {
            // Handle the successful response here
            console.log(response);
            handleResponseSuccess(response);
          }
        });


          // Get the currently logged in user
          _500px.api('/users', function(response) {
            var me = response.data.user;
            // Now we have access to the user name and other information
            console.log('Loggin in: ', me);
          });
        })
      } else {
        $('.images').append('Sorry, the browser does not support geolocation');
      }
    });
});

function handleResponseSuccess(response) {
  var allData = response.data.photos;

  $.each(allData, function() {
    var element = $('<img>').attr('src', this.image_url).addClass('image');
    $('.images').append(element);
  });
}
