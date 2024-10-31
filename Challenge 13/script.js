//////////////////////////////////////////////
//////// 13)
const capitalizeFistLetter = function (s) {
  s = s.replace(s[0], s[0].toUpperCase());
  for (let i = 0; i < s.length; i++) {
    if (s[i - 1] === " ") {
      s = s.replace(" " + s[i], " " + s[i].toUpperCase());
    }
  }
  console.log(s);
};
//capitalizeFistLetter("Hello how are you");
