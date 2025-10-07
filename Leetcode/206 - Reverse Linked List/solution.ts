function reverseList(head: ListNode | null): ListNode | null {
    let temp: ListNode | null = null;
    let reverse: ListNode | null = null;
    while (head) {
        temp = head;
        head = head.next;
        temp.next = reverse;
        reverse = temp;
    }
    return reverse;
};