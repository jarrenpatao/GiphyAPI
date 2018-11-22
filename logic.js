var APIKey = "LlhK6kJFqNI4XfXCbIWPJ1svfK8Nbw3e"
var queryURL = "https://api.giphy.com/v1/gifs/search?q=chicken&api_key=" + APIKey;

function displayGif() {
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
     
      // extract the array of gifs <--
      // loop through array <--
      // make a blank image container <--
      // add the url to gif to the image container <--
      // append to screen <--

  var gifArray = response.data;
    // console.log(gifArray)
  for(var i = 0; i < gifArray.length; i++){
    var image = $('<img>');
    image.attr('src', gifArray[i].images.fixed_height.url);
    $('.container').append(image);
  }
});
}