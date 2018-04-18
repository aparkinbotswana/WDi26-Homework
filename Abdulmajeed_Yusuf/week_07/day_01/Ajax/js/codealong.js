const fetchBook = function (event) {
  event.preventDefault(); //Don't leave the page, this is necessary in ajax
  const query = $('#query').val();

  // JQuery Ajax
  // $.ajax('url', {...}) this is the format for passing ajax
  $.ajax(`https://www.googleapis.com/books/v1/volumes?q=${ query }&key=AIzaSyAm_AVmFB4Gx0AO7s--qJwM3Bo2CKGi4qI`).done(function (info) {
    const cover = info.items[0].volumeInfo.imageLinks.thumbnail;
    const title = info.items[0].volumeInfo.title;
    $('#cover').attr('src', cover).attr('alt', title);
  }).done (function (i) {
    console.log(i);
  }).done(function () {
    alert('Thank you for visiting this site');
  }).fail(function () {
    alert('Something bad happen')
  })
  };

$(document).ready(function () {
  $('#title-search').on('submit', fetchBook);
})
