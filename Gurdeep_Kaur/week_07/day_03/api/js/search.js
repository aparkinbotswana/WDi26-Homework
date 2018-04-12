

const searchFlickr = function(term){



  console.log('searching for flickr', term);

  const flickrURL = 'https://rickandmortyapi.com/api/character';




  //not really ajax
  $.getJSON(flickrURL, {
    // method: 'flickr.photos.search',
  //   api_key: '2f5ac274ecfac5a455f38745704ad084',
  //   text: term,
  //   format: 'json',
  //   page: state.page++
  }).done(showImages).done(function(r){


      // if(r.photos.page >= r.photos.pages){
      //   state.lastPage = true;
      // }
  // }).done(function(info){
  //   const query = name.price;
  //   $('#query').attr('src',query).attr('alt',name);
  // });
});
};
const showImages = function(results){
  console.log(results.results[1]);
  const generateURL = function(p){
    // return [
    //   'https://farm',
    //    p.farm,
    //    '.static.flickr.com/',
    //    p.server,
    //    '/',
    //    p.id,
    //    '_',
    //    p.secret,
    //    '_q.jpg'
    // ].join('');
  };
  //for each photo
  // results.photos.photo.forEach(function (photo) {
    //generate a url
    // const thumbnailURL = generateURL(photo);
    const $img = $('<img />',{ src: results.results[1].image }); //.attr('src', thumbnailURL)
      //display the image
    $img.appendTo('#images');
    //append the fact to the page
    const $p = $('<p>');
    $p.html(results.results[1].gender);
    $p.appendTo('#images');
  // });

  //create an image for that url
};

$(document).ready(function(){
  $('#search').on('submit',function(event){
    event.preventDefault();

    const query = $('#query').val();
    // state.lastPage = false;
    // state.page = 1;
    $('#images').empty('');
    searchFlickr( query );
  });
});
  // const throttledSearchFlickr = _.throttle(searchFlickr, 6000, {trailing: false});

  // $(window).on('scroll',function () {
  //   const documentHeight = $(document).height();
  //   const windowHeight = $(window).height();
  //   const scrollTop = $(document).scrollTop();
  //
  //   const scrollBottom = documentHeight - (windowHeight + scrollTop);
  //   if (scrollBottom < 500 ){//tweak this value
  //     const query = $('#query').val();
  //     throttledSearchFlickr(query); //don't make too request
  //   }
  // });
// });
