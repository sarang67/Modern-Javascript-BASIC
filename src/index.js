import "../assets/css/style.css";

1) show country data using xml http request
============================================
import "../assets/css/style.css";

const countriesElement = document.querySelector(".countries");

const getCountry = function (countryName) {
  const request = new XMLHttpRequest();
  request.open("get", `https://restcountries.eu/rest/v2/name/${countryName}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(request.responseText);
    const { name, region, flag, population, languages, currencies } = data;

    const counteriesHtml = `
        <article class="country">
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
  });
};

getCountry("portugal");
getCountry("germany");
getCountry("bangladesh");


2) call back hell with countries border
====================================
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

3) show country data using promise and fetch api
=====================================
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
    });
};

getCountry("Iran");
getCountry("India");


4) render country and neighbour using promise chaining to improve callback hell
================================================================================
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


5) Handling Rejected Promises: with offline intrnet
=====================================================
//  <button class="btn-country">Where am I?</button>
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


6) Throwing Errors Manually
===========================
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


7) code cleanup with reusable code
===================================
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

