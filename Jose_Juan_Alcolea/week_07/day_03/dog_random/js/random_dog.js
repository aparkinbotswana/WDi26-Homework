
let results;


const searchRandomDog = function () {

  const randomDogURL = 'https://random.dog/woof.json'
  $.getJSON(randomDogURL,{}).done(showImage);

 };

  const showImage = function (results) {
    let $img = $('<img />', {src: results.url});
    $img.appendTo('#images');
  }

$(document).ready(function () {
$('#dogSearch').on('click', searchRandomDog);
});
