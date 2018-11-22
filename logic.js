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
  var animal = $(this).attr("data-animal");

  // Constructing a queryURL using the animal name
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    animal + "&api_key=dc6zaTOxFJmzC&limit=10";

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
      // console.log(queryURL);

      // console.log(response);
      // // storing the data from the AJAX request in the results variable
      var results = response.data;

      // // Looping through each result item
      for (var i = 0; i < results.length; i++) {

      //   // Creating and storing a div tag
        var animalDiv = $("<div>");

      //   // Creating a paragraph tag with the result item's rating
        var p = $("<p>").text("Rating: " + results[i].rating);

      //   // Creating and storing an image tag
        var animalImage = $("<img>");
      //   // Setting the src attribute of the image to a property pulled off the result item
        animalImage.attr("src", results[i].images.fixed_height.url);

      //   // Appending the paragraph and image tag to the animalDiv
        animalDiv.append(p);
        animalDiv.append(animalImage);

      //   // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
        $(".gif").prepend(animalDiv);
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