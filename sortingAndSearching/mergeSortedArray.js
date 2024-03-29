"use strict";

/**Accepts: two integer arrays nums1 and nums2, sorted in non-decreasing order, 
 *          and two integers m and n, representing the number of elements in 
 *          nums1 and nums2 respectively.
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * The final sorted array should not be returned by the function, but instead 
 * be stored inside the array nums1. To accommodate this, nums1 has a length of
 * m + n, where the first m elements denote the elements that should be merged,
 * and the last n elements are set to 0 and should be ignored. nums2 has a 
 * length of n.
 * 
 * test case:
 * nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3 => [1,2,2,3,5,6]
 * nums1 = [1], m = 1, nums2 = [], n = 0 => [1]
 * nums1 = [0], m = 0, nums2 = [1], n = 1 => [1]
 * 
 * pseudocode:
 * loop through from the end of both array
 * compare two integer, put bigger one to the end of the nums1
 */

//merge two sorted array in place
function mergeTwoSortedArray(nums1, m, nums2, n) {
  let right = m + n - 1;
  let i = m;
  let j = n;

  while (i > 0 && j > 0) {
    if (nums1[i - 1] <= nums2[j - 1]) {
      nums1[right] = nums2[j - 1];
      j--;
    } else {
      nums1[right] = nums1[i - 1];
      i--;
    }

    right--;
  }

  while (i === 0 && j > 0) {
    nums1[right] = nums2[j - 1];
    j--;
    right--;
  }
}