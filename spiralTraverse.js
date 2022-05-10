"use strict";

/**accepts: n * m two-dimensional array(could be n===m)
 * returns a one-dimensional array of all the array's elements in spiral order
 * 
 * test case:
 * array = [[1,  2,  3, 4],
 *         [12, 13, 14, 5],
 *         [11, 16, 15, 6],
 *         [10, 9,  8,  7]]
 * return: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
 * 
 * pseudo code:
 * make an empty array to hold the data, result = [];
 * make four variables: left = 0; right = m -1; top = 0; bottom = n -1;
 * make sure left <= right and top <= bottom
 */

function spiralTraverse(array) {
  const result = [];
  const rows = array.length;
  const cols = array[0].length;
  let left = 0;
  let right = cols - 1;
  let top = 0;
  let bottom = rows - 1;

  while (result.length < rows * cols) {
    for (let j = left; j <= right; j++) {
      result.push(array[top][j]);
    }
    top++;
    if(top > bottom) break;
    for (let i = top; i <= bottom; i++) {
      result.push(array[i][right]);
    }
    right--;
    if (right < left) break;
    for (let m = right; m >= left; m--) {
      result.push(array[bottom][m]);
    }
    bottom --;
    if (bottom < top) break;
    for (let n = bottom; n >= top; n--) {
      result.push(array[n][left]);
    }
    left++;
    if (left > right) break;
  }
  return result;
}

function spiralTraverse2(array) {
  const result = [];
  const rows = array.length;
  const cols = array[0].length;
  let left = 0;
  let right = cols - 1;
  let top = 0;
  let bottom = rows - 1;

  while (left<=right && top<=bottom) {
    for (let j = left; j <= right; j++) {
      result.push(array[top][j]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      result.push(array[i][right]);
    }
    right--;
    // if (right < left) break;
    for (let m = right; m >= left; m--) {
      if (bottom < top) break;
      result.push(array[bottom][m]);
    }
    bottom --;
    for (let n = bottom; n >= top; n--) {
      if (left > right) break;
      result.push(array[n][left]);
    }
    left++;
  }
  return result;
}