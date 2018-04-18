console.log(`test`);

const searchTmdb = function(name, type){

  const key = 'ef33cb8300df5dde7b8ae5f9bd8357ed';
  const tmdbUrl = 'https://api.themoviedb.org/3/search/' + type ;
  

  $.getJSON(tmdbUrl, {
    api_key: key,
    query: name
  }).done(console.log).done(getResults)
}

const renderResults = function(type, id, title, poster, blurb){
  //document.getElementById("collection").innerHTML = '';

  // Item
  const $itemDiv = $('<div />', {class: "item"});
  $itemDiv.appendTo('#collection');

  // Title box
  const $titleDiv = $('<div />', {class: "title"});
  $titleDiv.append(title);
  $titleDiv.appendTo($itemDiv);

  // Image
  const $pic = $('<img />', {src: poster, alt:title, id: id, class: "image"});
  $pic.appendTo($itemDiv);

  // Synopsis text box
  const $txtDiv = $('<div />', {class: "txt-box"});
  $txtDiv.append(blurb);
  $txtDiv.appendTo($itemDiv);

  // const $txtDiv = $('<div />', {class: "txt-box"});
  // const $inputCh = $('<input />', {id: "ch", type: "checkbox"});
  // const $lbl = $('<label />', {for: "ch"});
  // const $description = $('<div />', {class: "text"});
  // $description.appendTo($lbl);
  // $lbl.appendTo($inputCh);
  // $inputCh.appendTo($txtDiv);

  // console.log(title);
}

const getResults = function(results){
  console.log(results);
  const thumbnailBaseUrl = 'https://image.tmdb.org/t/p/w200';
  if(results.results[0].title){ // true if movie
    results.results.forEach(function(movie){
      movId = movie.id;
      movTitle = movie.title;
      movPoster = thumbnailBaseUrl + movie.poster_path;
      movBlurb = movie.overview;
      movOrigin = movie.origin_country;
      movRelDate = movie.release_date;

      renderResults("movie", movId, movTitle, movPoster, movBlurb);
    })
  }else{                        // tv show
    results.results.forEach(function(tv){


      tvId = tv.id;
      tvName = tv.name;
      tvPoster = thumbnailBaseUrl + tv.poster_path;
      tvBlurb = tv.overview;
      tvOrigin = tv.origin_country;
      tvRelDate = tv.release_date;

      renderResults("tv", tvId, tvName, tvPoster, tvBlurb);
    })
  }

  // console.log(`Title: ${results[0].original_title}`);
  // console.log(`Original name: ${results[0].original_name}`);
}


const getValues = function(event){
  event.preventDefault();
  document.getElementById("collection").innerHTML = '';
  let title = document.getElementById('title').value;
  let type = document.getElementById('type').value;

  searchTmdb(title, type);
}


const button = document.getElementById('fetch');
button.addEventListener('click', getValues);



