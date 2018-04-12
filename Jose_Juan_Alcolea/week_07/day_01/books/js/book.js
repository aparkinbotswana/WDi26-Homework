
const book = function () {

  const title = document.getElementById('mySearch').value

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    }

    const cover = JSON.parse( xhr.responseText );

    const img = document.createElement('img');
    img.src = cover.items[0].volumeInfo.imageLinks.thumbnail;
    document.body.appendChild(img);

    const title = document.createElement('h1');
    title.innerHTML = cover.items[0].volumeInfo.title;
    document.body.appendChild(title)

    const description = document.createElement('p');
    description.innerHTML = cover.items[0].volumeInfo.description;
    document.body.appendChild(description);

   };
   xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=' + title);
   xhr.send();
};

 const button = document.getElementById('button');
 button.addEventListener('click', book)
