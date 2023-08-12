var rn = 0;
function bubbleMake() {
  var clutter = "";
  var numwid = window.innerWidth <= 480 ? 25 : 51;
  for (i = 1; i < numwid; i++) {
    hitrn = Math.floor(Math.random() * 10);
    clutter += `<button class="bubble">${hitrn}</button>`;
  }
  document.querySelector("#play-ground").innerHTML = clutter;
}

function hitbubble() {
  rn = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = rn;
}

var timer = 30;
function time() {
  setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").innerHTML = timer;
    } else {
      clearInterval(timer);
      document.querySelector("#play-ground").innerHTML = `<h1>Game Over</h1>`;
    }
    if (timer < 10) {
      document.querySelector("#timerval").style.color = "red";
    }
  }, 1000);
}

var score = 0;
function increaseScore() {
  score += 10;
  document.querySelector("#score").innerHTML = score;
}

document.querySelector("#play-ground").addEventListener("click", (event) => {
  var checkNum = Number(event.target.textContent);
  if (checkNum === rn) {
    increaseScore();
    hitbubble();
    bubbleMake();
  }
});
time();
hitbubble();
bubbleMake();
