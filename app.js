let hour = document.querySelector("#hours");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");
let ampm = document.querySelector("#ampm");

function setTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let am_pm = "AM";
  if (hh >= 12) {
    am_pm = "PM";
    hh = hh % 12 || 12;
  } else {
    am_pm = "AM";
    hh = hh || 12;
  }

  //   if (hh < 10) {
  //     hh = "0" + hh;
  //   }

  //   if (mm < 10) {
  //     mm = "0" + mm;
  //   }

  //   if (ss < 10) {
  //     ss = "0" + ss;
  //   }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  hour.innerText = hh;
  minute.innerText = mm;
  second.innerText = ss;
  ampm.innerText = am_pm;

  setTimeout(() => {
    setTime();
  }, 1000);
}

setTime();
