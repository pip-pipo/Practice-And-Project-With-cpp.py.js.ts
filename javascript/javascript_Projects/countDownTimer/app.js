
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minsEl = document.getElementById("mins");
  const secondsEl = document.getElementById("seconds");

const newYears = "1 jan 2022";

function counter() {
  const newYearsDate = new Date(newYears);

  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formateTime(hours);
  minsEl.innerHTML = formateTime(mins);
  secondsEl.innerHTML = formateTime(seconds);


}

function formateTime(time){
    return time<10?`0${time}`:time;
}

counter();

setInterval(counter,1000)