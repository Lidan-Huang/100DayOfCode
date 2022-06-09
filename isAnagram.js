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