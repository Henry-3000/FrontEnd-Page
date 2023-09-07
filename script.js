let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

//To get day of the week
const myDate = new Date();
let dayOfTheWeek = myDate.getDay();

//displaying the value to the tag using an id=dayOfTheWeek 
document.getElementById("dayOfTheWeek").textContent  = weekdays[dayOfTheWeek];

//To get time of the day
let year = myDate.getFullYear();
let month = myDate.getMonth();
let day = myDate.getUTCDate();
let hours = myDate.getUTCHours();
let minutes = myDate.getUTCMinutes();
let seconds = myDate.getUTCSeconds();
let UTCtime = new Date(Date.UTC(year, month, day, hours, minutes, seconds));

//displaying time of the day on the webpage by targeting id=timeOfTheDay
document.getElementById("timeOfTheDay").textContent = UTCtime