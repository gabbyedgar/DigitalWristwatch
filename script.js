const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");

const setClock = setInterval(function clock() {
  let dateNow = new Date();
  let hr = dateNow.getHours();
  let min = dateNow.getMinutes();
  let sec = dateNow.getSeconds();

  let calcHr = hr * 30 + min / 2;
  let calcMin = min * 6;
  let calcSec = sec * 6;

  hour.style.transform = `rotate(${calcHr}deg)`;
  minute.style.transform = `rotate(${calcMin}deg)`;
  seconds.style.transform = `rotate(${calcSec}deg)`;
}, 1000);
