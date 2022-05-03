"use strict";

/**
 * input: a Binary Search  Tree, a target integer value
 * return: the closet value to the target value contained in the BST
 * 
 * Assume: only one closest value
 *         BST node has an integer value, a left child node and a right child node
 * 
 * test case: tree = 10
 *                   /\
 *                  5  15
 *                 /\   /\
 *                2  5  13 22
 *               /       \
 *              1         14
 *           target = 12
 * return: 13
 * 
 * pseudo code:
 * compare root node value to target, make a variable to store the absolute difference 
 * diff = Math.abs(this.value - target)
 * if target greater than root node value, go to right node
 * get the diffrence of this.right.value and target, and compare this difference to previous one, keep the smaller one
 * if this.right.value greater than target, go to right node, repeat previous steps
 * find the smallest absolute different value
 */

// runtime: average O(logn) | O(1) space
// worst runtime: O(n) | O(1) space
function findClosestValueInBst(tree, target) {
  let current = tree;
  let minDiff = Infinity;
  let closestVal = current.value;
  while (current !== null) {
    let diff = Math.abs(current.value - target);
    if (diff < minDiff) {
      minDiff = diff;
      closestVal = current.value;
    }

    if (current.value < target) {
      current = current.right;
    } else if (current.value > target) {
      current = current.left;
    } else {
			break;
		}
  }
	
	return closestVal;
}

function findClosestValueInBst2(tree, target) {
  return helper(tree, target, tree.value);
}

function helper(tree, target, closest) {
  if (tree === null) return closest;

  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  
  if (tree.value < target) {
    return helper(tree.right, target, closest);
  } else if (tree.value > target) {
    return helper(tree.left, target, closest);
  } else {
    return closest;
  }
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

 