def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
    reversed_list: Optional[ListNode] = None

    while head:
        next_node: Optional[ListNode] = head.next
        head.next = reversed_list
        reversed_list = head
        head = next_node

    return reversed_list