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