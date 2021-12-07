function search(event) {
  event.preventDefault();
  let searchValue = document.querySelector("#search-input").value;

  let apiKey = "a737be22247c67dd5d6a40a70996f13d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(searchResonse);
}

function searchResonse(response) {
  document.querySelector(".temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector(".city").innerHTML = response.data.name;
  document.querySelector(".high").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector(".low").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector(".wind-speed").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector(".feels-like").innerHTML = Math.round(
    response.data.main.feels_like
  );
  document.querySelector(".description").innerHTML =
    response.data.weather[0].description;
  celsiusTemperature = response.data.main.temp;
  let iconImage = document.querySelector(".icon");
  iconImage.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconImage.setAttribute("alt", response.data.weather[0].description);
  getForecast(response.data.coord);
}

function getForecast(coordinates) {
  let apiKey = "de66a9d2e55f32b752dea9e239633edb";
  let forecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;

  axios.get(forecastApiUrl).then(displayForecast);
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let apiKey = "de66a9d2e55f32b752dea9e239633edb";
  let currentLocationApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(currentLocationApiUrl).then(searchResonse);
}

function getPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

function clickLondon(event) {
  let apiKey = "a737be22247c67dd5d6a40a70996f13d";
  let city = "London";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(searchResonse);
}

function clickNewYork(event) {
  let apiKey = "a737be22247c67dd5d6a40a70996f13d";
  let city = "New York";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(searchResonse);
}

function clickLima(event) {
  let apiKey = "a737be22247c67dd5d6a40a70996f13d";
  let city = "lima";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(searchResonse);
}

function clickTokyo(event) {
  let apiKey = "a737be22247c67dd5d6a40a70996f13d";
  let city = "Tokyo";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(searchResonse);
}

function clickSydney(event) {
  let apiKey = "a737be22247c67dd5d6a40a70996f13d";
  let city = "sydney";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(searchResonse);
}

function clickCapeTown(event) {
  let apiKey = "a737be22247c67dd5d6a40a70996f13d";
  let city = "cape town";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(searchResonse);
}

function convertToFahrenheit(event) {
  event.preventDefault();
  fahrenheitLink.classList.add("active");
  celsiusLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}
function convertToCelsius(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}
function displayForecast(response) {
  console.log(response.data);
  let forecast = document.querySelector("#forecast");
  let forecastHTML = "";
  let days = ["Thursday", "Friday", "Saturday", "Sunday", "Monday"];
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `

 <div class="forecast-day">${day}</div>
            <div class="forecast-temp">
              <span class="forecast-temp-max">18°</span>
              <span class="forecast-temp-min">12°</span>
              <span class="forecast-icon">☀️</span>
            </div>`;
  });
  forecast.innerHTML = forecastHTML;
}

let celsiusTemperature = null;

let searchInput = document.querySelector("#search-form");
searchInput.addEventListener("submit", search);

let locationButton = document.querySelector(".current-location");
locationButton.addEventListener("click", getPosition);

let london = document.querySelector(".london");
london.addEventListener("click", clickLondon);

let newYork = document.querySelector(".new-york");
newYork.addEventListener("click", clickNewYork);

let lima = document.querySelector(".lima");
lima.addEventListener("click", clickLima);

let tokyo = document.querySelector(".tokyo");
tokyo.addEventListener("click", clickTokyo);

let sydney = document.querySelector(".sydney");
sydney.addEventListener("click", clickSydney);

let capeTown = document.querySelector(".cape-town");
capeTown.addEventListener("click", clickCapeTown);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
let currentDate = document.querySelector(".date");
currentDate.innerHTML = `${day}, ${hour}:${minute} `;
