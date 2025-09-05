def orangesRotting(grid: List[List[int]]) -> int:
    m, n = len(grid), len(grid[0])
    rotten: List[Tuple[int, int, int]] = []
    fresh_cells: int = 0

    for i in range(m):
        for j in range(n):
            if grid[i][j] == 1:
                fresh_cells += 1
            elif grid[i][j] == 2:
                rotten.append((i, j, 0))

    time_lapsed: int = 0
    index: int = 0
    dirs: List[Tuple[int, int]] = [(1, 0), (-1, 0), (0, 1), (0, -1)]

    while index < len(rotten):
        i, j, t = rotten[index]

        for di, dj in dirs:
            ni, nj = i + di, j + dj

            if (0 <= ni < m) and (0 <= nj < n) and (grid[ni][nj] == 1):
                rotten.append((ni, nj, t + 1))
                grid[ni][nj] = 2
                fresh_cells -= 1

        time_lapsed = max(time_lapsed, t)
        index += 1

    if fresh_cells > 0:
        return -1
    else:
        return time_lapsed