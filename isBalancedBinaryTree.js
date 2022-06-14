"use strict";

/**accepts: a binary tree
 * returns: true if it is height-balanced, otherwise returns false
 * a height-balanced binary tree: a binary tree in which the left and right
 * subtree of every node differ in height by no more than 1
 * 
 * the number of nodes in the tree is in the range [0, 5000]
 * 
 * test case:
 * root = [3,9,20,null,null,15,7]  => true
 * root = [1,2,2,3,3,null,null,4,4] => false
 * 
 * pseudocode:
 * if the tree is empty, return true, and also return its height 0
 * else check root.left and root.right
 * check if the subtrees are balanced or not, if not balanced, return false
 * if subtrees are balanced, check the top level of trees
 * 
 */

