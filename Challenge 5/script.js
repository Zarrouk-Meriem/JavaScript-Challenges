//////////////////////////////////////////////
//////// 5)
const swapHalvesArr = function (arr) {
  let center = Math.trunc(arr.length / 2);
  let j = 0,
    nArr = [];
  for (let i = center; i < arr.length; i++) {
    nArr[j] = arr[i];
    j++;
  }
  for (let i = 0; i < center; i++) {
    nArr[j] = arr[i];
    j++;
  }
  return nArr;
};
