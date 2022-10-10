"use strict";

/**Given an array of n positive integers arr[n] and an integer k
 * return the minimum length subarray that is good(the subarray consists of at
 * least k distinct integers), otherwise return -1
 * 
 * test case:
 * [2, 2, 1, 1,,3], k = 3 => 4 ([2, 1, 1, 3])
 * 
 */


//runtime: O(n^2) | space: O(n)
function findMinLengthSubarray(arr, k) {
  let unique = new Set(arr);
  if(unique.size < k) return -1;

  let result = [...arr];

  for (let i = 0; i < arr.length - k + 1; i++) {
    let subArr = [];
    let min = 1;
    subArr.push(arr[i]);
    if (min === k) {
      if (result.length > subArr.length) {
        result = [...subArr];
        continue;
      }
    }
    for (let j = i + 1; j < arr.length; j++) {
      if (!subArr.includes(arr[j])) {
        min++;
      }
      subArr.push(arr[j]);
      if (min === k) {
        if (result.length > subArr.length) {
          result = [...subArr];
          break;
        }
      }
    }
  }
  return result.length;
}

//solution2: runtime: O(n)
function findMinLengthSubarray2(arr, k) {
  const len = arr.length;
  let start = 0;
  let end = len;

  let l = 0;
  let r = 0;
  let freq = new Map();

  while (r < len) {
    freq.set(arr[r], (freq.get(arr[r]) || 0) + 1);
    r++;

    if (freq.size < k) continue;

    while (freq.size === k) {
      let currLen = (r - 1) - l + 1;
      let result = end - start + 1;
      if (currLen < result) {
        start = l;
        end = r - 1;
      }

      if (freq.get(arr[l]) === 1) {
        freq.delete(arr[l]);
      } else {
        freq.set(arr[l], freq.get(arr[l]) - 1);
      }
      l++;
    }
  }

  if (start === 0 && end === len) return -1;
  return end - start + 1;
}