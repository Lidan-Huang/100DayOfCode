"use strict";

/**accepts: the root of a binary tree
 * returns: the length of the diameter of the tree
 * 
 * diameter of a binary tree is the length of the longest path between any two
 * nodes in a tree, this path may or may not pass through the root
 * the length of a path between two nodes is represented by the number of edges
 * between them
 * 
 * test cases:
 * root = [1, 2, 3, 4, 5] => 3 (3 is the length of the path[4, 2, 1, 3] or [5, 2, 1, 3])
 * root = [1, 2] => 1
 * 
 * pseudocode:
 */