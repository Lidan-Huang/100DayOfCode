"use strict";

/**accepts two strings, s and t
 * returns: true, if t is an anagram of s, otherwise return false
 * 
 * test cases:
 * s = "anagram", t = "nagaram" => true
 * s = "rat", t = "car" => false
 * s = "ab", t = "a" => false
 * 
 * pseudocode:
 * using map to get frequency of two strings, s and t
 * check if two map sizes are different, return false
 * then loop through one map, if the key is not the same or the value of the key
 * is not equal, return false
 * 
 * return true
 */


//runtime: O(n) | space: O(n+m)
function isAnagram(s, t) {
  const freqS = getFrequency(s);
  const freqT = getFrequency(t);

  // make sure the two freq counter has the same length of keys
  if (freqS.size !== freqT.size) return false;
  for (let key of freqT.keys()) {
    if (!(freqS.has(key) && freqS.get(key) === freqT.get(key))) return false;
  }
  return true;
};

function getFrequency(str) {
  let freq = new Map();
  for (let char of str) {
    let count = freq.get(char) || 0;
    freq.set(char, count + 1);
  }
  return freq;
}