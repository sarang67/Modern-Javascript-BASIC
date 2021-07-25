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
