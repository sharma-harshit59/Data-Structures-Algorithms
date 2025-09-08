def getNoZeroIntegers(n: int) -> List[int]:
    def is_no_zero(num: int) -> bool:
        while num > 0:
            if num % 10 == 0:
                return False
            num //= 10
        return True

    for i in range(1, n // 2 + 1):
        if is_no_zero(i) and is_no_zero(n - i):
            return [i, n - i]
    return []