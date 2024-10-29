//////////////////////////////////////////////
//////// 1)
const unzip = function (arr) {
  let arrTypes = [],
    nArr = [],
    m = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      nArr[m] = arr[i][j];
      m++;
    }
  }
  let boolean = [];
  let number = [];
  let string = [];
  let b = (s = n = 0);
  for (let i = 0; i < nArr.length; i++) {
    if (typeof nArr[i] === "boolean") {
      boolean[b] = nArr[i];
      b++;
    } else if (typeof nArr[i] === "number") {
      number[n] = nArr[i];
      n++;
    } else if (typeof nArr[i] === "string") {
      string[s] = nArr[i];
      s++;
    }
  }
  const finalArr = [string, number, boolean];
  return finalArr;
};
arr = [
  ["a", 1, true],
  ["b", 2],
];
//console.log(...unzip(arr));
