def setZeroes(self, matrix: List[List[int]]) -> None:
    m: int = len(matrix)
    n: int = len(matrix[0])

    set_first_row: bool = any(matrix[0][j] == 0 for j in range(n))
    set_first_col: bool = any(matrix[i][0] == 0 for i in range(m))

    # Mark rows and columns
    for i in range(1, m):
        for j in range(1, n):
            if matrix[i][j] == 0:
                matrix[i][0] = 0
                matrix[0][j] = 0

    # Apply markers
    for i in range(1, m):
        for j in range(1, n):
            if matrix[i][0] == 0 or matrix[0][j] == 0:
                matrix[i][j] = 0

    # Zero first row
    if set_first_row:
        for j in range(n):
            matrix[0][j] = 0

    # Zero first column
    if set_first_col:
        for i in range(m):
            matrix[i][0] = 0