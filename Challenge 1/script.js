//////////////////////////////////////////////
//////// 1)
const removeStr = function (s, c, j) {
  let string = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] != c || i != j) {
      string += s[i];
    }
  }
  return string === s ? `"${c}" doesn't exist at this position.` : string;
};
/*const str = "Ali";
console.log(removeStr(str, "A", 0));
console.log(removeStr(str, "l", 2));
console.log(removeStr(str, "b", 1));*/
