"use strict";

/**
 * input: an array of positive integers, representing the values of coins in the possession
 * return: the minimum amount of change (the minimum sum of money) that you CANNOT create
 * 
 * test case: 
 * [] => 1
 * [1, 2, 5] => 4
 * [2, 3] => 1
 * 
 * pesudo code:
 * sort the coins
 * make a variable change = 0
 * loop through the coins, check whether current value is bigger than change + 1
 * if bigger, return change + 1;
 * otherwise change equal change + current value
 * 
 * if the coins array is all iterated, return change + 1
 * 
 */

//runtime: O(nlogn) | space: O(1)
function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);
  let change = 0;

  for (let coin of coins) {
    if (coin > change + 1) return change + 1;

    change += coin;
  }

  return change + 1;
} 

