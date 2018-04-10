// defining 'pageNum' and 'canLoad' here, to be used later on
let pageNum = 1;
let canLoad = true;

const searchFlickr = function(term) {
  // console.log('searching flickr for', term);

  // we haven't discussed JSON callback yet but this does what we need
  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

  $.getJSON(flickrURL, {
    // flickr api says we have to tell it the below info in our request
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084', // public
    text: term,
    format: 'json',
    page: pageNum
  }).done(showImages);
};

const showImages = function(results) {
  const generateURL = function(p) {
    return [
      'http://farm',
      p.farm,
      '.static.flickr.com/',
      p.server,
      '/',
      p.id,
      '_',
      p.secret,,
      '_q.jpg' // change "q" to something else for different sizes etc.
    ].join('');
  };

  console.log(results);

  // for each photo in this array, run this function
  results.photos.photo.forEach(function(photo) {
    // generate a URL
    const thumbnailURL = generateURL(photo);
    // create an image for that URL
    const $img = $('<img />', {src: thumbnailURL}); // equiv to .attr('src', thumbnailURL)
    // display the image
    $img.appendTo('#images'); // aka $('#images').append($img);
  });
  // increment the page number so the next page appears the next time a request is made
  pageNum = pageNum + 1;
  return pageNum;
};

$(document).ready(function() {

  $('#search').on('submit', function(event) {
    event.preventDefault();
    // clear out the div of images each time a new search term is submitted
    $('#images').html("");
    // set page numbe back to 1;
    pageNum = 1;
    console.log('submitted');
    const query = $('#query').val();
    console.log(query);
    searchFlickr(query);
  });

  // Attempt using canLoad true/false ///////////////
  $(window).on('scroll', function() {
    const documentHeight = $(document).height();
    const windowHeight = $(window).height();
    const scrollTop = $(document).scrollTop();
    const scrollBottom = documentHeight - (windowHeight + scrollTop);
    console.log(documentHeight, scrollBottom);
    console.log(canLoad);

    // below: throttle the requests
    if (scrollBottom < 600 && canLoad == true) { // may need to tweak this value
      const query = $('#query').val();
      searchFlickr(query);
      canLoad = false
      return canLoad
    }
    if (scrollBottom > 1000) {
      // if above 1000, it means new results came through so we're ready for another request when it gets towards the bottom again
      canLoad = true
      return canLoad
    }
  });
});

/*
TODO:
- throttle the requests (make one at a time). underscore.js has a built in way to throttle results. if want it - use curl request to save into relevant folder.
- pagination - not get same results - read flickr api documentation. eventually see all possible matching results.
- once seen last photo on last page, don't keep requesting from flickr.
- give new search term and they'll appear below or replace those that were there
- bonus: whatever, e.g. make all photos be a link to the page on flickr. or different size pics from flickr. decide if new search removes previous results. etc.
*/
