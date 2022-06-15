"use strict";

/**accepts: two binary strings a and b
 * returns: their sum as a binary string
 * 
 * test case:
 * a = "11", b = "1" => "100"
 * a = "1010", b = "1011" => "10101"
 * 
 * pseudocode:
 * split two strings a and b to arrays
 * make a new array to hold the result
 * make a variable to hold carrier, initial value is 0
 * pop the two numbers from two arrays, if the sum + carrier is less than 2, push the sum 
 * to the result array
 * if the sum + carrier is greater or equal to 2, make the current sum to 0 and push to 
 * the result array, update the carrier to 1
 * 
 * if one array is empty, make the value to 0
 * join the result array to a string and reverse it
 */