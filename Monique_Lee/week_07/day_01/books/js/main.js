//console.log('test js');

const fetchBook = function(event){

  event.preventDefault(); //need to prevent the default submit event

  const xhr = new XMLHttpRequest();

  //xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:Jaws');

  let bookTitle = document.getElementById('title').value

  let queryTitle = `https://www.googleapis.com/books/v1/volumes?q=title:${bookTitle}`

  xhr.open('GET', queryTitle);

  xhr.onreadystatechange = function(){
    // console.log("Ready State: " + xhr.readyState);

    if(xhr.readyState === 4){

      bookInfo = xhr.responseText;

      //console.log(bookInfo);

      bookText = JSON.parse(bookInfo);

      //console.log(bookText);

      bookCover = bookText["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"];

      //console.log(bookCover);

      document.getElementById('bookImage').src = bookCover;

      bookAuthor = bookText["items"][0]["volumeInfo"]["authors"];

      document.getElementById('author').innerHTML = `<strong>Author:</strong> ${bookAuthor}`;

      bookPublished = bookText["items"][0]["volumeInfo"]["publishedDate"];

      document.getElementById('publishedDate').innerHTML = `<strong>Published:</strong> ${bookPublished}`;

      bookDescription = bookText["items"][0]["volumeInfo"]["description"];

      document.getElementById('description').innerHTML = `<strong>Description:</strong> ${bookDescription}`;

      }
    }

xhr.send();

};

searchButton = document.getElementById('search');
searchButton.addEventListener('click', fetchBook);
