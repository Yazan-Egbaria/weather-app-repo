// const weatherForm = document.querySelector(".weatherForm");
// const cityInput = document.querySelector(".cityInput");
// const card = document.querySelector(".card");
// const apiKey = "5837b38e4dcaac091027efb7931d4f2c";

// weatherForm.addEventListener("submit", async (event) => {
//   event.preventDefault();
//   const city = cityInput.value;

//   if (city) {
//     try {
//       const weatherData = await getWeatherData(city);
//       displayWeatherInfo(weatherData);
//     } catch (err) {
//       console.error(err);
//       displayError(err);
//     }
//   } else {
//     displayError("Please enter a valid city");
//   }
// });

// async function getWeatherData(city) {
//   const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//   const response = await fetch(apiURL);

//   if (!response.ok) {
//     throw new Error("Could not fetch weather data");
//   }

//   return await response.json();
// }

// function displayWeatherInfo(data) {
//   const {
//     name: city,
//     main: { temp, humidity },
//     weather: [{ description, id }],
//   } = data;

//   card.textContent = "";
//   card.style.display = "flex";

//   const cityDisplay = document.createElement("h1");
//   const tempDisplay = document.createElement("p");
//   const humidityDisplay = document.createElement("p");
//   const descDisplay = document.createElement("p");
//   const weatherEmoji = document.createElement("p");

//   cityDisplay.textContent = city;
//   tempDisplay.textContent = `${((temp - 273.15) * (9 / 5) + 32).toFixed(1)}°F`;
//   humidityDisplay.textContent = `Humidity: ${humidity}%`;
//   descDisplay.textContent = description;
//   weatherEmoji.textContent = getWeatherEmoji(id);

//   cityDisplay.classList.add("cityDisplay");
//   tempDisplay.classList.add("tempDisplay");
//   humidityDisplay.classList.add("humidityDisplay");
//   descDisplay.classList.add("descDisplay");
//   weatherEmoji.classList.add("weatherEmoji");

//   card.appendChild(cityDisplay);
//   card.appendChild(tempDisplay);
//   card.appendChild(humidityDisplay);
//   card.appendChild(descDisplay);
//   card.appendChild(weatherEmoji);
// }

// function getWeatherEmoji(weatherID) {
//   switch (true) {
//     case weatherID >= 200 && weatherID < 300:
//       return "⛈️";
//     case weatherID >= 300 && weatherID < 400:
//       return "⛈️";
//     case weatherID >= 500 && weatherID < 600:
//       return "⛈️";
//     case weatherID >= 600 && weatherID < 700:
//       return "🥶";
//     case weatherID >= 700 && weatherID < 800:
//       return "🥶";
//     case weatherID === 800:
//       return "☀️";
//     case weatherID >= 801 && weatherID < 810:
//       return "☁️";
//     default:
//       reutrn`?`;
//   }
// }

// function displayError(msg) {
//   const errDisplay = document.createElement("p");
//   errDisplay.textContent = msg;
//   errDisplay.classList.add("errDisplay");

//   card.textContent = "";
//   card.style.display = "flex";
//   card.appendChild(errDisplay);
// }

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "5837b38e4dcaac091027efb7931d4f2c";

function getWeatherEmoji(weatherID) {
  switch (true) {
    case weatherID >= 200 && weatherID < 300:
      return "⛈️";
    case weatherID >= 300 && weatherID < 400:
      return "⛈️";
    case weatherID >= 500 && weatherID < 600:
      return "⛈️";
    case weatherID >= 600 && weatherID < 700:
      return "🥶";
    case weatherID >= 700 && weatherID < 800:
      return "🥶";
    case weatherID === 800:
      return "☀️";
    case weatherID >= 801 && weatherID < 810:
      return "☁️";
    default:
      return "?";
  }
}

async function getWeatherData(city) {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const response = await fetch(apiURL);

  if (!response.ok) {
    throw new Error("Could not fetch weather data");
  }

  return await response.json();
}

function displayWeatherInfo(data) {
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;

  card.textContent = "";
  card.style.display = "flex";

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");

  cityDisplay.textContent = city;
  tempDisplay.textContent = `${((temp - 273.15) * (9 / 5) + 32).toFixed(1)}°F`;
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  descDisplay.textContent = description;
  weatherEmoji.textContent = getWeatherEmoji(id);

  cityDisplay.classList.add("cityDisplay");
  tempDisplay.classList.add("tempDisplay");
  humidityDisplay.classList.add("humidityDisplay");
  descDisplay.classList.add("descDisplay");
  weatherEmoji.classList.add("weatherEmoji");

  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(descDisplay);
  card.appendChild(weatherEmoji);
}

function displayError(msg) {
  const errDisplay = document.createElement("p");
  errDisplay.textContent = msg;
  errDisplay.classList.add("errDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errDisplay);
}

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = cityInput.value;

  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
    } catch (err) {
      console.error(err);
      displayError(err);
    }
  } else {
    displayError("Please enter a valid city");
  }
});
