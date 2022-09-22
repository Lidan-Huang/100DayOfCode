"use strict";

/**
 * The count-and-say sequence is a sequence of digit strings defined by the 
 * recursive formula:
 *     countAndSay(1) = "1"
 *     countAndSay(n) is the way you would "say" the digit string from 
 *     countAndSay(n-1), which is then converted into a different digit string.
 * To determine how you "say" a digit string, split it into the minimal number 
 * of substrings such that each substring contains exactly one unique digit. 
 * Then for each substring, say the number of digits, then say the digit.
 * Finally, concatenate every said digit.
 * 
 * constraints:
 *   1 <= n <= 30
 * 
 * test cases:
 * n = 1 => "1"
 * n = 4 => "1211"
 *    countAndSay(1) = "1"
 *    countAndSay(2) = say "1" = one 1 = "11"
 *    countAndSay(3) = say "11" = two 1's = "21"
 *    countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
 */


function countAndSay(n) {
  if (n < 1) return "";
  let result = "1";

  while (n > 1) {
    let pairs = strToPairs(result);
    result = pairsToStr(pairs);
    n--;
  }

  return result;
};

function strToPairs(str) {
  let pairs = [];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === str[i]) {
      count++;
    } else {
      pairs.push([count, +str[i - 1]]);
      count = 1;
    }
  }
  pairs.push([count, +str[str.length - 1]]);

  return pairs;
}

function pairsToStr(pairs) {
  let str = "";

  for (let pair of pairs) {
    str += pair[0];
    str += pair[1];
  }

  return str;
}