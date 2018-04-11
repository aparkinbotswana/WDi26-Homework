var norrisURL = 'https://api.chucknorris.io/jokes/random?';
var categoryList = 'https://api.chucknorris.io/jokes/categories?';

const pullJoke = function (term) {
    $.getJSON(norrisURL, {
      category: term,
    }).done(writeOutput);
};

const writeOutput = function (results2) {
  $(".answerbox").html( "<p>Category: " + results2.category + "</p><p>"+ results2.value + "</p>");
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
    let reader = $("#options :selected").text();
    debugger;
    pullJoke( reader );
  });
});