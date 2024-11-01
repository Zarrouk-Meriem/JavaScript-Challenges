//////////////////////////////////////////////
//////// 6)
const getTheDay = function (date) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  console.log(days[date.getDay() - 1]);
};

getTheDay(new Date());
