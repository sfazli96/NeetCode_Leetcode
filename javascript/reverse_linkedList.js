/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let current = head
    let prev = null; // Initialize prev to null since it will be the last node
    let next;

    while (current) {
        next = current.next // store the next pointer of current node
        current.next = prev // update the next pointer of current node
        prev = current // move the prev to current node
        current = next // move current to next node
    }
    return prev
};
