"use strict";

/** accept: a singly-linked list, you will not be given access to the head of the
 *          list, and you could access to the node to be deleted
 * return the linked list
 * It is guaranteed that the node to be deleted is not a tail node in the list.
 * 
 * test case:
 * [1, 4, 5, 9], 5 => [1, 4, 9]
 * 
 * 
 * pseudocode:
 * update the deleted node's value to its next node's value
 * node.next point to node.next.next to skip the next node
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};