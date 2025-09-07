def sumZero(n: int) -> List[int]:
    res: List[int] = []
    for i in range(1, n // 2 + 1):
        res.append(i)
        res.append(-i)
    if n % 2 == 1:
        res.append(0)
    return res