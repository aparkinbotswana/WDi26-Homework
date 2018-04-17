const fetchBook = function () {
  console.log('button clicked');
  const xhr = new XMLHttpRequest();

  let book;

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return; // Not ready yet
    }
// debugger;
//Append the fact to the page
  const info = JSON.parse (xhr.responseText);
  const p =document.createElement('p');
  p.innerHTML = '<strong>' + info.items[0].volumeInfo.title + '</strong>' + '<img>' + info.items[0].volumeInfo.imageLinks.smallThumbnail+ '</img>';
  document.body.appendChild( p );
//put the fact in the paragraph
  };

  // xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q={'fetch'}');
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyBF8P4dnNVmiUkKdSlnU3fdPjvF2Kpy5aQ`);
  // console.log("JSON Data: " + response.items);
  xhr.send(); // Asynchronous

  return book;
};

const button = document.getElementById('fetch');
button.addEventListener('click', fetchBook)
