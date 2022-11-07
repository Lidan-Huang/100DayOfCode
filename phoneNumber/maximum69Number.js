"use strict";

/**
 * given a positive integer "num", consisting only of digits 6 and 9
 * return: the maximum number you can get by changing at most one digit(6 becomes
 * 9, and 9 becomes 6)
 * 
 * test cases:
 * num = 9669 => 9969
 * num = 9996 => 9999
 * num = 9999 => 9999
 */

function maximum69Number(num) {
  let nums = num.toString().split("");
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === "6") {
      nums[i] = "9";
      break;
    }
  }

  return Number(nums.join(""));
}