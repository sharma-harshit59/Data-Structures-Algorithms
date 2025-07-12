def rotate(self, matrix: List[List[int]]) -> None:
    n: int = len(matrix)
    # Step 1: Reverse the rows (top to bottom)
    for i in range(n // 2):
        matrix[i], matrix[n - i - 1] = matrix[n - i - 1], matrix[i]
    # Step 2: Transpose (swap elements across diagonal)
    for i in range(n):
        for j in range(i + 1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]