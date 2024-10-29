//////////////////////////////////////////////
//////// 3)
const filter_array_values = function (arr) {
  let nArr = [],
    m = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      nArr[m] = arr[i];
      m++;
    }
  }
  console.log(nArr);
};
//filter_array_values([58, "", "abcd", true, null, false, 0]);
