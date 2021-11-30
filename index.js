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

function search(event) {
  event.preventDefault();
  let searchValue = document.querySelector("#search-input").value;

  let apiKey = "a737be22247c67dd5d6a40a70996f13d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(searchResonse);
}
let searchInput = document.querySelector("#search-form");
searchInput.addEventListener("submit", search);

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
  let iconImage = document.querySelector(".icon");
  iconImage.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconImage.setAttribute("alt", response.data.weather[0].description);
  document.querySelector(".description").innerHTML =
    response.data.weather[0].description;
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let apiKey = "de66a9d2e55f32b752dea9e239633edb";
  let currentLocationApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(currentLocationApiUrl).then(locationTemp);
}
function locationTemp(response) {
  console.log(response);

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
  let iconImage = document.querySelector(".icon");
  iconImage.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconImage.setAttribute("alt", response.data.weather[0].description);
  document.querySelector(".description").innerHTML =
    response.data.weather[0].description;
}
function getPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let locationButton = document.querySelector(".current-location");
locationButton.addEventListener("click", getPosition);

function clickLondon(event) {
  let apiKey = "a737be22247c67dd5d6a40a70996f13d";
  let city = "London";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(londonResonse);
}
function londonResonse(response) {
  document.querySelector(".temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector(".city").innerHTML = "London";
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
  let iconImage = document.querySelector(".icon");
  iconImage.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconImage.setAttribute("alt", response.data.weather[0].description);
  document.querySelector(".description").innerHTML =
    response.data.weather[0].description;
}

let london = document.querySelector(".london");
london.addEventListener("click", clickLondon);

function clickNewYork(event) {
  let apiKey = "a737be22247c67dd5d6a40a70996f13d";
  let city = "New York";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(newYorkResonse);
}
function newYorkResonse(response) {
  document.querySelector(".temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector(".city").innerHTML = "New York";
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
  let iconImage = document.querySelector(".icon");
  iconImage.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconImage.setAttribute("alt", response.data.weather[0].description);
  document.querySelector(".description").innerHTML =
    response.data.weather[0].description;
}

let newYork = document.querySelector(".new-york");
newYork.addEventListener("click", clickNewYork);

function clickLima(event) {
  let apiKey = "a737be22247c67dd5d6a40a70996f13d";
  let city = "lima";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(limaResonse);
}
function limaResonse(response) {
  document.querySelector(".temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector(".city").innerHTML = "Lima";
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
  let iconImage = document.querySelector(".icon");
  iconImage.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconImage.setAttribute("alt", response.data.weather[0].description);
  document.querySelector(".description").innerHTML =
    response.data.weather[0].description;
}

let lima = document.querySelector(".lima");
lima.addEventListener("click", clickLima);

function clickTokyo(event) {
  let apiKey = "a737be22247c67dd5d6a40a70996f13d";
  let city = "Tokyo";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(tokyoResonse);
}
function tokyoResonse(response) {
  document.querySelector(".temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector(".city").innerHTML = "Tokyo";
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
  let iconImage = document.querySelector(".icon");
  iconImage.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconImage.setAttribute("alt", response.data.weather[0].description);
  document.querySelector(".description").innerHTML =
    response.data.weather[0].description;
}

let tokyo = document.querySelector(".tokyo");
tokyo.addEventListener("click", clickTokyo);

function clickSydney(event) {
  let apiKey = "a737be22247c67dd5d6a40a70996f13d";
  let city = "sydney";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(sydneyResonse);
}
function sydneyResonse(response) {
  document.querySelector(".temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector(".city").innerHTML = "Sydney";
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
  let iconImage = document.querySelector(".icon");
  iconImage.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconImage.setAttribute("alt", response.data.weather[0].description);
  document.querySelector(".description").innerHTML =
    response.data.weather[0].description;
}

let sydney = document.querySelector(".sydney");
sydney.addEventListener("click", clickSydney);

function clickCapeTown(event) {
  let apiKey = "a737be22247c67dd5d6a40a70996f13d";
  let city = "cape town";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(capeTownResonse);
}
function capeTownResonse(response) {
  document.querySelector(".temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector(".city").innerHTML = "Cape Town";
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
  let iconImage = document.querySelector(".icon");
  iconImage.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconImage.setAttribute("alt", response.data.weather[0].description);
  document.querySelector(".description").innerHTML =
    response.data.weather[0].description;
}

let capeTown = document.querySelector(".cape-town");
capeTown.addEventListener("click", clickCapeTown);
