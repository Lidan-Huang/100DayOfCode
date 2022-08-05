"use strict";

/**accepts: non-empty string(lower case)
 * return: true if it is a palidrome
 * otherwise, return false
 * 
 * test case: 
 * "", "a" => true
 * "ab" => false
 * "aba" => true
 * "abac" => false
 * "abcba" => true
 * 
 * pseudo code:
 * if string.length <=1, return true
 * loop through the string, check if string[i] === string[string.length - i - i]
 *  if not equal, return false
 * return true
 */

function isPalindrome(string) {
  const len = string.length;
  if (len <= 1) return true; 

  for (let i = 0; i < len/2; i++) {
    if (string[i] !== string[len - 1 - i]) return false;
  }
  return true;
}

function isPalindrome2(string) {
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }

  return reversedString === string;
}