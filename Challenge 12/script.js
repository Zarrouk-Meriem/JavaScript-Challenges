//////////////////////////////////////////////
//////// 12)
const chunkArray = function (arr, slices, n) {
  let nArr = [],
    j = 0,
    ij = n;
  for (let i = 0; i <= slices; i++) {
    nArr[i] = arr.slice(j, n);
    j += ij;
    n += n;
  }
  console.log(nArr);
};
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//chunkArray(arr, 3, 3);
