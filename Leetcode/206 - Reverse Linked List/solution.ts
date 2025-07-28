function reverseList(head: ListNode | null): ListNode | null {
    let reversedList: ListNode | null = null;

    while (head !== null) {
        const nextNode: ListNode | null = head.next;
        head.next = reversedList;
        reversedList = head;
        head = nextNode;
    }

    return reversedList;
};