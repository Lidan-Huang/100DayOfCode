"use strict";

/**accepts: an array prices
 * return: maximum profit you can achieve
 * requirements: on each day, you may decide to buy and/or sell the stock, but
 *  only hold at most one share of the stock at any time, you can buy it then
 *  immediately sell it on the same day.
 * 
 * 1 <= prices.length <= 3*10^4
 * 0 <= prices[i] <= 10^4
 * 
 * test cases:
 *  - prices = [7, 1, 5, 3, 6, 4] => 7 (4 + 3)
 *  - prices = [1, 2, 3, 4, 5] => 4
 *  - prices = [7, 6, 5, 4, 3, 2, 1] => 0
 */

function maxProfit(prices) {
  let max = 0;
  if (prices.length < 2) return max;

  let left = 0;
  let right = 1;

  while (right < prices.length) {
    let diff = prices[right] - prices[left];
    if (diff > 0) max += diff;
    left++;
    right++;
  }

  return max;
}