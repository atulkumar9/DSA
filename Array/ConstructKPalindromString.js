/**
 * Problem Statement - https://leetcode.com/problems/construct-k-palindrome-strings/
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */

var canConstruct = function (s, k) {
  let map = new Map();
  if (s.length < k) return false;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  let noOfOddsCount = 0;
  map.forEach((value, key) => {
    if (value % 2 !== 0) {
      noOfOddsCount++;
    }
  });

  return noOfOddsCount <= k;
};

// // annabelle
// map = {
//     a: 2,
//     n: 2,
//     b: 1,
//     e: 2,
//     l: 2
// }
// t - 5
// noOfEven - 4
// noOfOdd - 1

// k = 2

// // leetcode
// map = {
//     l: 1,
//     e: 3,
//     t: 1,
//     c: 1,
//     o: 1,
//     d: 1,
// }

// t - 6
// noOfEven = 0
// noOfOdd = 6
// --------------
// abeeecabr

// baereab ec
// k = 2

// ara bcb eee
// k = 3

// barab c e e e
// k=5

// ara bb c e e e
// k=6

// k=7
// aa bb c e e e r

// map = {
//     a: 2,
//     b: 2,
//     c: 1,
//     e: 3,
//     r: 1
// }

// noOfOdd = 3,
// noOfEven = 2

// aaecbceaa

// a - 4
// b - 1
// c - 2
// d - 1
// e - 2
// f - 1

// if (noOfOdds <= 1) {

// }

// if (noOf)
