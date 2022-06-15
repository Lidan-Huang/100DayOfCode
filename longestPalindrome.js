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
 * loop through the map, if the value is even, just add to the value to the result
 * if the value is odd, check if it is bigger than 2, if bigger than 2, add 
 * the value - 1 to the result, at the same time, keep track of the odd value happedned times
 * if the freq without odd number, return the result
 * if the freq has the odd number, return result + 1
 */