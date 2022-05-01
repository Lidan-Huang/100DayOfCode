/**
 * input: non-empty array of integers, sorted, ascending order
 * return: a new array, the same length with the squares of the original integers
 */

/**test case:
 * [1, 2, 3] => [1, 4, 9]
 * [-3, -2, -1] => [1, 4, 9]
 * [-2, 0] => [0, 4]
 */

/**pseudo code
 * make a new array to hold the result
 * loop through the array, square each number
 * if the first number big or equal than 0, just return the new array,
 * otherwise, sort the result array and return
 */

/**runtime: o(nlogn)
 * as use sorted
 */
function sortedSquaredArray1(sortedInts) {
  let squaredInts = sortedInts.map(item => item * item);

  if (sortedInts[0] < 0) {
    squaredInts.sort((a, b) => a - b);
  }
  return squaredInts;
}

/**
 * runtime: o(n^2)
 */
function sortedSquaredArray2(sortedInts) {
  let squaredInts = [];
  let left = 0;
  let right = sortedInts.length - 1;

  while (left <= right) {
    if (Math.abs(sortedInts[left]) >= Math.abs(sortedInts[right])) {
      squaredInts.unshift(Math.pow(sortedInts[left], 2));
      left++;
    } else {
      squaredInts.unshift(Math.pow(sortedInts[right], 2));
      right--;
    }
  }
  return squaredInts;
}

/**
 * runtime: o(n) 
 */
function sortedSquaredArray3(sortedInts) {
  let squaredInts = [];  // let squaredInts = new Array(sortedInts.length).fill(0);
  let left = 0;
  let right = sortedInts.length - 1;

  for (let idx = sortedInts.length - 1; idx >= 0; idx--) {
    if (Math.abs(sortedInts[left]) >= Math.abs(sortedInts[right])) {
      squaredInts[idx] = Math.pow(sortedInts[left], 2);
      left++;
    } else {
      squaredInts[idx] = Math.pow(sortedInts[right], 2);
      right--;
    }
  }
  return squaredInts;
}
