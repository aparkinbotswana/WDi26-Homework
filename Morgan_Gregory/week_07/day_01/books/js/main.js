// console.log('i can see you');

// google books api : https://www.googleapis.com/books/v1/volumes?q=title
// might be a path to image thumbnail from the ruby books homework: ['items'][0]['volumeInfo']['imageLinks']['thumbnail']

const getBookCover = function () {
  let title = document.getElementById('search').value

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState != 4) {
      return;
    }

    const book = JSON.parse(xhr.responseText);
    console.log(book);

    const img = document.createElement('img');

    img.src = book.items[0].volumeInfo.imageLinks.thumbnail;
    document.body.appendChild(img);
  };


  xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=' + title);
  xhr.send();
};

const button = document.getElementById('go');
button.addEventListener('click', getBookCover);
