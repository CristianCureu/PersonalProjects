// Create 2 dates. One for now and one for the last day

function countdown() {
  const theDate = new Date("May 30, 2021 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = theDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const textDay = Math.floor(gap / day);
  // console.log(textDay);
  const textHour = Math.floor((gap % day) / hour);
  // console.log(textHour);
  const textMinute = Math.floor((gap % hour) / minute);
  // console.log(textMinute);
  const textSecond = Math.floor((gap % minute) / second);
  // console.log(textSecond);
  document.querySelector(".textDay").innerText = textDay;
  document.querySelector(".textHour").innerText = textHour;
  document.querySelector(".textMinute").innerText = textMinute;
  document.querySelector(".textSecond").innerText = textSecond;
}

setInterval(countdown, 1000);
