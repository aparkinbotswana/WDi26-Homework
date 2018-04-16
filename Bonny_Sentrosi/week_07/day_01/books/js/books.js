const fetchBook = function(event){
  event.preventDefault(); //don't leave the page, ajax likes to leave after submitting forms
  cont query = $('#query').val();

  $.ajax('url', {
    method: 'get',
    dataType: 'json'
  })
  $.ajax(`https://www.googleapis.com/books/v1/volumes?q=${ query }&key=AIzaSyBF8P4dnNVmiUkKdSlnU3fdPjvF2Kpy5aQ`){
    success: function (info){
      const cover = info.items[0].volumeInfo.imageLinks.thumbnail;
      const title = info.items[0].volumeInfo.imageLinks.title;
      $('#cover').attr('src', cover).attr('alt', title);

      document.getElementById('cover')
      image.src = cover;
      image.alt = title;

    }
  });
}

$(document).ready(function (){
$('#title-search').on('submit', fetchbook);
});
