"use strict";

/**Best time to buy and sell stocks
 * 
 * You are given an array prices where prices[i] is the price of a given stock 
 * on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock 
 * and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you 
 * cannot achieve any profit, return 0.
 * 
 * 
 * Constraints:
 *     1 <= prices.length <= 105
 *     0 <= prices[i] <= 104
 * test case:
 * prices = [7,1,5,3,6,4]  => 5
 * prices = [7,5,3,2]  => 0
 * 
 */

function maxProfit(prices) {
  let max = 0;
  let lowest = prices[0];

  for (let i = 1; i < prices.length; i++) {
    let curr = prices[i];
    if (curr < lowest) {
      lowest = curr;
    } else {
      if ((curr - lowest) > max) {
        max = curr - lowest;
      }
    }
  }
  return max;
}