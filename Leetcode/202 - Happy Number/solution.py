def isHappy(self, n: int) -> bool:
    def get_digit_square_sum(num: int) -> int:
        total = 0
        while num > 0:
            digit = num % 10
            total += digit * digit
            num //= 10
        return total

    num_set: set[int] = set()
    while n not in num_set:
        num_set.add(n)
        n = get_digit_square_sum(n)
        if n == 1:
            return True

    return False