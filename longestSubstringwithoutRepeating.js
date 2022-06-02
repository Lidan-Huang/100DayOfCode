"use strict";

/** accepts: a string s
 * returns: the length of the longest substring without repeating
 * 
 * test case:
 * "abcd" => 4
 * "abcdaf" => 5
 * "" => 0
 * "a" => 1
 * 
 * pseudo code:
 * make a variable longest equal to 0
 * make a longestStr to empty string
 * loop through the string, if the longestStr contains current char,
 *  find the char index of the longestStr, and slice it after the index of char
 *  reassign longestStr with sliced str and current char 
 * if not contains current char, add current char to longestStr
 *  check if the longestStr length is bigger than longest, assign the length to the longest
 * return longest
 */

function longestSubstringWithoutRepeating(s) {
  let longest = 0;
  let longestStr = "";

  for (let char of s) {
    if (longestStr.includes(char)) {
      let idx = longestStr.indexOf(char);
      let subStr = longestStr.slice(idx + 1);
      longestStr = subStr.concat(char);
    } else {
      longestStr += char;
    }
    if (longestStr.length > longest) {
      longest = longestStr.length;
    }
  }
  return longest;
};