"use strict";

/**accepts: a binary search tree
 * returns: the lowest common ancestor(LCA) of two given nodes in the BST
 * 
 * LCA: the lowest common ancestor is defined between two nodes p and q as the
 *      lowest node in T that has both p and q as descendant(where we allow a 
 *      node to be a descendant of itself)
 * 
 * test case:
 * root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8  => 6
 * root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4 => 2
 * root = [2,1], p = 2, q = 1 => 2
 * 
 * pseudocode:
 * if p and q are between different side of root, return root
 * if they are in the same side:
 *    check root.left /root.right with q and p, recursively
 *    if they redirect parent-child, return the parent
 */

//runtime: O(logn) | space: O(1)
function lowestCommonAncestor(root, p, q) {
  //if p and q nodes are on different sides of root node, just return root
  if ((root.val >= p.val && root.val <= q.val) ||
    (root.val <= p.val && root.val >= q.val)) {
    return root;
  }
  //if p and q nodes on the right side of root node
  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }

  //if p and q nodes on the left side of root node
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
}