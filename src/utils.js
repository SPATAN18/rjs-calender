export const weekDays = [
  "Sunday",
  "Monday",
  "Tueday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

export const monthNames = [
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
  "December"
];

export const monthDayCount = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31
];

/**
 *
 * @param {Date} date
 */
export const getMonthName = (date = new Date()) => {
  const monthNo = date.getMonth();
  const year = date.getFullYear();
  return `${monthNames[monthNo]} ${year}`;
};

export const daysInMonth = (date = new Date()) => {
  const noOfDays = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  return noOfDays;
};

/**
 *
 * @param {Date} date - date
 * @return Date for the next month
 */
export const nextMonthDate = (date = new Date()) => {
  let newDate = date;
  const monthNo = newDate.getMonth();
  const anewDate = newDate.setMonth(monthNo + 1);
  return new Date(anewDate);
};

export const prevMonthDate = (date = new Date()) => {
  let newDate = date;
  const monthNo = newDate.getMonth();
  const anewDate = newDate.setMonth(monthNo - 1);
  return new Date(anewDate);
};

/**
 *
 * @param {Date} date - date
 * @returns Weekday name on the first of the month
 */
export const dayOnFirstdate = (date = new Date()) => {
  const firstDay = date;
  firstDay.setDate(1);
  const dayNo = firstDay.getDay();
  return weekDays[dayNo];
};

export const daysArrayForMonth = (date = new Date()) => {
  const firstDay = date;
  console.log("first day", firstDay);
  firstDay.setDate(1);
  const dayNo = firstDay.getDay();
  let daysArray = [];
  for (let i = 0; i < dayNo; i++) {
    daysArray.push("");
  }
  daysArray = daysArray.concat(monthDayCount.slice(0, daysInMonth(date)));
  return daysArray;
};

/**
 *
 * @param {Date} date - date
 * @returns Weekday name on the date
 */
export const dayToday = (date = new Date()) => {
  const dayNo = date.getDay() - 1;
  return weekDays[dayNo];
};

/**
 *
 * @param {String} day - Name of the day to get the short form for
 */
export const shortenDayName = (day = "") => {
  if (day.length > 3) {
    return day.substring(0, 3).toUpperCase();
  }
  return day.toUpperCase();
};
