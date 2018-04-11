let resultInProgress = false;

let countPage = 1;

const searchFlickr = function(term){
  if(resultInProgress === true){return;}
  resultInProgress = true;
  console.log('searching for flickr', term);
  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

  //not really ajax
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: term,
    format: 'json',
    page: countPage++,

  }).done(showImages);

};

const showImages = function(results){

 resultInProgress = false;
 console.log(results);
  const generateURL = function(p){
    return [
      'https://farm',
       p.farm,
       '.static.flickr.com/',
       p.server,
       '/',
       p.id,
       '_',
       p.secret,
       '_q.jpg'
    ].join('');
  };

  //for each photo
    results.photos.photo.forEach(function (photo) {
      //generate a url
      const thumbnailURL = generateURL(photo);
      const $img = $('<img />',{src: thumbnailURL}); //.attr('src', thumbnailURL)
        //display the image
      $img.appendTo('#images');
    });

    //create an image for that url
  };


  $(document).ready(function(){
    $('#search').on('submit', function(event){
    event.preventDefault();
    const query = $('#query').val();
    $('#images').html("");
    searchFlickr(query);
  });


  $(window).on('scroll',function(){

    const documentHeight = $(document).height();
    const windowHeight = $(window).height();
    const scrollTop = $(document).scrollTop();
  

    const scrollBottom = documentHeight - (windowHeight + scrollTop);
    if (scrollBottom < 500 ){//tweak this value
      const query = $('#query').val();
      searchFlickr(query); //don't make too request
    }
  });
});
