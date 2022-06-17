"use strict";

/**accepts: the head of a singly linked list
 * returns: the middle node of the linked list, if there are two middle nodes, 
 * return the second middle node
 * 
 * test cases:
 * head = [1, 2, 3, 4, 5] => [3, 4, 5]
 * head = [1, 2, 3, 4, 5, 6] => [4, 5, 6]
 * 
 * pseudocode:
 * loop through the linked list and count the number of nodes
 * the middle node should be Math.floor(count / 2) + 1
 * find the middle node according to the number, and return the middle node
 */