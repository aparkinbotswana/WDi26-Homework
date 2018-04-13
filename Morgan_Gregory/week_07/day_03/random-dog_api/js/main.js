// get the data from the random dog website in JSON format when data has been accessed automically pushes into the empty object in the getJSON function and  calls the showImage function
const randomDogURL = function () {
  const dogURL = 'https://random.dog/woof.json';
  $.getJSON(dogURL, {}).done( showImage );
};

// display an image when called on by the randomDogURL function is called
const showImage = function (results) {
  clearImage();

  // create a sub-string start at the URL last '.' and then get everything that follows
  let extension = results.url.substr( (results.url.lastIndexOf('.') +1) );
  // see if value stored in extension is an exact match for 'mp4'
  if (extension === 'mp4') {
    let $video = $('<iframe />', {src: results.url});
    $video.appendTo('#displayImage');
  } else {
    let $img = $('<img />', {src: results.url});
    $img.appendTo('#displayImage');
  }
};

// clear the image from display - call this first when showImage runs to clear the last displayed image
const clearImage = function () {
  $('#displayImage').html("");
};

// when the button is clicked call the randomDogURL function
$('#clickedButton').on('click', randomDogURL);
