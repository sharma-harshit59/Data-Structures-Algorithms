def generate(self, numRows: int) -> List[List[int]]:
    pascal_triangle: List[List[int]] = [[1] * (i + 1) for i in range(numRows)]
    for i in range(2, numRows):
        for j in range(1, i):
            pascal_triangle[i][j] = pascal_triangle[i - 1][j - 1] + pascal_triangle[i - 1][j]
    return pascal_triangle