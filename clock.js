const MINUTES = document.getElementById("minutes");
const SECONDS = document.getElementById("seconds");
const START_STOP_BTN = document.getElementById("start-stop");
const CLEAR_BTN = document.getElementById("clear");
const TIME_INPUT = document.getElementById("timeInput");
const SET_TIME_BTN = document.getElementById("setTime");

const updateStartStopBtn = () => {
  const update = START_STOP_BTN.innerHTML === "START" ? "STOP" : "START";
  START_STOP_BTN.innerHTML = update;
};

START_STOP_BTN.addEventListener("click", () => {
  START_STOP_BTN.classList.toggle("start");
  START_STOP_BTN.classList.toggle("stop");
  updateStartStopBtn();
});

CLEAR_BTN.addEventListener("click", () => {
  START_STOP_BTN.classList.remove("stop");
  START_STOP_BTN.classList.add("start");
  START_STOP_BTN.innerHTML = "START";
});

SET_TIME_BTN.addEventListener("click", () => {
  const [minutes, seconds] = TIME_INPUT.value.split(":");
  MINUTES.innerHTML = minutes;
  SECONDS.innerHTML = seconds;
});
