//////////////////////////////////////////////
//////// 15)
const users = [
  { name: "fred", language: "Javascript" },
  { name: "barney", language: "TypeScript" },
  { name: "frannie", language: "Javascript" },
  { name: "anna", language: "Java" },
  { name: "jimmy" },
  { name: "nicky", language: "Python" },
];
const orderWith = function (arr, keyarr, valuearr) {
  let narr = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    for (const [key, value] of Object.entries(arr[i])) {
      if (key === keyarr) {
        narr[j] = arr[i];
        j++;
      }
    }
  }
  for (let j = 0; j < narr.length; j++) {
    for (const [key, value] of Object.entries(arr[j])) {
    }
  }

  console.log(narr);
};
orderWith(users, "language", ["Javascript", "TypeScript", "Java"]);
