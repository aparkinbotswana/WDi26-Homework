const state = {
  pageNum: 1,
  requestInProgress: false,
  lastPage: false
};

const searchFlickr = function (term, i=1) {
  console.log('Searching Flickr for', term);

  // We haven't discussed jsconcallback yet.
  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';


  if (state.requestInProgress === true) {
    console.log('Searching flickr', term);
  }


  // Not really AJAX
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084', // public
    text: term,
    format: 'json',
    page: state.pageNum++    // pagination
  }).done(showImages);

  state.requestInProgress = false;
};

const showImages = function (results) {
  state.requestInProgress = false;

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

$(document).ready(function () {

  $('#search').on('submit', function (event) {
    pageNum++
    console.log(pageNum);
    event.preventDefault();
    const query = $('#query').val();
    searchFlickr( query );

  });

  // $('#next').on('click', function (event) {
  //
  //   console.log(pageNum);
  //   event.preventDefault();
  //   const query = $('#query').val();
  //   searchFlickr( query );    // buttom to Change the page

  $(window).on('scroll',_.throttle( function () {
    console.log(pageNum);
    const documentHeight = $(document).height();
    const windowHeight = $(window).height();
    const scrollTop = $(document).scrollTop();

    const scrollBottom = documentHeight - (windowHeight + scrollTop);

    if (scrollBottom < 500) { // Tweak this value
      const query = $('#query').val();


      searchFlickr( query ); // Don't make too requests: throttle
    }
  }, 250));
});

/*

TODO:

throttle the requests -- don't make too many requests
pagination -- eventually we should all possible matching results
stop at end of the results -- no more requests
bonus: whatever you like
*/
