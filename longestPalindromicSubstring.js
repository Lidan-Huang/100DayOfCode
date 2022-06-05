"use strict";

/**accepts: a string
 * returns: longest palindromic substring
 * 
 * test case:
 * "abaxyzzyxf" => "xyzzyx"
 * "a" => "a"
 * "aca" => "aca"
 * 
 * pseudocode:
 * make a variable to store the longest substring palindrome indice(start and end)
 * initial value is the first letter[0, 1]
 * loop through the string from index 1
 *  check two conditions: odd position("aba") or even position("aa")
 *  let currentLongest is the longer one from odd and even
 *  compare longest and currentLongest, if currentLongest is longer, assign its
 *  value to longest, keep updating
 * return longest
 */

