def plusOne(self, digits: List[int]) -> List[int]:
    i: int = len(digits) - 1
    carry: int = 1

    while i >= 0 and carry:
        digits[i] += carry
        carry = digits[i] // 10
        digits[i] %= 10
        i -= 1

    if carry:
        digits.insert(0, 1)

    return digits