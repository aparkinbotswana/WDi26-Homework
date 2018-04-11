
const searchCocktails = function (term) {

  console.log('Searching database for', term);

  const cocktailURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`;


  $.getJSON( cocktailURL, { method: "GET" } ).done(showImages);
};

const showImages = function(results) {
  console.log(results);

  results.drinks.forEach(function (drink) {
    console.log(drink);
    const name = drink.strDrink;
    const thumbnailURL = drink.strDrinkThumb;

    const recipe = drink.strInstructions;
    console.log(thumbnailURL);
// ;debugger
    // const $div = $('<div>').innerHTML('<h3>name</h3><img src=thumbnailURL/>')
    // $div.appendTo('#cocktail-results')
    // const $heading = $('<h3>').text(name) // .attr('src', thumbnailURL)
    // $heading.appendTo('#cocktail-results');
    // console.log($heading);
    // const $img = $('<img />', {src: thumbnailURL, title: name}); // .attr('src', thumbnailURL)
    // $img.appendTo('#cocktail-results'); // Alternatively $('#images').append($img);

    $('#cocktail-results').append(`<div class="cocktail"><h3>${name}</h3><img src='${thumbnailURL}'/></div>`);

  })
};





$(document).ready(function () {

  $('#search').on('submit', function(event) {
    event.preventDefault();
    const query = $('#query').val();
    $('#cocktail-results').empty();
    searchCocktails( query );
  });

});
