

const generateDog = function() {
  console.log("Searching for a dog image");
  const dogURL = "https://random.dog/woof.json";
  $.getJSON(dogURL,{}).done(showDog);
}

const showDog = function(apiResponse) {
  const apiResponseURL = apiResponse.url;
  console.log(apiResponseURL);
  //debugger;
  let fileType = apiResponseURL.substr(apiResponseURL.length - 1);
  console.log(fileType);
  if(fileType === "4"){
    let $dogVideo = $('<iframe>').attr('src', apiResponseURL);
    $dogVideo.appendTo('#results');
  } else {
    let $dogImage = $('<img>').attr('src', apiResponseURL);
    $dogImage.appendTo('#results');
  }

};



/////// DOM STUFF ///////

$(document).ready(function() {
  $('#search').on('submit', function(event) {
    event.preventDefault();
    $('#results').empty();
    generateDog();
  })
});


///// HTML ////
{/* <div class="container">
<h1>Generate Dog Images</h1>

<form id="search">
  <button>Generate!</button>
</form>
<div id="results"></div>
</div> */}
