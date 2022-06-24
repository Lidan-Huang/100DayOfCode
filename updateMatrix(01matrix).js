"use strict";

/**accepts: m * n binary matrix mat
 * returns: the distance of the nearest 0 for each cell
 * the distance between two adjacent cells is 1
 * 
 * test cases:
 * mat = [[0,0,0],[0,1,0],[0,0,0]] => [[0,0,0],[0,1,0],[0,0,0]]
 * mat = [[0,0,0],[0,1,0],[1,1,1]] => [[0,0,0],[0,1,0],[1,2,1]]
 * 
 * pseudocode: using DP
 * make a 2D matrix to hold the results
 * loop through from the row = 0
 *    loop through from the column = 0
 *     if the cell value is equal to 0, push the 0 to the result array
 *     else push min(left, top) to the result array
 * loop through from the last row 
 *    loop through from the lase column
 *    push min(currentcell, right, bottom) to the result
 * (make sure the top, left, right, bottom cell exists)
 * return result
 */


//runtime: O(n*m) | space: O(n*m), n is the length of the mat, and m is each
//array's length
function updateMatrix(mat) {
  const row = mat.length;
  const col = mat[0].length;
  let result = new Array(row).fill().map(() => new Array(col).fill(0));

  //if current cell value is 0, just add 0 to the corresponding row-col;
  //if the value is 1, add minimum top and left value + 1 to the current cell
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (mat[i][j] === 0) result[i][j] = 0;
      if (mat[i][j] === 1) {
        let left = j > 0 ? result[i][j - 1] : Infinity;
        let top = i > 0 ? result[i - 1][j] : Infinity;
        let currentValue = Math.min(left, top) + 1;
        result[i][j] = currentValue;
      }
    }
  }

  //check current cell, right and bottom cell's value, update the minimum value
  //of the three cells to the current cell
  for (let i = row - 1; i >= 0; i--) {
    for (let j = col - 1; j >= 0; j--) {
      let right = j < col - 1 ? result[i][j + 1] : Infinity;
      let bottom = i < row - 1 ? result[i + 1][j] : Infinity;
      result[i][j] = Math.min(result[i][j], (Math.min(right, bottom) + 1));
    }
  }
  return result;
}
