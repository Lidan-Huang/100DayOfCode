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

function isBalancedBinaryTree(root) {
  function dfs(root) {
    //empty tree is balanced, and return its height 0
    if (root === null) return [true, 0];
    let left = dfs(root.left);
    let right = dfs(root.right);
    //check if current subtree is balanced
    let balanced = left[0] && right[0] && (Math.abs(left[1] - right[1]) < 2);
    
    return [balanced, 1 + Math.max(left[1], right[1])];
  }

  return dfs(root)[0];
}