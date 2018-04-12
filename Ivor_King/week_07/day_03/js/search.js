var norrisURL = 'https://api.chucknorris.io/jokes/random?';
var categoryList = 'https://api.chucknorris.io/jokes/categories?';
var reader;

const pullJoke = function (term) {
    $.getJSON(norrisURL, {
      category: term,
    }).done(writeOutput);
};

const writeOutput = function (results2) {
  $(".answerbox").html( "<p>Category: " + reader + "</p><p>"+ results2.value + "</p>");
  console.log(results2);
};

const buildMenu = function (results1) {
  $.each(results1, function ( i ) {
    $('<option/>', { value: i }).text(results1[i]).appendTo('#options');
  });
};

$(document).ready(function () {
  event.preventDefault();
  $.getJSON(categoryList).done(buildMenu);
  $('#button1').on('click', function (event) {
    reader = $("#options :selected").text();
    pullJoke( reader );
  });
});