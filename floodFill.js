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
 */