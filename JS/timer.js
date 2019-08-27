const DEADLINE = "December 25 2023 12:00:00 GMT+2:00";

function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

function initializeClock(endtime, id) {
  let clock = document.getElementById(id);
  let daysSpan = clock.querySelector(".days");
  let hoursSpan = clock.querySelector(".hours");
  let minutesSpan = clock.querySelector(".minutes");
  let secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    let t = getTimeRemaining(endtime);

    daysSpan.innerHTML = ("0" + t.days + ":").slice(-3);
    hoursSpan.innerHTML = ("0" + t.hours + ":").slice(-3);
    minutesSpan.innerHTML = ("0" + t.minutes + ":").slice(-3);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
  updateClock();
  let timeinterval = setInterval(updateClock, 1000);
}
initializeClock(DEADLINE, "clockdiv");
