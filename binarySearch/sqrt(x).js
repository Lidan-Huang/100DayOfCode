"use strict";

/**
 * Accept a non-negative integer x, 
 * return the square root of x, if the result is decimal, just return the
 * integer part
 * 
 * test case:
 * 0 => 0
 * 2 => 1
 * 4 => 2
 * 8 => 2
 * 
 * pseudocode:
 * make two pointers, left = 0; right = x
 * while left < right:
 *    mid = (left + right) /2
 *    if mid * mid === x, return mid
 *    else if > x:
 *        check whether square of (mid - 1) < x:
 *          if true: return mid - 1
 *          else: right = mid
 *    else mid * mid < x:
 *        if (mid + 1) * (mid + 1) > x: return mid
 *        if equal: return mid + 1
 *        if less: left = mid
 * 
 */

function mySqrt(x) {
  let left = 0;
  let right = x;

  while (left <= right) {
    //let mid = Math.floor(left + (right - left)/2) => protect from overflow
    let mid = Math.floor((left + right) / 2);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      if ((mid + 1) * (mid + 1) > x) {
        return mid;
      } else if ((mid + 1) * (mid + 1) === x) {
        return mid + 1;
      } else {
        left = mid;
      }
    } else {
      if ((mid - 1) * (mid - 1) <= x) {
        return mid - 1;
      } else {
        right = mid;
      }
    }
  }
}