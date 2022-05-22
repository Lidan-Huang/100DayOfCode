"use strict";

/**Doubly Linked List Construction:
 * write a DoublyLinkedList class that has a head and a tail, both of which point to either
 * a linked list Node or <None>/null
 * The class should support:
 *  - setting the head and tail of the linked list
 *  - inserting nodes before and after other nodes as well as at given positions(
 * the position of the head node is 1)
 *  - removing given nodes and removing nodes with given values
 *  - searching for nodes with given values
 *  
 * Note: setHead, setTail, insertBefore, insertAfter, insertAtPosition, and remove methods all take in 
 * actual Nodes as input parameters, not integers(except for insertAtPosition, 
 * which will takes in an integer representing the position)
 * 
 * You don't need to create any new Nodes in these methods
 * the input nodes can be either stand-alone nodes or nodes that are already in the linked list, the code
 * has to defensively handle this scenario.
 * 
 * Each node has an integer value as well as a prev node and a next node, both of which
 * can point to either another node or None/null.
 */