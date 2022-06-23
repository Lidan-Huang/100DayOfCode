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



