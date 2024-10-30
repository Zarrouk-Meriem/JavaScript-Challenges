//////////////////////////////////////////////
//////// 10)
const flat_case = function (s) {
  let i = 0;
  if (typeof s === "string") {
    while (i < s.length && s[i] !== s[i].toUpperCase() && s[i] != " ") {
      i++;
    }
    console.log(i === s.length);
  } else {
    console.log("it must be a string!!!❌");
  }
};
//flat_case("meriem");
