"use strict";

/**accepts: an image of m*n integer grid(matrix), three integers: sr, sc and newColor
 * returns the modified image after persforming the flood fill
 * requirements: 
 * perform a flood fill on the image starting from the pixel image[sr][sc],
 * consider the starting pixel, plus any pixels connected 4-directionally to the 
 * starting pixel of the same color as the starting pixel, plus any pixels connected
 * 4-directionally to those pixels(also with the same color), and so on, replace
 * the color of all the aforementioned pixels with newColor
 * 
 * test case:
 * image=[[1, 1, 1], [1, 1, 0], [1, 0 , 1]], sr = 1, sc = 1, newColor = 2
 * => [[2, 2, 2], [2, 2, 0], [2, 0, 1]]
 * image=[[0, 0, 0], [0, 0, 0]], sr = 0, sc = 0, newColor = 2
 * => [[2, 2, 2], [2, 2, 2], [2, 2, 2]]
 * 
 * pseudocode:
 * make a value to hold the start point
 * if the start point is outside of the image, just return
 * if the start value is equal to the newColor, just return the image
 * if start value not equal to newColor, assign the newcolor to current start value
 * check left side: if it exist, recursively call the function itself, pass new start point
 * check right, top and bottom side, the same with left side
 * 
 * return modified image
 */

function floodFill(image, sr, sc, newColor) {
  const row = image.length;
  const col = image[0].length;
  //check if the starting pixel is inside of the image
  if (sr < 0 || sr >= row || sc < 0 || sc >= col) return;

  const value = image[sr][sc];
  if (value === newColor) return image;

  image[sr][sc] = newColor;

  //check left direction
  if (sc - 1 >= 0 && image[sr][sc - 1] === value) floodFill(image, sr, sc - 1, newColor);

  //check right direction
  if (sc + 1 < col && image[sr][sc + 1] === value) floodFill(image, sr, sc + 1, newColor);

  //check top direction
  if (sr - 1 >= 0 && image[sr - 1][sc] === value) floodFill(image, sr - 1, sc, newColor);

  //check bottom direction
  if (sr + 1 < row && image[sr + 1][sc] === value) floodFill(image, sr + 1, sc, newColor);

  return image;
}