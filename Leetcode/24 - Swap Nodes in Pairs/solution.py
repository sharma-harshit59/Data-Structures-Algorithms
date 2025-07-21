def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
    dummy = ListNode(0, head)
    prev = dummy

    while head and head.next:
        first = head
        second = head.next

        # Swap nodes
        first.next = second.next
        second.next = first
        prev.next = second

        # Move pointers forward
        prev = first
        head = first.next

    return dummy.next