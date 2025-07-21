var swapPairs = function(head) {
    const dummy = { val: 0, next: head };
    let prev = dummy;

    while (head && head.next) {
        const first = head;
        const second = head.next;

        // Perform the swap
        first.next = second.next;
        second.next = first;
        prev.next = second;

        // Move pointers forward
        prev = first;
        head = first.next;
    }

    return dummy.next;
};