//////////////////////////////////////////////
//////// 9)
const humanize_format = function (n) {
  let s = n + "";
  let c = Number(s.slice(s.length - 1));
  if (c === 1 && n !== 11) return s + "st";
  else if (c === 2 && n !== 12) return s + "nd";
  else if (c === 3 && n !== 13) return s + "rd";
  else {
    return s + "th";
  }
};
//console.log(humanize_format(1));
