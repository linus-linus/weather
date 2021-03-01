//DATE
let now = new Date();

let houer = now.getHours();
let minuts = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let todaysDay = days[now.getDay()];

let day = document.querySelector(".sunday");
day.innerHTML = `${todaysDay} ${houer}:${minuts}`;

//CHANGE DEGREAS
/*let celcius = document.querySelector("#c");
celcius.addEventListener("click", changeDegreas);

let finalDegreas = document.querySelector("#degreas");

function changeDegreas() {
  finalDegreas.innerHTML = "16°";
}

let farenheit = document.querySelector("#f");
farenheit.addEventListener("click", changeToFarenheit);

function changeToFarenheit() {
  finalDegreas.innerHTML = "66F";
}*/

//SERCH API

function displayWeatherCondition(respons) {
  console.log(respons.data);
  document.querySelector("#country").innerHTML =
    respons.data.name;
  document.querySelector("#degreas").innerHTML = Math.round(
    respons.data.main.temp
  );
}

function serch(event) {
  event.preventDefault();

  let city = document.querySelector("#textInput").value;
  let apiKey = "a44cd8e3b57f8dbb75d6ba7cc1a0cdb4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
let serchBtnHer = document.querySelector("#serchBtn");
serchBtnHer.addEventListener("click", serch);

//AIP
let units = "metric";
