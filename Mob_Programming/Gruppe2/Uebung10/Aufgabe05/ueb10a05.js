const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const submit = document.querySelector('input[type="submit"]');

const fetchFahrenheit = (e) => {
  e.preventDefault();
  const url = "http://localhost:8080/?celsius=" + celsius.value;
  const method = "GET";
  fetch(url, {
    method: method,
  })
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      fahrenheit.innerText = data;
    });
};

submit.addEventListener("click", fetchFahrenheit, false);
