//////////////////////////////////////////////
//////// 4)
const date_diff_indays = function (d1, d2) {
  let diffyear = d1.slice(-4) - d2.slice(-4);
  let diffmonth = d1.slice(3, 5) - d2.slice(3, 5);
  let diffday = d1.slice(0, 2) - d1.slice(0, 2);
  console.log(diffyear * 365 + diffmonth * 30.417 + diffday);
};
//date_diff_indays("04/02/2014", "11/04/2014");
