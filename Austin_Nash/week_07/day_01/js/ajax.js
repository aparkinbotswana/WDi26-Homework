console.log("working?");

const getBook = function() {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if ( xhr.readyState !==4 ) {
      return;
    } // if is 4 - then run the stuff below

    const info = JSON.parse( xhr.responseText );
    console.log(info.items[0].volumeInfo.imageLinks.thumbnail);
    const h1 = document.createElement('h1')
    const img = document.createElement('img')
    const p = document.createElement('p')
    const p1 = document.createElement('p')

    img.src = info.items[0].volumeInfo.imageLinks.thumbnail //Image
    p.innerHTML = info.items[0].volumeInfo.authors[0] //Author
    p1.innerHTML = info.items[0].volumeInfo.description //description
    h1.innerHTML = info.items[0].volumeInfo.title //title
    console.log(info.items[0].volumeInfo.authors[0]);

    document.body.appendChild( h1 );
    document.body.appendChild( p );
    document.body.appendChild( img );
    document.body.appendChild( p1 );

    console.log(info);

    // const p = document.createElement('p');
    // p.innerHTML = '<strong>' + info.number + '</strong>: ' + info.text;


  }

  const book_title = document.getElementById('title').value
  console.log(book_title);

  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${book_title}`);
  xhr.send(); // Asynchronous

}

const button = document.getElementById('button');
button.addEventListener('click', getBook);
