"use strict";

/** accepts: the root of a binary tree
 * returns: the root of the inverted tree
 * 
 * test case: 
 * root=[4,2,7,1,3,6,9] => [4,7,2,9,6,3,1]
 * 
 * pseudo code:
 * base base: if the node is null, return null
 * if the node is not null, exchange its two children nodes
 * and recursive repeat the above steps for node.left and node.right, until
 * there's no more nodes
 * return rootnode
 */

/** Definition for a binary tree node.
  * function TreeNode(val, left, right) {
  *     this.val = (val===undefined ? 0 : val)
  *     this.left = (left===undefined ? null : left)
  *     this.right = (right===undefined ? null : right)
  * }
  */

function invertBinaryTree(root) {
  if (root === null) return null;

  let tempNode = root.left;
  root.left = root.right;
  root.right = tempNode;
  invertBinaryTree(root.left);
  invertBinaryTree(root.right);

  return root;
}