"use strict";

/**accepts: an array of nums of size n
 * returns: the majority element
 * majority element: appears more than [n/2] times, assume that the majority element always exists
 * 
 * test cases:
 * nums = [3, 2, 3] => 3
 * nums = [2, 2, 1, 1, 1, 2, 2] => 2
 * 
 * pseudocode:
 * using map to get the frequency of the numbers
 * make a variable to hold the maximum count of the numbers and the value of the number
 * when looping throug the nums to creating the frequency, compare the maximum
 * count to the current number's count, if max is smaller than current count,
 * exchange the value, and replace the max count's number with current number
 * 
 * return maximum count's number value
 */