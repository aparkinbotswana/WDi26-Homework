const fetchBook = function(event){
  event.preventDefault();//dont leave the page.
  const query = document.getElementById('query').value;
  $.ajax(`https://www.googleapis.com/books/v1/volumes?q=${query}`
  success: function(info){
    console.log('info');
    const cover = info.items[0].volumeInfo.imageLinks.thumbnail;
    const title = info.items[0].volumeInfo.title;
    const image = document.getElementById('cover');
    console.log(cover);

    image.src = cover;
    image.alt = title;
  });
  // const xhr = new XMLHttpRequest();
  // xhr.onreadystatechange = function()
  // {
  //   if(xhr.readyState !== 4){ return; }
  //     console.log(xhr.responseText);
  //
  //     const info = JSON.parse(xhr.responseText);
  //     console.log(info);
  //
  //
  //
  // }
  //
  // xhr.open('GET',`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  // xhr.send();
}
document.getElementById('title-search').addEventListener('submit',fetchBook);
