let input = document.querySelector(".top__input");
let button = document.querySelector(".top__button");
let ipAddress = document.getElementById("address");
let locate = document.getElementById("location");
let utc = document.getElementById("utc");
let isp = document.getElementById("isp");
let maps = document.getElementById("map");

let apiKey = "at_aFHcZHuTu1vF8WOgzQbRKAsqERIGi";

button.addEventListener("click", function (event) {
  event.preventDefault();
  let ip = input.value;
  let url = `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${ip}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      ipAddress.innerHTML = `${data.ip}`;
      locate.innerHTML = `${data.location.region}, ${data.location.country}`;
      utc.innerHTML = `${data.location.timezone}`;
      isp.innerHTML = `${data.isp}`;
    })
    .catch((error) => console.log(error));

    const map = L.map('maps');
    
});
