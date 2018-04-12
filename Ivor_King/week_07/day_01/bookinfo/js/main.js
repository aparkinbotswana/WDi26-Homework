// Run checks
console.log("javascript connected");

$(document).ready(function() {
    if (jQuery) {  
      console.log("jquery working");
    } else {
      console.log("jquery not working");
    }
});

// const displayCover();
function showpic(piclink) {
  const p = document.createElement('img');
  p.src = piclink;
  document.body.appendChild( p );
}

const fetchCover = function () {
  let titleb = document.getElementById("book").value;
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    }
    const info = JSON.parse( xhr.responseText );
    let tagpic = info.items[0].volumeInfo.imageLinks.thumbnail;
    showpic(tagpic);
  };
  xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:' + titleb);
  xhr.send(); // Asynchronous
};

document.getElementById("fetch").addEventListener("click", fetchCover);

