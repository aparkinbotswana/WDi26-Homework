//throttle the requests - don't make too many requests - only get as many images as you need
//look up a particular page in flickr - work out how to get page one with JSON request then work out how to get other pages
//paginate - eventually we should get all possible matching results
//stop at end of the results (page no. of total pages)
//bonus: whatever you like eg. popup full page version
//new search remove all previous results
//underscorejs.org throttle & debounce

var pageIndex = 0;

const searchFlickr = function(term, pageIndex){
  console.log('Searching Flickr for', term);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', //data to be sent to Flickr
    api_key: '2f5ac274ecfac5a455f38745704ad084', //public
    text: term, //text to search for
    format: 'json', //Flickr needs to be told specifically
    page: pageIndex,
    per_page: '499'
  }).done(showImages);
};

const showImages = function(results){
  const generateURL = function(p){ //pass in p object //generateURL is a helper method
    return[
      'http://farm',
        p.farm,
        '.static.flickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_q.jpg' //change q to something else for different sizes eg. f for full-size
    ].join('');
  };

  console.log(results);

  results.photos.photo.forEach(function(photo){
    const thumbnailURL = generateURL(photo);
    const $img = $('<img />', {src: thumbnailURL}); // .attr('src',thumbnailURL)
    $img.appendTo('#images'); //Alternatively $('#images').append($img);
  });
};


$(document).ready(function(){
  $('#search').on('submit', function(event){
    //$('#images').HTML = ""; //clear div containing images
    $('img').remove();
    pageIndex++;
    console.log(pageIndex);
    event.preventDefault();
    const query = $('#query').val();
    searchFlickr(query);
  });

//infinite scroll:

  var scrollFunction = function(){
    const documentHeight = $(document).height();
    const windowHeight = $(window).height();
    const scrollTop = $(document).scrollTop();
    const scrollBottom = documentHeight - (windowHeight + scrollTop);

  if (scrollBottom<500) {
    searchFlickr(query);
    }
  };

  // as shown documentation for underscore.js (same result as below):
  // var throttled = _.throttle(scrollFunction, 300);
  // $(window).scroll(throttled);

  $(window).on('scroll', _.throttle(scrollFunction, 200));

  $('#next').on('click', function(){
      //$('#images').HTML = ""; //clear div containing images
      $('img').remove();
      pageIndex++;
      console.log(pageIndex);
      event.preventDefault();
      const query = $('#query').val();
      searchFlickr(query);
  });


  $('#previous').on('click', function(){
    if(pageIndex >= 2){
      // $('#images').HTML = ""; //clear div containing images
      $('img').remove();
      pageNum--;
      console.log(pageIndex);
      event.preventDefault();
      const query = $('#query').val();
      searchFlickr(query);
    } else {
      pageIndex = 1;
    }
  });

});
