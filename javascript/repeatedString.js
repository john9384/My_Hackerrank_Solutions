function repeatedString(s, n) {
  //   let str = "";
  //   let total_no_of_a = 0;
  //   if (s == "a") {
  //     return n;
  //   } else {
  //     for (let i = 0; i < 10000000000000; i++) {
  //       if (str.length >= n) {
  //         let first_n_char = str.substring(0, n);
  //         total_no_of_a = (first_n_char.match(/a/g) || []).length;
  //         break;
  //       } else {
  //         str = str.concat(s);
  //         continue;
  //       }
  //     }
  //     return total_no_of_a;
  //   }
  s = s.split("");
  var stringSize = s.length;
  var a = s.filter((a) => a == "a").length;

  var repeat = Math.floor(n / stringSize);

  var left = n - repeat * stringSize;

  return repeat * a + s.filter((a, i) => a == "a" && i < left).length;
}

console.log(repeatedString("a", 1000000000));
