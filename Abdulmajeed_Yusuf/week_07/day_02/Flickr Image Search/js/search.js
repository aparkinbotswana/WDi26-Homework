const searchFlickr = function(term){
  console.log('Searching Flickr for', term);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '36643062be343c707601f7facafaa351',
    text: term,
    format: 'json'
  }).done(showImages);
};

const showImages = function (results){
  const generateURL = function (p) {
    return [
      'http://farm',
      p.farm,
      '.static.flickr.com/',
      p.server,
      '/',
      p.id,
      '_',
      p.secret
      '_q.jpg'
    ].join('');
  }
  //for each photos
  results.photos.photo.forEach(function (photo) {

  });
  //generate a URL
  //create an image for that URL
  //display the image
}

$(document).ready(function () {
  $('#search').on('submit', function(event){
    event.preventDefault();
    const query =  $('#query').val();

    searchFlickr(query);
  })
})
