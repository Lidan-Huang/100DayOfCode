"use strict";

/** given a non-empty array of positive integers representing the amounts
 * of time that specific queries take to execute
 * only one query can be executed at a time
 * the queries can be executed in any order
 * return the minmum waiting time
 * 
 * test case:
 * [1, 4, 5] => 6
 * 
 * pseudo code:
 * sort the array
 * use reduce to add the sum of the array
 * make a variable to store the waiting time: waitingTime = 0
 * loop through from the end to start,
 *    sum = sum - currentvalue
 *    waitingTime += sum
 * return waitingTime
 * 
 */


//runtime: O(nlogn) | space: O(1)
function minWaitingTime(queries) {
  let sum = queries.reduce((a, b) => (a + b), 0);
  queries.sort((a, b) => a - b);
  let waitingTime = 0;

  for (let i = queries.length - 1; i >= 0; i--) {
    sum -= queries[i];
    waitingTime += sum;
  }

  return waitingTime;
}