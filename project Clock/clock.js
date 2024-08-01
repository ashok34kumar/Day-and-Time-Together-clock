
let today = new Date();
let day = today.getDay();
let daylist = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
// Display the current day
let dayTimeString = `${daylist[day]}`;

// Calling showTime function at every second
setInterval(showTime, 1000);
 
// Defining showTime function
function showTime() {
    // Getting current time and date
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
 
    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
 
    hour =
        hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime =
        hour +
        ":" +
        min +
        ":" +
        sec +
        am_pm;
 
   
  let MyClock = document.getElementById("MyClockDisplay");
  let MyClockAll = dayTimeString + ":" + currentTime;

  MyClockDisplay.innerHTML = MyClockAll;
  
}
showTime();
