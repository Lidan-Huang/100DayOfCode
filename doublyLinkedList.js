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

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    // if Linked List is empty, set the node to head and tail
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.insertBefore(this.head, node);
    }
  }

  setTail(node) {
    // if Linked List is empty, set the node to head and tail
    if (this.tail === null) {
      this.tail = node;
      this.head = node;
    } else {
      this.insertAfter(this.tail, node);
    }
  }

  insertBefore(node, nodeToInsert) {
    // Linked List only has one node, and nodeToInsert is the only node
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;

    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;

    if (node.prev === null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) {
    // Linked List only has one node, and nodeToInsert is the only node, directly return
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;

    this.remove(nodeToInsert);
    nodeToInsert.next = node.next;
    nodeToInsert.prev = node;

    if (node.next === null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }
    node.next = nodeToInsert;

  }

  insertAtPosition(position, nodeToInsert) {
    // insert node before head
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }

    let currentNode = this.head;
    let currentPosition = 1;
    while (currentNode !== null && currentPosition++ !== position) {
      currentNode = currentNode.next;
    }

    if (currentNode !== null) {
      this.insertBefore(currentNode, nodeToInsert);
    } else {
      // insert node after tail
      this.setTail(nodeToInsert);
    }
  }

  removeNodesWithValue(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      let nodeToRemove = currentNode;
      currentNode = currentNode.next;
      if (nodeToRemove.value === value) {
        this.remove(nodeToRemove);
      }
    }
  }

  remove(node) {
    if (node === this.head) {
      this.head = this.head.next;
    }
    if (node === this.tail) {
      this.tail = this.tail.prev;
    }
    if (node.prev !== null) node.prev.next = node.next;
    if (node.next !== null) node.next.prev = node.prev;
    node.prev = null;
    node.next = null;

  }

  containsNodeWithValue(value) {
    let currentNode = this.head;
    while (currentNode !== null && currentNode.value !== value) currentNode = currentNode.next;
    return currentNode !== null;
  }
}


