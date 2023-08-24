var hasCycle = function(head) {
    let current = head;
    let faster = head;

    while (faster !== null && faster.next !== null) {
        current = current.next;
        faster = faster.next.next;

        if (current === faster) {
            return true;
        }
    }

    return false;
};
