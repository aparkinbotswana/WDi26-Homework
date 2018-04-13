var debounce_timer;
var page_counter = 1;
var max_not_reached = true;

const searchFlickr = function (term) {
  console.log('Searching Flickr for', term);

  // the jsoncallback=? here lets us use something called JSONP
  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

  // This is actually using JSONP, not AJAX
  // but jQuery lets us pretend it is just AJAX.
  // if (max_not_reached == true) {
    $.getJSON(flickrURL, {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084', // not a secret key
      text: term,
      format: 'json',
      page: page_counter
    }).done(showImages);
  // };
};

const showImages = function (results) {
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
  results.photos.photo.forEach(function (photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img />', {src: thumbnailURL}); // Or .attr('src', thumbnailURL)
    $img.appendTo('#images'); // Or $('#images').append($img);

  });
  page_counter++;
  console.log(page_counter);
  console.log("attempt to display")
  debugger;
  // debugger;
  // if (page_counter == results.photos.pages) {
  //   max_not_reached = false;
  //   debugger;
  // }
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault();
    const query = $('#query').val();
    searchFlickr( query );
  });

  $(window).on('scroll', function () {
    if(debounce_timer) {
      window.clearTimeout(debounce_timer);
    }
    debounce_timer = window.setTimeout(function() {

      const documentHeight = $(document).height();
      const windowHeight = $(window).height();
      const scrollTop = $(document).scrollTop();
      const scrollBottom = documentHeight - (windowHeight + scrollTop);
      // debugger;
  
      if (scrollBottom < 200) { // Tweak this value
        const query = $('#query').val();
        console.log( scrollBottom );
        searchFlickr( query ); // Don't make too requests: throttle this
      }

      console.log('Fire');
    } , 300);


    // const documentHeight = $(document).height();
    // const windowHeight = $(window).height();
    // const scrollTop = $(document).scrollTop();
    // const scrollBottom = documentHeight - (windowHeight + scrollTop);
    // debugger;

    // if (scrollBottom < 500) { // Tweak this value
    //   const query = $('#query').val();
    //   console.log( scrollBottom );
    //   searchFlickr( query ); // Don't make too requests: throttle this
    // }
  });
});

/* TODO: ************************************************************

throttle the requests -- don't make too many requests (done)
pagination -- eventually we should all possible matching results
stop at end of the results -- no more requests
bonus: whatever you like

*/
