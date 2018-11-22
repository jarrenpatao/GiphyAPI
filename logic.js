// var APIKey = "LlhK6kJFqNI4XfXCbIWPJ1svfK8Nbw3e";
// var querySearch = "";
// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + querySearch + "&api_key=" + APIKey;

// function displayGif() {
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//     console.log(response);
     
      // extract the array of gifs <--
      // loop through array <--
      // make a blank image container <--
      // add the url to gif to the image container <--
      // append to screen <--

// Adding click event listen listener to all buttons
$("button").on("click", function() {
  // Grabbing and storing the data-animal property value from the button
  var search = $(this).attr("data-search");

  // Constructing a queryURL using the search name
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    search + "&api_key=dc6zaTOxFJmzC&limit=10";

  // Performing an AJAX request with the queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After data comes back from the request
    .then(function(response) {

      var gif = response.data[0];
      console.log(gif)

      var image = $('<img>');
      image.attr('src', gif.images.fixed_height_still.url);
      image.attr('data-state', "still");
      image.attr('data-still', gif.images.fixed_height_still.url);
      image.attr('data-animate', gif.images.fixed_height.url);
      image.attr("class", "clicky");


      $('.gif').append(image)
      
      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        var searchDiv = $("<div>");
        var p = $("<p>").text("Rating: " + results[i].rating);
        var searchImage = $("<img>");
        searchImage.attr("src", results[i].images.fixed_height.url);
        searchDiv.append(p);
        searchDiv.append(searchImage);
        $(".gif").prepend(searchDiv);
      }
    });
    
    $(document).on('click', '.clicky', function(){
      var state = $(this).attr('data-state');

      if(state === "still"){
    $(this).attr('src', $(this).attr('data-animate'));
    $(this).attr('data-state', "moving");
  } else{
    $(this).attr('src', $(this).attr('data-still'));
    $(this).attr('data-state', "still");
  }
    })
  })
// })
// }