const daysArr = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const data = [
  {
    startTime: "10:00am",
    endTime: "5:00pm",
    open: [true, true, true, true, true, false, false],
  },
  {
    startTime: "10:00am",
    endTime: "5:00pm",
    open: [false, false, false, false, false, true, false],
  },
  {
    startTime: "11:00am",
    endTime: "6:00pm",
    open: [false, false, false, false, false, false, true],
  },
];

function getDays(arr, days) {
  let windowStart = -1;
  let windowEnd = 0;
  for (let i = 0; i < arr.open.length; i++) {
    if (arr.open[i]) {
      if (windowStart === -1) windowStart = i;
      windowEnd = i;
    }
  }
  const openHours = `${arr.startTime} : ${arr.endTime}`;
  if (windowStart === windowEnd) {
    return `${days[windowStart]} ${openHours} `;
  }
  return `${days[windowStart]}-${days[windowEnd]} ${openHours}`;
}

function openStoreTimes(data, daysArr) {
  const schedule = [];
  data.forEach((times) => {
    schedule.push(getDays(times, daysArr));
  });
  return schedule;
  // const days1 = getDays(data[0], daysArr);
  // const days2 = getDays(data[1], daysArr);
  // const days3 = getDays(data[2], daysArr);
  // console.log(days1);
  // console.log(days2);
  // console.log(days3);
}

console.log(openStoreTimes(data, daysArr));
// return ['Monday-Saturday 10:00am-5:00pm', 'Sunday 11:00am-6:00pm']
// return ['Monday-Tuesday 10:00am-5:00pm', 'Wednesday 9:00am-1:00pm', 'Thursday-Saturday 10:00am-5:00pm', 'Sunday 11:00am-6:00pm']
