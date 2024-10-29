//////////////////////////////////////////////
//////// 6)
const join = function (arr) {
  let s = (sp = "");
  for (let i = 0; i < arr.length; i++) {
    s += arr[i] + ",";
    sp += arr[i] + "+";
  }
  return `${s.slice(-s.length - 1, s.length - 1)}
${s.slice(-s.length - 1, s.length - 1)}
${sp.slice(-s.length - 1, s.length - 1)}`;
};
const myColor = ["Red", "Green", "White", "Black"];
console.log(join(myColor));
