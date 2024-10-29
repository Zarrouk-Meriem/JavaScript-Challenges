//////////////////////////////////////////////
//////// 7)
const sortArr = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] <= arr[j]) {
        let aux = arr[j];
        arr[j] = arr[i];
        arr[i] = aux;
      }
    }
  }
  return arr;
};
