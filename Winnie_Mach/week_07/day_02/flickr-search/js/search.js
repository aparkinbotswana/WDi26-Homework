console.log('hi', $.fn.jquery);

var pageNum = 1;
var totalPages = 1;
const searchFlickr = function(searchTerm) {
    console.log('Searching Flickr for', searchTerm);
  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'; //haven't discussed json callback yet

//Not really Ajax. This method turns our url into a query string for us: https://api.flickr.com/services/rest?jsoncallback=jQuery112405072690307866907_1523325352451&method=flickr.photos.search&api_key=2f5ac274ecfac5a455f38745704ad084&text=butterfly&format=json&_=1523325352452
  $.getJSON(flickrURL, {  //this $.getJSON is a subset of the $.ajax()
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084', // public
    text: searchTerm,
    format: 'json',
    page: pageNum++ //the method is $.getJson but still need format to tell flickr to give us json data. Flickr doesn't know about $.getJson.
  }).done(showImages); //this will not be defined until down a little bit, but it's fine because currently in a callback funcion so this won't run till after it's been defined downstairs.
};
const showImages  = function (results) {
  console.log(results);
  console.log(pageNum);
  if(pageNum > results.photos.pages){ //DOESN'T WORK: for one pagers, because first pageNum would be 2, which is greater than 1 page in result so won't display at all. This if else statement only stops the images from showing once pageNum is more than the pages that the results have. But doesn't stop Ajax from requesting data from server. No idea how to stop showImages from running after the $getJSON is done.
  totalPages = results.photos.pages; 
  //pageNum = results.photos.pages; //this stops pageNum from ++ when it is greater than the number of pages in results.
    return;
  } else {
    const generateURL = function(p) {  //turning all the stuff that returns from flickr into a url.
      return [
        'http://farm',
        p.farm,
        '.static.flickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_q.jpg' //change q to something else for different sizes. f = full size version.
      ].join('');
    }
    //  for each photo  // using the forEach method (like ruby) instead of using a loop.
    results.photos.photo.forEach(function(photo) {
      //    generate a url
      const thumbnailURL = generateURL(photo);
      //    create an image for that url
      const $img = $('<img/>', {src: thumbnailURL}); // .attr('src', thumbnailURL)
        //    display the image
        $img.appendTo('#images'); // Alt: $('#images').append($img);
    })
  };

};

// const pagination = function () {
//   const query = $('#query').val();
//   searchFlickr(query);
// };

/////// DOC READY //////////
$(document).ready(function() {
  $('#search').on('submit', function(event) {
    event.preventDefault(); // stop page from redirecting to new page after it submits form.
    const query = $('#query').val();

    searchFlickr(query); // runs a function and passes in the query that user typed in. This function is defined above ^
  });


    const infiniteScroll = function () {  // $(document).height() height of your document.
                                          // $(window).height() height of user's window.
                                          // $(document).scrollTop()  tell you how many pixels you are from the top of the page.
      const documentHeight = $(document).height();
      const windowHeight = $(window).height();
      const scrollTop = $(document).scrollTop();

      const scrollBottom = documentHeight - (windowHeight + scrollTop);

      if(scrollBottom < 500) { //500px atm but can tweak
        const query = $('#query').val(); //find the query that the user typed in again
        searchFlickr(query); //requesting content from Flickr again. Don't make too many requests: throttle
      }
    };

  $(window).on('scroll', _.throttle(infiniteScroll, 2000) );  //A scroll event fires very quickly, every pixel the user scrolls. So we add a throttle to the whole infiniteScroll function so that it doesn't fire quickly and only the timer that we set it.

  // doing it manually: variable to say if and request is in progress then true, when request finished make false. And make the scroll only fire if requestInProgress is false.



});

/*  TODO:
 throttle the requests -- don't make too many requests (can use underscore.js, look at docs> functions> throttle and debounce)
 pagination --eventually we should see all possible matching results
 stop at the end of results -- no more requests // probably a condition, pageNum can't be greater than amount of pages of results.
  */
