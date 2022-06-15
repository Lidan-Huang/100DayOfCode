"use strict";

/**accepts: a string s, containing lowercase or uppercase letters
 * returns: the length of longest palindrome that can be built with those letters
 * letters are case sensitive
 * 
 * test case:
 * s = "abccccdd" => 7
 * s = "a" => 1
 * s = "bb" => 2
 * 
 * pseudocode:
 * using map to get the frequency of the string s
 * loop through the map, if the value is even, just add the value to the result
 * if the value is odd, check if it is bigger than 2, if bigger than 2, add
 * value - 1 to the result, at the same time, keep track of the odd value happened times
 * if the freq without odd number, return the result
 * if the freq has the odd number, return result + 1
 */

//runtime: O(n) | space: O(n), n is the length of s
function longestPalindrome(s) {
  let freq = new Map();
  for (let char of s) {
    let count = freq.get(char) || 0;
    freq.set(char, count + 1);
  }

  let oddCount = 0;
  let result = 0;
  for (let key of freq.keys()) {
    const value = freq.get(key);
    if (value % 2 === 0) {
      result += value;
    } else {
      oddCount += 1;
      if (value > 2) result += value - 1;
    }
  }

  return oddCount === 0 ? result : result + 1;
};