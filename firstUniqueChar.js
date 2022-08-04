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

