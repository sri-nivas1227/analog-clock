// import * as Tone from "tone";

const minhand = document.querySelector(".min-hand");
const hourhand = document.querySelector(".hour-hand");
const sechand = document.querySelector(".sec-hand");
// const clip = document.getElementsByTagName("audio")[0];
// const dong = document.getElementsByTagName("audio")[1];
// const btn = document.querySelector(".clickme");

function setdata() {
  const currentTime = new Date();
  const seconds = currentTime.getSeconds();
  const secondsdegree = (seconds / 60) * 360 + 90;
  sechand.style.transform = `rotate(${secondsdegree}deg)`;
  //get minutes, calc degrees and perform rotation
  const minutes = currentTime.getMinutes();
  const mindegree = (minutes / 60) * 360 + 90;
  minhand.style.transform = `rotate(${mindegree}deg)`;
  //get hours, calc degrees and perform rotation
  const hrs = currentTime.getHours();
  const hrdegree = (hrs / 12) * 360 + 90;
  hourhand.style.transform = `rotate(${hrdegree}deg)`;
  if (seconds == 0) {
    sechand.style.transitionDuration = "0s";
    minhand.style.transitionDuration = "0s";
    hourhand.style.transitionDuration = "0s";
  } else {
    minhand.style.transitionDuration = "0.5s";
    hourhand.style.transitionDuration = "0.5s";
  }

  requestAnimationFrame(setdata);
}

setdata();
