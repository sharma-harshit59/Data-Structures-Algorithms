function swapPairs(head: ListNode | null): ListNode | null {
    const dummy = new ListNode(0, head);
    let prev: ListNode = dummy;

    while (head && head.next) {
        const first = head;
        const second = head.next;

        // Swap nodes
        first.next = second.next;
        second.next = first;
        prev.next = second;

        // Move forward
        prev = first;
        head = first.next;
    }

    return dummy.next;
};