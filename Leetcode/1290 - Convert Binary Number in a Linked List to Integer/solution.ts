function getDecimalValue(head: ListNode | null): number {
    let num: number = 0;
    while (head) {
        num = (num << 1) + head.val;
        head = head.next;
    }
    return num;
};