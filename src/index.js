import "../assets/css/style.css";

const countriesElement = document.querySelector(".countries");

const renderCountrry = function (data, className = "") {
  const { name, region, flag, population, languages, currencies } = data;
  const counteriesHtml = `
  <article class="country ${className}">
      <img class="country__img" src="${flag}" />
      <div class="country__data">
          <h3 class="country__name">${name}</h3>
          <h4 class="country__region">${region}</h4>
          <p class="country__row"><span>👫${population}</span></p>
          <p class="country__row"><span>🗣️ ${languages[0].name}</span></p>
          <p class="country__row"><span>💰 ${currencies[0].name}</span></p>
      </div>
  </article>
`;

  console.log(counteriesHtml);
  countriesElement.innerHTML += counteriesHtml;
  countriesElement.style.opacity = 1;
};

const getCountry = function (countryName) {
  let request = fetch(`https://restcountries.eu/rest/v2/name/${countryName}`);

  console.log(request);

  request
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountrry(data[0]);
      const neighbourCountryCode = data[0].borders[0];
      if (neighbourCountryCode) {
        return fetch(
          `https://restcountries.eu/rest/v2/alpha/${neighbourCountryCode}`
        );
      }
    })
    .then((respone) => respone.json())
    .then((neighbourCountry) => {
      renderCountrry(neighbourCountry, "neighbour");
    });
};

getCountry("Iran");
