const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

navigator.geolocation.watchPosition(
  data => {
    console.log(data);
    speed.textContent = data.coords.speed;
    arrow.getElementsByClassName.transfrom = `rotate(${data.coords.heading}deg)`;
  },
  error => {
    console.log(error);
    alert("HEY! YOU GOTTA ALLOW THAT TO HAPPEN!!!!");
  }
);
