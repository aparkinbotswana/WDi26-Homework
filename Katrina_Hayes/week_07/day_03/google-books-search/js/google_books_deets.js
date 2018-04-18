const fetchPreview = function(book) {
  const googleURL = `https://www.googleapis.com/books/v1/volumes?q=${ book }`;
  $.getJSON(googleURL, {}).done(addPreview);
};

const addPreview = function(info) {
  console.log(info);
  const previewLink = info.items["0"].volumeInfo.previewLink
  console.log(previewLink);
  $('#preview').attr('href', previewLink);
}

const fetchDescription = function(book) {
  const googleURL = `https://www.googleapis.com/books/v1/volumes?q=${ book }`;
  $.getJSON(googleURL, {}).done(showDescription).done(getPreview);
};

const showDescription = function(info) {
  console.log(info);
  const $description = $('<p>');
  const description = info["items"][0]["volumeInfo"]["description"];
  console.log(description);
  $description.html(description);
  $description.appendTo('#show_description');
  // const snippet = info.items["0"].searchInfo.textSnippet;
  // console.log(snippet);
};

$(document).ready(function() {

  const book = $('h1').text();
  console.log(book);

  fetchPreview(book);

  $('#get_description').on('click', function() {
    const book = $('#get_description').val()
    console.log(book);
    $('#show_description').empty();
    fetchDescription(book);
  });
});
