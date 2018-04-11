// NOTE: theo pagination tutorial 10-04-18 N.B. Global suggested as a way to get started in practice not a good idea
var pageNum = 1;
var lastPage;
var updatePosition;

const searchFlickr = function (term) {
  
  // NOTE: below the throttle function from http://underscorejs.org/#throttle
  let throttled = _.throttle(updatePosition, 100);
  $(window).scroll(throttled);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

  $.getJSON(flickrURL, {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084',
      text: term,
      format: 'json',
      page: pageNum // NOTE: theo pagination tutorial 10-04-18
      // pages: lastPage
    }).done(showImages);
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
        '_q.jpg' // _b: big, _t: thumbnail, _m: small, _o: original
      ].join('');
    };

    console.log(results);
    lastPage = results.photos.pages;
    // displays the images on the page:
    results.photos.photo.forEach(function (photo) {
      const thumbnailURL = generateURL(photo);
      const $img = $('<img />', {src: thumbnailURL});
      $img.appendTo('#images'); // display in div with id=images
    });
  };

  $(document).ready(function () {
    // 1. SEARCH function:
    $('#search').on('submit', function (event) {
      console.log(pageNum);
      event.preventDefault();
      const query = $('#query').val();
      searchFlickr( query );
    });

    // 2. NEXT function:
    // NOTE: theo pagination tutorial 10-04-18
      $('#next').on('click', function (event) {
        if (pageNum < lastPage) {

        pageNum++
        event.preventDefault();
        $('#images').empty();

        const query = $('#query').val();
        searchFlickr( query );
        return query;
        }
    });

    // 3. PREVIOUS function:
    // NOTE: 'my' code
    $('#previous').on('click', function (event) {
      if (pageNum > 1) {
        pageNum--
        event.preventDefault();
        $('#images').empty();

        const query = $('#query').val();
        searchFlickr( query );
        return query;
      }
  });

  $(window).on('scroll', function () {
      const documentHeight = $(document).height();
      const windowHeight = $(window).height();
      const scrollTop = $(document).scrollTop();

      const scrollBottom = documentHeight - (windowHeight + scrollTop);

      // if (scrollBottom < 500) { // tweak this value
      //   // console.log('near the bottom');
      //   const query = $('#query').val();
      //   searchFlickr( query ); // dont make tip requests: throttle
      // }
  });
});

/*
TODO:
1. throttle the requests -- don't make too many requests

2. pagination -- eventually we should all possible matching results

3. stop at end of the results -- no more requests

bonus: whatever you like
*/
