console.log("connected");

document.addEventListener('DOMContentLoaded', function() {

const searchBook = function () {
  console.log('button clicked');

  let bookTitle = document.getElementById('input-text').value;
  console.log(bookTitle);
  let bookUrl = `https://www.googleapis.com/books/v1/volumes?q=title:${ bookTitle  }`;
  let searchForm = document.getElementById('search-form');

  console.log(bookUrl);

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {

    if (xhr.readyState !== 4) {
      return; // Not ready yet
    }

    const info = JSON.parse( xhr.responseText );
    console.log(info);


    const img = document.createElement('img');
    img.src = info.items[0].volumeInfo.imageLinks.thumbnail
    console.log(img.src);
    document.body.appendChild( img );

    const p1 = document.createElement('p');
    p1.innerHTML = '<strong>Authors: </strong>' + info.items[0].volumeInfo.authors.join(", ")
    console.log(p1);
    document.body.appendChild( p1 );

    const p2 = document.createElement('p');
    p2.innerHTML = '<strong>Published Date: </strong>' + info.items[0].volumeInfo.publishedDate
    console.log(p2);
    document.body.appendChild( p2 );

    const p3 = document.createElement('p');
    p3.innerHTML = '<strong>Description: </strong>' + info.items[0].volumeInfo.description
    console.log(p3);
    document.body.appendChild( p3 );
  };

  xhr.open('GET', bookUrl);
  xhr.send(); // Asynchronous

}


const button = document.getElementById('search');
button.addEventListener('click', searchBook);






new TypeIt('label', {
   strings: 'This is a simple string.',
   speed: 100,
   autoStart: false
});


}, false);
