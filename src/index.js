import "../assets/css/style.css";

const countriesElement = document.querySelector(".countries");
const btn = document.querySelector(".btn-country");

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
};

const renderError = function (msg) {
  countriesElement.innerHTML = msg;
};

const getCountry = function (countryName) {
  let request = fetch(`https://restcountries.eu/rest/v2/name/${countryName}`);

  console.log(request);

  request
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error(`Country is not found ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      renderCountrry(data[0]);
      //const neighbourCountryCode = data[0].borders[0];
      const neighbourCountryCode = "1234";

      if (neighbourCountryCode) {
        return fetch(
          `https://restcountries.eu/rest/v2/alpha/${neighbourCountryCode}`
        );
      }
    })
    .then((respone) => {
      if (!respone.ok) {
        throw new Error(`Country is not found ${respone.status}`);
      }
      return respone.json();
    })
    .then((neighbourCountry) => {
      renderCountrry(neighbourCountry, "neighbour");
    })
    .catch((err) => {
      renderError(`Something went wrong !!! ${err}`);
    })
    .finally(() => {
      countriesElement.style.opacity = 1;
    });
};

btn.addEventListener("click", () => {
  getCountry("Iran");
});
