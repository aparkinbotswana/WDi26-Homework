// console.log('i can see you');

// google books api : https://www.googleapis.com/books/v1/volumes?q=title
// might be a path to image thumbnail from the ruby books homework: ['items'][0]['volumeInfo']['imageLinks']['thumbnail']

const getBook = function () {
  let title = document.getElementById('search').value

  const xhr = new XMLHttpRequest();
  let lastfive = [];

  xhr.onreadystatechange = function () {
    if (xhr.readyState != 4) {
      return;
    }

    const book = JSON.parse(xhr.responseText);
    // console.log(book);

    // add image of cover to page
    const img = document.createElement('img');
    img.src = book.items[0].volumeInfo.imageLinks.thumbnail;
    document.body.appendChild(img);

    // add author to page
    const authors = document.createElement('p');
    authors.innerHTML = book.items[0].volumeInfo.authors;
    document.body.appendChild(authors);

    // add description to page
    const description = document.createElement('p');
    description.innerHTML = book.items[0].volumeInfo.description;
    document.body.appendChild(description);

    // add publisher to page
    const publisher = document.createElement('p');
    publisher.innerHTML = book.items[0].volumeInfo.publisher;
    document.body.appendChild(publisher);

    lastfive.push(book.items[0].volumeInfo.title);
    console.log(lastfive);

  };

  xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=' + title);
  xhr.send();
};

const button = document.getElementById('go');
button.addEventListener('click', getBook);
