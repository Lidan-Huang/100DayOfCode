"use strict";

/**accepts: a string s, of lowercase English letters that is repeated infinitely many times
 *          an integer n
 * returns: find and print the number of letter a's in the first n letters of the infinite string
 * 
 * test case:
 * "abcac", 10 => 4
 * 
 * pseudo code:
 * make a variable to store the count of a
 * according the integer and string length to determine how many times the string is repeated
 * find how many a's in the string and the position
 * deal with the remainder
 * return count
 */

function repeatedString(s, n) {
  let count = 0;
  const lengthOfS = s.length;
  let idxOfA = [];
  for (let i = 0; i < lengthOfS; i++) {
    if (s[i] === "a") idxOfA.push(i);
  }
  const numOfA = idxOfA.length;

  const repeatTimes = Math.floor(n / lengthOfS);
  const remainder = n % lengthOfS;

  count = numOfA * repeatTimes;
  for (let num of idxOfA) {
    if (num <= (remainder - 1)) count++;
  }

  return count;
}