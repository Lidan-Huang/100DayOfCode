"use strict";

/**accepts: an array of at least three integers, without sorting the input array
 * returns: a sorted array of the three largest integers in the put array
 * 
 * the function should return duplicate integers if necessary
 * 
 * test case: 
 * [10, 5, 9, 10, 12] => [10, 10, 12]
 * 
 * pseudo code of sorting the array:
 * sort the array according ascending order
 * return the last three items
 * 
 * pseudo code without sorting the array:
 * make an array to hold three largest number, initial values are null
 * loop through the array,check whether 3rd number is null or smaller than current 
 *  current value, if so update the result array, if not check the second number,
 *  then check the first number
 * 
 * return result
 */

// solution with sorting the array
//runtime: O(nlogn)
function findThreeLargestNumbers1(array) {
  array.sort((a, b) => a - b);
  return array.slice(array.length -3);
}

// solution without sorting the array
function findThreeLargestNumbers(array) {
  let threeLargestNums = [null, null, null];

  for (let num of array) {
    updateLargest(threeLargestNums, num);
  }

  return threeLargestNums;
}

function updateLargest(threeLargestNums, num) {
  if (threeLargestNums[2] === null || threeLargestNums[2] < num) {
    shiftNums(threeLargestNums, num, 2);
  } else if (threeLargestNums[1] === null || threeLargestNums[1] < num) {
    shiftNums(threeLargestNums, num, 1);
  } else if (threeLargestNums[0] === null || threeLargestNums[0] < num) {
    shiftNums(threeLargestNums, num, 0);
  } 
}

function shiftNums(threeLargestNums, num, idx) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      threeLargestNums[i] = num;
    } else {
      threeLargestNums[i] = threeLargestNums[i + 1];
    }
  }
}