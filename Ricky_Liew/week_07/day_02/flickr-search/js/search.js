
let page = 0;

const searchFlickr = function (term) {
  page++;
  console.log('Searching Flickr for', term);

  // We haven't discussed jsconcallback yet.
  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

  // Not really AJAX
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084', // public
    text: term,
    format: 'json',
    page: page
  }).done(showImages);
};

const showImages = function (results) {
  console.log(results.photos.page);

  document.getElementById("images").innerHTML = '';
  //page = 0;

  const generateURL = function (p) {
    return [
      'http://farm',
      p.farm,
      '.static.flickr.com/',
      p.server,
      '/',
      p.id,
      '_',
      p.secret,
      '_q.jpg' // Change "q" to something else for different sizes
    ].join('');
  };

  console.log( results );

  results.photos.photo.forEach(function (photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img />', {src: thumbnailURL}); // .attr('src', thumbnailURL)
    $img.appendTo('#images'); // Alternatively $('#images').append($img);
  });
};

const debounced = _.debounce(searchFlickr, 2000);

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault();
      page=0;
    const query = $('#query').val();
    searchFlickr( query );
  });

  $(window).on('scroll', function(){
    //console.log('scroll');
    const documentHeight = $(document).height();
    const windowHeight = $(window).height();
    const scrollTop = $(document).scrollTop();

    const scrollBottom = documentHeight - (windowHeight + scrollTop);

    //console.log(scrollBottom);
    if(scrollBottom < 500){
      // Tweak this
      console.log('near the bottom');
      const query = $('#query').val;
      //searchFlickr(query); // don't make too many requests - throttle
      debounced(query);
    }
  });
});


//TODO:
// 1 Throttle
// 2 Pagination
// 3 Stop at the end
// bonus: make thumbnails active
