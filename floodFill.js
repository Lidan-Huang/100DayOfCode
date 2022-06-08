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