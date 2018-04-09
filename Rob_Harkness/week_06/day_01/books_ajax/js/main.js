const qs = (query) => document.querySelector(query);

document.addEventListener('DOMContentLoaded', () => {
  const fetchBook = (bookTitle) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=title:${bookTitle}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        const results = qs('#results');
        const dataList = qs('#json-datalist');
        const option = document.createElement('option');

        results.innerHTML = '';

        JSON.parse(xhr.responseText).items.forEach((item) => {
          option.value = item.volumeInfo.title;
          dataList.appendChild(option);

          const resultA = document.createElement('A');
          const resultDiv = document.createElement('DIV');

          resultA.setAttribute('href', item.volumeInfo.infoLink);
          resultDiv.classList.add('result');

          const authors =
            typeof item.volumeInfo.authors === 'object'
              ? item.volumeInfo.authors.join(',')
              : item.volumeInfo.authors || '';

          const img = item.volumeInfo.imageLinks
            ? `<img src="${item.volumeInfo.imageLinks.thumbnail}">`
            : '';

          resultDiv.innerHTML = `<h2>${item.volumeInfo.title}</h2>
                              <h3>${authors}</h3>
                              ${img}`;

          resultA.appendChild(resultDiv);
          results.appendChild(resultA);
        });
      }
    };
  };
  qs('#book-search').addEventListener('input', (e) => {
    fetchBook(e.target.value);
  });
});
