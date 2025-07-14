def getDecimalValue(self, head: Optional[ListNode]) -> int:
    number: int = 0
    while head:
        number = (number << 1) + head.val
        head = head.next
    return number