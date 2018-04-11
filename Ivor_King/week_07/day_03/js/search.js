const pullJoke = function (term) {
  const norrisURL = 'https://api.chucknorris.io/jokes/random';

    $.getJSON(norrisURL, {
      value: term,
    }).done(writeOutput);

};

const writeOutput = function (results) {
  console.log(results);
};

$(document).ready(function () {
  $('#button1').on('click', function (event) {
    event.preventDefault();
    const query = $('#category').val();
    pullJoke( query );
  });
});