"use strict";

/**
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path 
 * from the root node down to the farthest leaf node.
 * 
 * test case:
 * root = [3,9,20,null,null,15,7] => 3
 * root = [1,null,2] => 2
 * 
 * constraints:
 *  The number of nodes in the tree is in the range [0, 104].
 *  -100 <= Node.val <= 100
 * 
 *  Definition for a binary tree node.
 *  function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */