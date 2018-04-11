const fetchBook = function () {
  event.preventDefault(); //Don't leave the page
  const query = $('#query').val();

  // $.post() // Jquery Ajax Post request
  // $.get() // Jquery AJAX Get request
  // $.getJSON() // Jquery AJAX Get JSON request

  $.getJSON(`https://www.googleapis.com/books/v1/volumes?q=${query}`).done(function (info) {
    const cover = info.items[0].volumeInfo.imageLinks.thumbnail;
    const title = info.items[0].volumeInfo.title;
    $('#cover').attr('src', cover).attr('alt', title);

  }).done( function (i) {
    console.log(i);
  }).done( function () {
    alert('Thank  you for this site')
  }).fail( function () {
    alert('Something bad happened')
  });


  //
  // $.ajax(`https://www.googleapis.com/books/v1/volumes?q=${query}`, {
  //   success: function (info) {
  //     const cover = info.items[0].volumeInfo.imageLinks.thumbnail;
  //     const title = info.items[0].volumeInfo.title;
  //     $('#cover').attr('src', cover).attr('alt', title);
  //
  //   }
  // });

}

$(document).ready(function () {
  $('#title-search').on('submit', fetchBook);
});
