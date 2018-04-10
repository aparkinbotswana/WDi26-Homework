

const fetchBook = function(event) {
  event.preventDefault();
  const bookTitle = document.getElementById('title').value;
  console.log(bookTitle);
  console.log('button clicked');

  const xhr = new XMLHttpRequest();
  console.log(xhr);

  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${bookTitle}`);

  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) {
      return;
    }
    let info = JSON.parse(xhr.responseText);
    console.log(info);

    // create a div to put all the results in
    // const results = document.createElement('div')
    // create an element to put the book info in.
    const img = document.createElement('img');
    // put the relevant info into the created element
    img.src = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    // put the created element on the page
    document.getElementById('results').appendChild (img);
    const title = document.createElement('h2');
    title.innerHTML = info["items"][0]["volumeInfo"]["title"];
    document.getElementById('results').appendChild (title);
    const author = document.createElement('h3');
    author.innerHTML = info["items"][0]["volumeInfo"]["authors"].join(', ');
    document.getElementById('results').appendChild (author);
    const description = document.createElement('p');
    description.innerHTML = info["items"][0]["volumeInfo"]["description"];
    document.getElementById('results').appendChild (description);
  };


  xhr.send();

}

const button = document.getElementById('fetch');
button.addEventListener('click', fetchBook);
