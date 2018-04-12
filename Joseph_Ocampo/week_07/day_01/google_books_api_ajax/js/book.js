
const fetchBook = function () {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () { // you can never return something from an asyncronus function
    if (xhr.readyState !== 4) {
      return; //Not ready yet
    }
    const info = JSON.parse( xhr.responseText );
    console.log (info.items[0].volumeInfo.imageLinks.thumbnail);

    document.getElementById('results').innerHTML = ''; // Reset results

    const img = document.createElement('img')
    img.src = info.items[0].volumeInfo.imageLinks.thumbnail;
    console.log(img);
    document.getElementById('results').appendChild(img);

    const p = document.createElement('p')
    p.innerHTML = info.items[0].volumeInfo.description;
    document.getElementById('results').appendChild(p);

  }
  xhr.open('GET',"https://www.googleapis.com/books/v1/volumes?q=title:" + document.getElementById('bookForm').value);
  xhr.send(); // This is Asynchronus
}


const button = document.getElementById('fetch');
button.addEventListener('click', fetchBook);
