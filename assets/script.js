const searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
  event.preventDefault();

  const searchInputVal = document.querySelector('#search-input').value;
  

  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }

  const queryString = `./search-results.http://api.openweathermap.org/geo/1.0/direct?q=${searchInputVal}&limit=5&appid=12e8d88936bd8c484254bea087846656`;

  location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
