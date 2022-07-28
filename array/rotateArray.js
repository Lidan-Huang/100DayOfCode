"use strict";

/**accepts: an array
 * rotate the array to the right by k step, and rotate the array in-place
 * constraints: space complexity O(1)
 * 
 * test case:
 * nums = [1,2,3,4,5,6,7], k = 3 => [5,6,7,1,2,3,4]
 * 
 * pseudocode:
 * k module by length of nums, in case k is bigger than length
 * 
 * reverse the nums
 * reverse the first  k elements, and reverse the latter part, from index k to 
 * length - 1
 */