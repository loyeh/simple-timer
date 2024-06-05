const little_circle = document.querySelector(".little_circle");
const outer_circle = document.querySelector(".outer_circle");
const timer_text = document.querySelector(".timer_text");
const refereshBtn = document.querySelector(".referesh");
const playBtn = document.querySelector(".play");

let i = 60; // seconds
let time;
let degree;
let isPaused = true;

playBtn.addEventListener("click", play);
refereshBtn.addEventListener("click", referesh);

function timer() {
  let interval = setInterval(() => {
    if (!isPaused) {
      i--;
      degree = (60 - i) * 6;
      little_circle.style.transform = `translateY(-50%) rotate(${degree}deg)`;
      if (i < 10) {
        time = "0" + i;
      } else {
        time = i;
      }
      outer_circle.style.backgroundImage = `conic-gradient(#334 ${degree}deg, white ${degree}deg)`;
      timer_text.textContent = `00:${time}`;
      if (i == 0) {
        clearInterval(interval);
      }
    }
  }, 1000);
}

function play() {
  playBtn.classList.toggle("active");
  if (playBtn.classList[1] == "active") {
    playBtn.querySelector("span").className = "fas fa-pause";
    isPaused = false;
  } else {
    playBtn.querySelector("span").className = "fas fa-play";
    isPaused = true;
  }
}

function referesh() {
  window.location.reload();
}

timer();
