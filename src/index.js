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

const getJson = function (url, errorMessage = "something went wrong") {
  return fetch(url).then((response) => {
    console.log(response);
    if (!response.ok) {
      throw new Error(`${errorMessage} ${response.status}`);
    }
    return response.json();
  });
};

const getCountry = function (countryName) {
  getJson(
    `https://restcountries.eu/rest/v2/name/${countryName}`,
    "country not found"
  )
    .then((data) => {
      console.log(data);
      renderCountrry(data[0]);
      const neighbourCountryCode = data[0].borders[0];
      //const neighbourCountryCode = "1234";

      //      if (!neighbourCountryCode) return;
      if (!neighbourCountryCode) throw new Error("No Neighbour Found");
      return getJson(
        `https://restcountries.eu/rest/v2/alpha/${neighbourCountryCode}`,
        "country not found"
      );
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
