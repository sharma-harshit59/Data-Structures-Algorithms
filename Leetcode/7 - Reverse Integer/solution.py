def reverse(self, x: int) -> int:
    rev: int = 0
    num: int = abs(x)
    while num > 0:
        rev = rev * 10 + (num % 10)
        num //= 10

    if x < 0:
        rev = -rev
    return rev if -(2**31) <= rev < 2**31 else 0