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
}
navigator.geolocation.getCurrentPosition(showPosition);

let locationButton = document.querySelector(".current-location");
locationButton.addEventListener("click", showPosition);
