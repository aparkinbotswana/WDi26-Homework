console.log(`test`);

let privKey = 'a8f53d74ff1b0b36fe8cb260b585e054243d9bc4'
let pubKey  = '01c7334ab72d75bf17262f6a543261f3'

// https://stackoverflow.com/questions/14129271/is-there-any-built-in-function-to-generate-md5-of-string-in-javascript-jquery

const getMarvelResponse = function(){
  let characterName = 'wolverine'
  let request = new XMLHttpRequest();
  let marvelUrl = 'http://gateway.marvel.com:80/v1/public/characters?name='
  let ts = new Date().getTime();
  let web = marvelUrl + characterName + "&ts=" + ts + '&apikey=' + pubKey + "&hash=" + md5(ts+privKey+pubKey);

  request.open('GET', web, true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send();
  request.onload = function () {
    if(request.status >= 200 && request.status < 400){

      let result = JSON.parse(request.responseText).data.results[0];
      console.log(result);

      console.log(`name: ${result.name}`);
      console.log(`description: ${result.description}`);
    }
  }


  //let characterId = '1009718'; // wolverine



}

getMarvelResponse();
