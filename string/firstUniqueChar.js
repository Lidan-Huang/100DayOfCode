"use strict";

/**
 * Given a string s, find the first non-repeating character in it
 * return its index. If it does not exist, return -1.
 * 
 * test case:
 * s = "hello" => 0
 * s = "aabb" => -1
 * s = "aab" => 2
 * 
 * pseudocode:
 * loop through the string s, and get the frequency of the letters
 * loop through the string s again, check each char's value in the freq, 
 *    if value === 1, return this index
 * return -1 (if not find)
 */

function firstUniqueChar(s) {
  let freq = {};

  for (let char of s) {
    let count = freq[char] || 0;
    freq[char] = count + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) return i;
  }

  return -1;
}