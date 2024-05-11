let partition = function(head, x) {
    let current = head;
    let smallX = new ListNode(); // Create a new node here
    let bigX = new ListNode();   // Create a new node here
    let smallTail = smallX;
    let bigTail = bigX;

    while (current !== null) {
        let newNode = new ListNode(current.val); // Create a new node for current value
        if (current.val < x) {
            smallTail.next = newNode; // Use the new node here
            smallTail = newNode;
        } else {
            bigTail.next = newNode; // Use the new node here
            bigTail = newNode;
        }

        current = current.next;
    }

    bigTail.next = null;
    smallTail.next = bigX.next;
    return smallX.next;
};
