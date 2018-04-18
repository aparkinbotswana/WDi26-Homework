// a wee custom function to save me from writing the same queryselector line over and over
const qs = (query) => document.querySelector(query);

// state constructor
const State = function() {
  return {
    page: 1,
    pages: 0,
    canScroll: true,
    getState: function(param) {
      return this[param];
    },
    setState: function(param, val) {
      this[param] = val;
    }
  };
};
// create new state
let state = new State();

// look ma! No jQuery!
const search = (query, page = 1) => {
  const url = new URL('https://api.flickr.com/services/rest?jsoncallback=?');
  const params = {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    format: 'json',
    nojsoncallback: 1,
    page: page,
    text: query
  };

  // generate url with params
  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

  // use fetch instead of ajax
  if (state.getState('page') <= state.getState('pages') || !state.getState('pages')) {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        state.setState('pages', data.photos.pages);
        data.photos.photo.forEach((photo) => {
          // create photo elements
          const a = document.createElement('a');
          const img = document.createElement('img');
          img.setAttribute('src', generateURL(photo));
          a.setAttribute('href', generateURL(photo, 'b'));
          a.appendChild(img);
          a.classList.add('result');
          qs('#results').appendChild(a);
        });
      })
      .then(() => {
        state.setState('canScroll', true);
      });
  }
};

const generateURL = (p, size = 'q') => {
  return [
    'http://farm',
    p.farm,
    '.static.flickr.com/',
    p.server,
    '/',
    p.id,
    '_',
    p.secret,
    `_${size}.jpg` // Change "q" to something else for different sizes
  ].join('');
};

document.addEventListener('DOMContentLoaded', () => {
  let page = state.getState('page');

  qs('#search-form').addEventListener('submit', () => {
    event.preventDefault();
    state = new State();
    qs('#results').innerHTML = '';
    const query = qs('#query').value;
    search(query);
  });
  // scroll stuff
  window.addEventListener('scroll', () => {
    const scroll = window.scrollY + window.innerHeight;

    const docHeight = document.documentElement.scrollHeight;

    if (docHeight - scroll < 1000 && state.getState('canScroll')) {
      state.setState('canScroll', false);

      const query = qs('#query').value;
      page++;
      state.setState('page', page);

      search(query, state.getState('page'));
    }
  });
});
