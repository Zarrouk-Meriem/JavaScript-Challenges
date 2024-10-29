//////////////////////////////////////////////
//////// 4)
const replaceFirstDigit = function (s) {
  if (s.length === 0) return "String should contains at least a digit!";
  else if (s.length === 1) return "$";
  else return "$" + s.slice(-(s.length - 1));
};
