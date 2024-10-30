//////////////////////////////////////////////
//////// 11)
const obj = {
  name: "alison",
  age: 26,
  role: "developer",
};
const isPropExist = function (obj, property) {
  let s = 0;
  for (const [key] of Object.entries(obj)) {
    if (key === property) s++;
  }
  return s > 0;
};
console.log(isPropExist(obj, "name"));
