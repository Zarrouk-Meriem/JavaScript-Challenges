//////////////////////////////////////////////
//////// 10)
const etoiles = function () {
  let arr = ["*"];
  for (let i = 0; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
      arr[j] = arr[j - 1] + "*";
    }
    console.log(arr[i]);
  }
};
