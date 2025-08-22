def minimumArea(self, grid: List[List[int]]) -> int:
    m: int = len(grid)
    n: int = len(grid[0])
    fr: int = m - 1
    lr: int = 0
    fc: int = n - 1
    lc: int = 0

    for i in range(m):
        for j in range(n):
            if grid[i][j] == 1:
                if i < fr:
                    fr = i
                if i > lr:
                    lr = i
                if j < fc:
                    fc = j
                if j > lc:
                    lc = j

    return (lr - fr + 1) * (lc - fc + 1)