const fetchInfo = function () {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    }

    const info = JSON.parse(xhr.responseText);
    // console.log(info.items[0].volumeInfo.imageLinks.thumbnail);
    console.log(info);

    let p = document.createElement('P');
    p = info.items[0].volumeInfo.subtitle;
    console.log(p);
    document.body.appendChild(p);

    const img = document.createElement('img');
    img.src = info.items[0].volumeInfo.imageLinks.thumbnail;
    document.body.appendChild(img);

  };

  const book_title = document.getElementById('book').value;
  console.log(book_title);
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${book_title}`);
  xhr.send();

  };

const button = document.getElementById('go');
button.addEventListener('click', fetchInfo)
