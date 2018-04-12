const searchTeam = function (term) {
  console.log('Searching the database for', term);

  const teamURL = 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?';

  $.getJSON(teamURL, {
    t: term
  }).done(showStadDes, showCountry);
};

const showStadDes = function (results) {
  console.log(results);

const p = results.teams["0"].strStadiumDescription;
console.log(p);
$('<p/>', p).text(p).appendTo('.results');
// const $descr = $('<p/>', p);
// console.log($descr);
// $('.results').append($('p'))
// $descr.appendTo('.results');

};

//Come back to this
const showCountry = function (results) {
  console.log(results);
  const p = results.teams["0"].strCountry;
  console.log(p);
  $('<p/>', p).text(p).appendTo('.results');
};


const throttledSearchTeam = _.throttle(searchTeam, 5000);

$(document).ready(function () {
  $('#search').on('submit', function(event) {
    event.preventDefault();
    const query = $('#query').val();
    searchTeam(query);
  });


});
