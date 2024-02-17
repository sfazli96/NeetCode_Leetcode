/*

Code
Testcase
Testcase
Test Result
234. Palindrome Linked List
Easy
Topics
Companies
Given the head of a singly linked list, return true if it is a
palindrome
 or false otherwise.
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // Helper function to reverse a linked list
    function reverseLinkedList(node) {
        let prev = null;
        while (node) {
            let next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return prev;
    }

    // Traverse the linked list and store values in an array
    let current = head;
    let values = [];
    while (current) {
        values.push(current.val);
        current = current.next;
    }

    // Create a reversed version of the linked list
    let reversedHead = reverseLinkedList(head);

    // Compare elements from both ends of the linked list
    for (let val of values) {
        if (val !== reversedHead.val) {
            return false;
        }
        reversedHead = reversedHead.next;
    }

    return true;
};
