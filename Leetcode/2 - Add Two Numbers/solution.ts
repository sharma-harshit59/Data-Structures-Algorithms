function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let resList: ListNode = new ListNode(0);
    let current: ListNode = resList;
    let carry: number = 0;

    while (l1 !== null || l2 !== null || carry > 0) {
        let val1: number = l1 ? l1.val : 0;
        let val2: number = l2 ? l2.val : 0;

        let sum: number = val1 + val2 + carry;
        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return resList.next;
};