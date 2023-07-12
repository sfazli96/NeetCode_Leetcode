var sortList = function(head) {
    if (!head) {
      return head;
    }

    let sortedHead = head;
    let unsorted = head.next;
    sortedHead.next = null;

    while (unsorted) {
      const nodeToInsert = unsorted;
      unsorted = unsorted.next;

      if (nodeToInsert.val < sortedHead.val) {
        nodeToInsert.next = sortedHead;
        sortedHead = nodeToInsert;
      } else {
        let current = sortedHead;
        let previous = null;
        while (current && nodeToInsert.val >= current.val) {
          previous = current;
          current = current.next;
        }
        nodeToInsert.next = current;
        previous.next = nodeToInsert;
      }
    }

    return sortedHead;
  };
