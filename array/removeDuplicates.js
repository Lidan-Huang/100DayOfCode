'use strict';

/**accepts: a sorted array of integers
 * returns: the length of array without duplicates
 * constraints: space complexity O(1)
 * 
 * test case: 
 * [1, 1] -> 1 ([1])
 * [1, 1, 2, 3] -> 3([1, 2, 3])
 * 
 * pseudocode:
 * using two pointers:
 * left = 0; right = 1
 * if right number is not equal left number, both pointers add 1
 * else: right add 1 and continue compare right and left until they are different
 * then if right is less than the length of the array, give right value to 
 * left + 1, and left++ 
 * continue until right reach to the end
 * 
 * return left + 1 (as return the length)
 */