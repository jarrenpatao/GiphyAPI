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
    $('.gif').append(image);
  }
});
}

$(".gif").on("click", function() {
  // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
  var state = $(this).attr("data-state");
  
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});