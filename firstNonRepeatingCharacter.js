"use strict";

/**Accepts a string of lowercase English-alphabet letters
 * returns: index of the string's first non-repeating character
 * return -1, if can't find non-repeating characters
 * 
 * first non-repeating character is the first character in a string that occurs only once
 * 
 * test case:
 * 'abcdcaf' => 1 (b is the first one)
 * 'abcabd" => -1
 * 
 * psudocode:
 * get frequency of the string
 * if all the value of the keys are bigger than 1, return -1
 * else find the lowest index that the value of the key is 1
 */


//runtime: O(n) | space: O(n)
function firstNonRepeatingCharacter(string) {
  let freq = new Map();

  for (let char of string) {
    let count = freq.get(char) || 0;
    freq.set(char, count + 1);
  }

  let letter = '';
  for (let key of freq.keys()) {
    if (freq.get(key) === 1) {
      letter = key;
      break;
    }
  }
  return letter ? string.indexOf(letter) : -1;
}
