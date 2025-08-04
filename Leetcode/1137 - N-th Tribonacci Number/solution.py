def tribonacci(self, n: int) -> int:
    if n == 0:
        return 0
    if n <= 2:
        return 1

    a, b, c = 0, 1, 1
    for _ in range(3, n + 1):
        res = a + b + c
        a, b, c = b, c, res

    return c