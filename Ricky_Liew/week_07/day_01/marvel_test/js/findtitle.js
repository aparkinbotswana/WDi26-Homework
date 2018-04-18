console.log(`test`);

let privKey = 'a8f53d74ff1b0b36fe8cb260b585e054243d9bc4'
let pubKey  = '01c7334ab72d75bf17262f6a543261f3'

// https://stackoverflow.com/questions/14129271/is-there-any-built-in-function-to-generate-md5-of-string-in-javascript-jquery

const getMarvelResponse = function(titleName){
  //let titleName = 'spider-man'
  let request = new XMLHttpRequest();
  let marvelUrl = 'https://gateway.marvel.com:443/v1/public/series?title='
  let ts = new Date().getTime();
  let web = marvelUrl + titleName + "&ts=" + ts + '&apikey=' + pubKey + "&hash=" + md5(ts+privKey+pubKey);

//https://gateway.marvel.com:443/v1/public/series?title=spider-man&limit=10&apikey=01c7334ab72d75bf17262f6a543261f3

  request.open('GET', web, true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send();
  request.onload = function () {
    if(request.status >= 200 && request.status < 400){

      //let result = JSON.parse(request.responseText).data.results[0];
      let result = JSON.parse(request.responseText).data.results;
      //console.log(result);
      for (var i = 0; i < result.length; i++) {
        // console.log(result[i]);
        console.log(`id: ${result[i].id}`);
        console.log(`title: ${result[i].title}`);
        console.log(`thumbnail: ${result[i].thumbnail.path}`);
        console.log(`extension: ${result[i].thumbnail.extension}`)
        console.log('');
      }
      // for each (var r in result){
      //   console.log(result);
      //
      //   console.log(`id: ${r.id}`);
      //   console.log(`title: ${r.title}`);
      //   console.log(`thumbnail: ${r.thumbnail.path}`);
      //   console.log(`extension: ${r.thumbnail.extension}`)
      // }
    }
  }


  //let characterId = '1009718'; // wolverine



}

getMarvelResponse('Spider-Man');
