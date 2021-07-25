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

const getCountryAndNeighbour = function (countryName) {
  const request = new XMLHttpRequest();
  request.open("get", `https://restcountries.eu/rest/v2/name/${countryName}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(request.responseText);
    const [neighbourCountryCode] = data.borders;
    renderCountrry(data);

    if (neighbourCountryCode) {
      const request2 = new XMLHttpRequest();
      request2.open(
        "get",
        `https://restcountries.eu/rest/v2/alpha/${neighbourCountryCode}`
      );
      request2.send();

      request2.addEventListener("load", function () {
        const data = JSON.parse(request2.responseText);
        renderCountrry(data, "neighbour");
      });
    }
  });
};

getCountryAndNeighbour("Iran");
