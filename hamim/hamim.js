let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
let result = document.getElementById("result");

searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      let countryData = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
          <div class="data-wrapper">
            <h4>Capital:</h4>
            <span>${data[0].capital[0]}</span>
          </div>
        </div>
        <div class="wrapper">
          <div class="data-wrapper">
            <h4>Continent:</h4>
            <span>${data[0].continents[0]}</span>
          </div>
        </div>
        <div class="wrapper">
          <div class="data-wrapper">
            <h4>Population:</h4>
            <span>${data[0].population}</span>
          </div>
        </div>
        <div class="wrapper">
          <div class="data-wrapper">
            <h4>Currency:</h4>
            <span>${
              data[0].currencies[Object.keys(data[0].currencies)].name
            } - ${Object.keys(data[0].currencies)[0]}</span>
          </div>
        </div>
        <div class="wrapper">
          <div class="data-wrapper">
            <h4>Common Languages:</h4>
            <span>${Object.values(data[0].languages)
              .toString()
              .split(",")
              .join(", ")}</span>
          </div>
        </div>
      `;
      // Append "More Details" button to country data
      // countryData += '<button class="more-details-btn"></button>';
      result.innerHTML = countryData;

      // Add event listener to "More Details" button to show more country-specific data
      let moreDetailsBtn = document.querySelector('.more-details-btn');
      moreDetailsBtn.addEventListener('click', () => {
        let moreData = `
          <div class="wrapper">
            <div class="data-wrapper">
              <h4>Native Name:</h4>
              <span>${data[0].name.nativeName}</span>
            </div>
          </div>
          <div class="wrapper">
            <div class="data-wrapper">
              <h4>Area:</h4>
              <span>${data[0].area} km<sup>2</sup></span>
            </div>
          </div>
          <div class="wrapper">
            <div class="data-wrapper">
              <h4>Calling Codes:</h4>
              <span>${Object.values(data[0].callingCodes)
                .toString()
                .split(",")
                .join(", ")}</span>
            </div>
          </div>
        `;
        result.innerHTML += moreData;
      });
    })
    .catch((err) => console.log(err));
});

