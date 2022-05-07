"use strict";

/**accepts: a non-empty string of lowercase letters, and a non-negative keyeger representing a key
 * return: a new string of shifting K positions in the alphabet, where K is the key
 * 
 * test case: 
 * 'abc', 0 => 'abc'
 * 'abc', 1 => 'bcd'
 * 'xyz', 2 => 'zab'
 * 
 * pseudo code:
 * make an object to store all the letter to value {'a':1, ...'z':26}
 * if integer is 0, return original string
 * make a new string to hold the result
 * loop through the string, get the value of the letter, then make sure
 * after adding integer, the value is smaller than 26, if not, minus 26, and 
 * find the correct letter
 * 
 * return new string
 */

function caesarCipherEncryptor(string, key) {
  if (key === 0) return string;
  let newStr = '';
  key = key % 26;
  for (let char of string) {
    const newValue = char.charCodeAt() + key;
    if (newValue > 122) {     
      newStr += String.fromCharCode(96 + newValue % 122);
    } else {
      newStr += String.fromCharCode(newValue);
    }
  }
  return newStr;
}
