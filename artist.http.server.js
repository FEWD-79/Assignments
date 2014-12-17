var msg = "Missing something";
var http = require('http');
var server = http.createServer(function(request,response) {

  var artists = ["Joy_Division","The_Smiths","Interpol"];
  //var Joy_Division = ["Unknown Pleasures","Closer","Substance"];
  //var The_Smiths = ["The Queen Is Dead","Meat is Murder", "Hatful of Hollow"];

  var path = request.url;
  //console.log(path);
  var headline = path.split("/")[1];
  var headline2 = path.split("/")[2];
  var albumName = path.split("/")[3];
  //console.log(headline);

  var str = "";
  var a = "<html><body><ul>";
  var b = "</ul></body></html>"
  var urlArray = [];



  //////////////////////////////////////////////////////////////

  var album = function(name, firstsong, secondsong, thirdsong)
  {
    this.name = name;
    this.record = [firstsong,secondsong,thirdsong];
  }

  var music = function(band_name,album, album2)
  {
    this.band = band_name;
    this.albums = [album,album2];
    this.url = "http://localhost:2000/artists/" + band_name;
  }

  var bands = [];

  var Turn_on_the_Bright_Lights = new album ("Turn_on_the_Bright_Lights","Untitled","Obstacle 2", "Leif Erikson");
  var El_Pintor = new album ("El_Pintor","All The Rage Back Home","My Desire", "Ancient Ways");
  var Interpol = new music("Interpol",Turn_on_the_Bright_Lights, El_Pintor );
  bands.push(Interpol);
 
  var Hatful_of_Hollow = new album ("Hatful_of_Hollow", "Handsome Devil", "How Soon is Now?", "This Charming Man");
  var The_Queen_is_Dead = new album ("The_Queen_is_Dead", "There's a Light that Never Goes Out", "Bigmouth Strikes Again", "Some Girls are Bigger than Others");
  var The_Smiths = new music("The_Smiths", Hatful_of_Hollow, The_Queen_is_Dead);
  bands.push(The_Smiths);
  
  var Closer = new album ("Closer", "Atmosphere", "Isolation", "Atrocity Exhibition");
  var Unknown_Pleasures = new album ("Unknown_Pleasures", "New Dawn Fades", "Shadowplay", "She's Lost Control");
  var Joy_Division = new music("Joy_Division",Closer, Unknown_Pleasures);
  bands.push(Joy_Division);
//  //////////////////////////////////////////////////////////////////////////



if(albumName) {
  console.log("Albums true")
  bands.forEach( function (obj) {
    console.log("Band is ")
    console.log(obj)
    for(i = 0; i < obj.albums.length; i++) {
      console.log(obj.albums.length)
      if(albumName === obj.albums[i].name) {
        console.log(obj.albums[i].name);
        console.log(obj.albums.length)
        for(j = 0; j < obj.albums[i].record.length; j++) {
          console.log(obj.albums[i].record.length)
          str += "<li>" + obj.albums[i].record[j] + "</li>"
          console.log(str)
          }
      }
    }
  })
  response.end(a + str + b)
  str = "";
}


if(headline2) {
  bands.forEach( function (band) {
    //console.log(band);
    if(headline2 === band.band)
        for(i = 0; i < band.albums.length; i++) {
           str += "<li>" + band.albums[i].name + "</li>"
        }
  })
  response.end(a + str + b)
  str = "";
}



if(headline === "artists") {
    bands.forEach( function (band) {
      var name = band.band
      console.log(name);
      //var buildStr = arrayToUrl (band.url, band.band);
      
      //console.log(buildStr)
      //str += "<li> <a href="+ band.url + ">" + band.band + "</li>";
      str += arrayToUrl([band.url,name]);
      console.log("Str is:");
      console.log(str)
   })
     response.end(a + str + b);
     str = "";
  }

})

server.listen(2000);

function arrayToUrl (array) {

  var str = "";
  var lia = "<li> <a href=";
  var lib = "</li>";
  var a = "<html><body><ul>";
  var b = "</ul></body></html>";

  var url = a + lia + array[0] + ">" + array[1] +  lib + b;

  return url;
  //console.log(uel)
}

