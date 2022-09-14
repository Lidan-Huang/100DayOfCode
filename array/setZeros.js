"use strict";

/**
 * Given an m x n integer matrix matrix, if an element is 0, set its entire 
 * row and column to 0's.
 * You must do it in place.
 * 
 * constraints:
 * m == matrix.length
 * n == matrix[0].length
 * 1 <= m, n <= 200
 * -2^31 <= matrix[i][j] <= 2^31 - 1
 * 
 * test cases:
 * matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]] => [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 * matrix = [[1,1,1],[1,0,1],[1,1,1]] => [[1,0,1],[0,0,0],[1,0,1]]
 */

//runtime: O(m*n) | space: O(m+n)
function setZeroes(matrix) {
  let rows = new Set();
  let cols = new Set();
  const row = matrix.length;
  const col = matrix[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === 0) {
        if (!rows.has(i)) rows.add(i);
        if (!cols.has(j)) cols.add(j);
      }
    }
  }

  for (let i = 0; i < row; i++) {
    if (rows.has(i)) matrix[i] = Array.from({ length: col }).fill(0);
  }

  for (let j = 0; j < col; j++) {
    if (cols.has(j)) {
      for (let k = 0; k < row; k++) {
        matrix[k][j] = 0;
      }
    }
  }
};