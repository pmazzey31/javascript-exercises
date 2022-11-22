const ftoc = function(fNum) {
  return Math.round(((fNum - 32) * (5/9)) * 10) / 10;
};

const ctof = function(cNum) {
  return Math.round(((cNum * (9/5)) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
