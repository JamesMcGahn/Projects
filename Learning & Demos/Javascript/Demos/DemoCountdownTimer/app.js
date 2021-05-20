const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();



let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
const year = futureDate.getFullYear();
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
const month = months[futureDate.getMonth()]
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
giveaway.textContent = `giveaway ends ${weekday},  ${month} ${date} ${year}, ${hours}:${mins}am`

//future time in ms

const futureTime = futureDate.getTime()
function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  const oneDay = 1000 * 60 * 60 * 24
  const oneHour = 1000 * 60 * 60
  const oneMin = 1000 * 60

  let daysRemain = Math.floor(t / oneDay)
  let hoursRemain = Math.floor((t % oneDay) / oneHour)
  let minsRemain = Math.floor((t % oneHour) / oneMin)
  let secsRemain = Math.floor((t % oneMin) / 1000)

  values = [daysRemain, hoursRemain, minsRemain, secsRemain]
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time
  }

  items.forEach((item, index) => item.innerHTML = formatTime(values[index]))

  if (t < 0) {
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired"> sorry, this giveaway is over</h4>`
  }
}
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime()