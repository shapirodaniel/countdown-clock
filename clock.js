const MINUTES = document.getElementById("minutes");
const SECONDS = document.getElementById("seconds");
const START_STOP_BTN = document.getElementById("start-stop");
const CLEAR_BTN = document.getElementById("clear");
const TIME_INPUT = document.getElementById("timeInput");
const SET_TIME_BTN = document.getElementById("setTime");

let secondInterval;

const updateStartStopBtn = () => {
  const update = START_STOP_BTN.innerHTML === "START" ? "STOP" : "START";
  START_STOP_BTN.innerHTML = update;
};

START_STOP_BTN.addEventListener("click", () => {
  START_STOP_BTN.classList.toggle("start");
  START_STOP_BTN.classList.toggle("stop");

  updateStartStopBtn();

  if (START_STOP_BTN.innerHTML === "STOP") {
    secondInterval = setInterval(() => {
      let minutes = +MINUTES.innerHTML;

      if (SECONDS.innerHTML === "00") {
        if (minutes === 0) {
          START_STOP_BTN.classList.toggle("start");
          START_STOP_BTN.classList.toggle("stop");
          START_STOP_BTN.innerHTML = "START";
          clearInterval(secondInterval);
        } else {
          let newMinutes = minutes - 1;
          MINUTES.innerHTML = String(newMinutes);
          SECONDS.innerHTML = "59";
        }
      } else if (+SECONDS.innerHTML === 10 || /0\d/g.test(SECONDS.innerHTML)) {
        let seconds = +SECONDS.innerHTML;
        seconds--;
        SECONDS.innerHTML = "0" + seconds;
      } else {
        let seconds = +SECONDS.innerHTML;
        SECONDS.innerHTML = --seconds;
      }
    }, 1000);
  } else {
    clearInterval(secondInterval);
  }
});

CLEAR_BTN.addEventListener("click", () => {
  START_STOP_BTN.classList.remove("stop");
  START_STOP_BTN.classList.add("start");
  START_STOP_BTN.innerHTML = "START";
  MINUTES.innerHTML = "0";
  SECONDS.innerHTML = "00";
});

SET_TIME_BTN.addEventListener("click", () => {
  const [minutes, seconds] = TIME_INPUT.value.split(":");
  MINUTES.innerHTML = minutes;
  SECONDS.innerHTML = seconds;
});
