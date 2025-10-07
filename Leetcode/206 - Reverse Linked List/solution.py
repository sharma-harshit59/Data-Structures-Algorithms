def reverseList(head: Optional[ListNode]) -> Optional[ListNode]:
    temp = None
    reverse = None
    while head:
        temp = head
        head = head.next
        temp.next = reverse
        reverse = temp
    return reverse