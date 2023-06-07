const addDays = require("date-fns/addDays");

const days = (a) => {
  const date = addDays(new Date(2020, 7, 22), a);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};
module.exports = days;
