// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){

let searchTerm = $("input").val();
  
  var request_url = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&rating=pg&api_key=dc6zaTOxFJmzC";
    
  fetch(request_url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var pic_url = data.data[Math.floor(Math.random() * data.data.length)].images.original.url;
      console.log(data)
        $('.picture').html('<marquee><img src=' + pic_url + '></marquee>');
    })
});

var trending = "https://api.giphy.com/v1/gifs/trending?rating=pg&api_key=dc6zaTOxFJmzC"
console.log("hello")
fetch(trending)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
    var pic_url = data.data[Math.floor(Math.random() * data.data.length)].images.original.url;
    console.log(data)
    $('.trendingpicture').html('<marquee><img src=' + pic_url + '></marquee>');
    })
    


