//////////////////////////////////////////////
//////// 8)
const deleteRollno = function (object) {
  let nObject = {};
  for (const property in object) {
    if (property != "rollno") nObject[property] = object[property];
  }
  return nObject;
};
const student = {
  name: "meriem",
  sclass: "bac",
  rollno: 12,
};
