"use strict";

/**
 * accepts: an array of n versions[1, 2, ..., n]
 * returns: the first bad version that causes all the following ones to be bad
 * 
 * given an API bool isBadVersion(version), which returns whether version is bad
 * you should minimize the number of calls to the API
 * 
 * test case:
 * n = 5, bad = 4 => 4
 * n = 1, bad = 1 => 1
 * 
 * pseudocode:
 * loop through the array from 1 to end
 * once meet isBadVersion(i) is true, return i
 */

//runtime: O(n) | space: O(1)
function solution1(isBadVersion) {
  return function version(n) {
    for (let i = 1; i <= n; i++) {
      // once hit the first bad version, return the index
      if (isBadVersion(i)) return i;
    }
  }
}

function solution2(isBadVersion) {
  return function version(n) {
    if (isBadVersion(1)) return 1;
    for (let i = n; i > 0; i--) {
      if (!isBadVersion(i)) return i + 1;
    }
  }
}


//runtime: O(logn) | space: O(1)
function solution3(isBadVersion) {
  return function version(n) {
    let left = 1;
    let right = n;
    let result;
    while(left <= right) {
      let middle = Math.floor((left + right) / 2);
      if (isBadVersion(middle) === false) {
        left = middle + 1;
      } else {
        result = middle;
        right = middle - 1;
      }
    }
    //if just return middle, and first middle is the only first bad one, the
    //result will be wrong, like n=5, bad=3; so make a variable result to 
    //track the first bad version
    return result;
  }
}