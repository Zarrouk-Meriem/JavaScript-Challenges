//////////////////////////////////////////////
//////// 3)
const maxEvenLenArr = function (arr) {
  let i = 0;
  while (arr[i] % 2 === 1) i++;
  let max = arr[i];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max && arr[i] % 2 === 0) max = arr[i];
  }
  return max;
};
