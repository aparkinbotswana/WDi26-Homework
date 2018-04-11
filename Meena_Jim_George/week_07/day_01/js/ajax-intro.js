const fetchFact = function(){
  const bookname = document.getElementById('book_name').value;
  // console.log(bookname);
// console.log("button clicked");
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
// console.log(xhr.readyState);
  if(xhr.readyState!== 4)
      {
        return;//not ready yet
      }

      const info = JSON.parse(xhr.responseText);
      console.log(info);

      const img = document.createElement('img');

      img.src = info.items[0].volumeInfo.imageLinks.thumbnail;

      document.body.appendChild(img);


};

xhr.open('GET',`https://www.googleapis.com/books/v1/volumes?q=title?${bookname}`);
xhr.send();

};
const button = document.getElementById('content');
button.addEventListener('click',fetchFact);
