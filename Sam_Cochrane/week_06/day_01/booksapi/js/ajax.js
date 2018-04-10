const fetchBook = function () {
  const xhr = new XMLHttpRequest();

  // This function will be run several times during the
  // request life cycle.
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var response = JSON.parse(xhr.responseText);

      let allBooks = response.items;

      for (var i = 0; i < allBooks.length; i++) {
        let book = allBooks[i];

        let cardHtml = `<div class="card" style="width: 18rem;">
          <img class="card-img-top" src="..." alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${books.index}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>`

        document.getElementById('books').appendChild(cardHtml);
      }
      console.log('response is ', response)
    }
    // Ignore all the readyStates except 4 (complete).
    if (xhr.readyState !== 4) {
      return; // Not ready yet
    }
  };

  let query = document.getElementById('bookquery').value;
  let endPoint = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyAbl0sdgBkV1kOGKZeCoCtCzDKUHRTR1L8`;

  xhr.open('GET', endPoint);
  xhr.send(); // Asynchronous
};

const button = document.getElementById('books');
button.addEventListener('click', function() {
  fetchBook();
});
