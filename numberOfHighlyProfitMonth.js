"use strict";

/**
 * test case:
 * [5, 6, 3, 5, 7, 8], k = 3 => 2
 */

function numberOfHighlyProfitMonth(arr, k) {
  if (k === 1) return arr.length;npm 
  let count = 0;
  let left = 0;
  let right = 1;
  let currProfit = 1;
  
  while(left < right && right < arr.length) {
    if (arr[right] > arr[right - 1]) {
      currProfit++;
      right++;
    } else {
      left = right;
      right++;
      currProfit = 1;
    }
    if (currProfit === k) {
      left++;
      currProfit = k - 1;
      count++;
    }
  }
  return count;
}
