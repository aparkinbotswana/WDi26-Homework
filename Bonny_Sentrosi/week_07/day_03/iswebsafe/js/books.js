const fetchBook = function (event) {
  event.preventDefault(); // Don't leave the page.
  const query = $('#query').val();

  $.getJSON(`https://www.googleapis.com/books/v1/volumes?q=${'url'}+inauthor:keyes&key=AIzaSyBF8P4dnNVmiUkKdSlnU3fdPjvF2Kpy5aQ`).done(function (info) {
  // $.getJSON(`http://api.mywot.com/0.4/public_link_json2?hosts=facebook.COM/&callback=process&key=f4da2770504d9c1cd48af8e553dc6475da15edca`).done(function (info) {
  // $.getJSON(`https://www.googleapis.com/books/v1/volumes?q=${ query }&key=AIzaSyAAiCRdJuc3KbZmfKzLhPkm4DAoG5-7lcA`).done(function (info) {
  const rates = info.items[1].volumeInfo.averageRating;
  const counts = info.items[1].volumeInfo.ratingsCount;

  let averageRating = (rates+counts/2);

  print(`${title} ${low}`);
    print(`${averageRating}`);

  }).fail(function () {
    alert('Something bad happened');
  });
}

// $(document).ready(function () {
//   $('#title-search').on('submit', fetchBook);
// });


// $.getJSON(`http://api.mywot.com/0.4/public_link_json2?hosts=facebook.COM/&callback=process&key=f4da2770504d9c1cd48af8e553dc6475da15edca`).done(function (info) {
// $.getJSON(`https://www.googleapis.com/books/v1/volumes?q=${'url'}&key=AIzaSyBF8P4dnNVmiUkKdSlnU3fdPjvF2Kpy5aQ`).done(function (info) {
// $.getJSON(`https://www.googleapis.com/books/v1/volumes?q=${'url'}+inauthor:keyes&key=AIzaSyBF8P4dnNVmiUkKdSlnU3fdPjvF2Kpy5aQ`).done(function (info) {
// $.getJSON(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBF8P4dnNVmiUkKdSlnU3fdPjvF2Kpy5aQ`).done(function (info) {
