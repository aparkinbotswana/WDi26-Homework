console.log('hi');
// To refer back to class example, go to classwork> 10-ajax > ajax-intro.
const fetchBookCover = function (event) {
  event.preventDefault(); //stops the form default.


  const xhr = new XMLHttpRequest();

  let bookTitle = document.getElementById('booktitle').value; //gets the value of the booktitle input field. i.e. what the user has typed in.

  // let resultDiv = document.getElementById('result');

  xhr.onreadystatechange = function(){
    if(xhr.readyState !== 4){
      return;
    }
    const info = JSON.parse(xhr.responseText);
    const bookInfo = document.createElement('div'); //Created a div here and put an img(bookcover) and a p(book description) into this div. Instead of appending it directly into the body.
    const bookCover = document.createElement('img');
    bookCover.src = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"];
    const bookDescription = document.createElement('p');
    //debugger;
    bookDescription.innerHTML = info["items"][0]["volumeInfo"]["description"];
    console.log(bookCover);
    document.body.appendChild(bookInfo);
    bookInfo.appendChild(bookCover);
    bookInfo.appendChild(bookDescription);
  };

  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`)

  xhr.send();
};


const form = document.getElementById('myForm');

form.addEventListener('submit', fetchBookCover);
