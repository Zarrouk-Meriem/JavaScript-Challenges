//////////////////////////////////////////////
//////// 2)
/*const exist = function (c, arr) {
  let i = 0;
  while (i < arr.length && c != arr[i]) {
    i++;
  }
  return !(i === arr.length);
};
const diffrence = function (arr1, arr2) {
  let diff = [],
    m = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (!exist(arr1[i], arr2)) {
      diff[m] = arr1[i];
      m++;
    }
  }
  console.log(diff);
  for (let i = 0; i < arr2.length; i++) {
    if (!exist(arr2[i], arr1)) {
      diff[m] = arr2[i];
      m++;
    }
  }
  console.log(diff);
};
diffrence([1, 2, 3], [100, 2, 1, 10]);*/
