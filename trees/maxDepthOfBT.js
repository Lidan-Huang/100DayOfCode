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

// solution 1: recursion
function maxDepth1 (root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth1(root.left), maxDepth1(root.right));
}

// solution 2: BFS
function maxDepth2(root) {
  if (!root) return 0;

  let q = [root];
  let layer = 0;

  while (q.length) {
    let len = q.length;

    for (let i = 0; i < len; i++) {
      let node = q.shift();
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    layer++;
  }

  return layer;
}

// solution 3: DFS
function maxDepth3(root) {
  let stack = [[root, 1]];
  let result = 0;

  while (stack.length) {
    let [node, layer] = stack.pop();

    if (node) {
      result = Math.max(result, layer);
      stack.push(node.left);
      stack.push(node.right);
    }
  }
  return result;
}

//in JavaScript, empty array or object is true
