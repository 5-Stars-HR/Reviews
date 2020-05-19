const isNumeric = function (val) {
  return Number(parseFloat(val)) === val;
};

const parseDate = function (date) {
  if (!date) {
    console.error('Bad date');
  }
  const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Transform to: Month Day, Year
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};

module.exports = {
  isNumeric,
  parseDate,
};