def sortMatrix(self, grid: List[List[int]]) -> List[List[int]]:
    n: int = len(grid)

    for x in range(1, n):
        elements: List[int] = []
        i, j = 0, x
        while i < n and j < n:
            elements.append(grid[i][j])
            i += 1
            j += 1
        elements.sort()
        i, j = 0, x
        k = 0
        while i < n and j < n:
            grid[i][j] = elements[k]
            i += 1
            j += 1
            k += 1

    for x in range(n):
        elements: List[int] = []
        i, j = x, 0
        while i < n and j < n:
            elements.append(grid[i][j])
            i += 1
            j += 1
        elements.sort(reverse=True)
        i, j = x, 0
        k = 0
        while i < n and j < n:
            grid[i][j] = elements[k]
            i += 1
            j += 1
            k += 1

    return grid