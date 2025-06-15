def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
    resList = ListNode(0)
    current = resList
    carry = 0

    while l1 is not None or l2 is not None or carry > 0:
        val1 = l1.val if l1 else 0
        val2 = l2.val if l2 else 0

        sum_ = val1 + val2 + carry
        carry = sum_ // 10

        current.next = ListNode(sum_ % 10)
        current = current.next

        if l1:
            l1 = l1.next
        if l2:
            l2 = l2.next

    return resList.next