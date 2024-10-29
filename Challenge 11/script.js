//////////////////////////////////////////////
//////// 11)
const repeat = function (s, n) {
  n = n === undefined ? 1 : n;
  let arr = [s];
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
      arr[j] = arr[j - 1] + s;
    }
    console.log(arr[i]);
  }
};
repeat("Ha!", 5);
