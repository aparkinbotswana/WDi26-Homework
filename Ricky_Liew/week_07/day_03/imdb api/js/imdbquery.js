console.log(`test`);

let Key = 'ef33cb8300df5dde7b8ae5f9bd8357'


// https://stackoverflow.com/questions/14129271/is-there-any-built-in-function-to-generate-md5-of-string-in-javascript-jquery

const getMovie = function(name, type){
  let request = new XMLHttpRequest();
  let imdbUrl = 'https://api.themoviedb.org/3/search/'
  let requestUrl = imdbUrl + type + '?api_key=' + key + '&query=' + name;

console.log(requestUrl)

//   request.open('GET', requestUrl, true);
//   request.setRequestHeader('Content-Type', 'application/json');
//   request.send();


//   request.onload = function () {
//     if(request.status >= 200 && request.status < 400){

//       //let result = JSON.parse(request.responseText).data.results[0];
//       let result = JSON.parse(request.responseText).data.results;
//       //console.log(result);
//       for (var i = 0; i < result.length; i++) {
//         // console.log(result[i]);
//         console.log(`id: ${result[i].id}`);
//         console.log(`title: ${result[i].title}`);
//         console.log(`thumbnail: ${result[i].thumbnail.path}`);
//         console.log(`extension: ${result[i].thumbnail.extension}`)
//         console.log('');
//       }
//     }
//   }
}

