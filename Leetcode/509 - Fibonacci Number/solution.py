def fib(self, n: int) -> int:
    if n <= 1:
        return n

    prev2: int = 0
    prev1: int = 1

    for _ in range(2, n + 1):
        prev2, prev1 = prev1, prev1 + prev2

    return prev1