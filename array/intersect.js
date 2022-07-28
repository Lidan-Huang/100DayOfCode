"use strict";

/**accepts: two integer arrays nums1 and nums2
 * returns: an array of their intersection. 
 * Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
 * 
 * test case: 
 * nums1 = [1,2,2,1], nums2 = [2,2] => [2, 2]
 * nums1 = [4,9,5], nums2 = [9,4,9,8,4] => [4, 9]
 * 
 * pseudocode:
 * sort two arrays, nums1, nums2
 * make a variable result = []
 * loop through two arrays from the start, make sure the index is less than 
 * corresponding array length
 * if nums1[i] === nums2[j], push the number to result, both index increase 1
 * if less: i++
 * if great: j++
 * 
 * return result
 */

// runtime: O(nlogn) | space complexity: o(n), n is the length of the shorter array
function intersect(nums1, nums2) {
  //make sure add the arrow function inside of sort(), if doesn't add it, 
  //sort function will convert number to string and then compare
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let result = [];
  let i = 0; //track index of nums1
  let j = 0; //track index of nums2

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      result.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
}