def generateMatrix(self, n: int) -> List[List[int]]:
    matrix: List[List[int]] = [[0] * n for _ in range(n)]
    counter: int = 1
    top, bottom = 0, n - 1
    left, right = 0, n - 1

    while top <= bottom and left <= right:
        for j in range(left, right + 1):
            matrix[top][j] = counter
            counter += 1
        top += 1

        for i in range(top, bottom + 1):
            matrix[i][right] = counter
            counter += 1
        right -= 1

        if top <= bottom:
            for j in range(right, left - 1, -1):
                matrix[bottom][j] = counter
                counter += 1
            bottom -= 1

        if left <= right:
            for i in range(bottom, top - 1, -1):
                matrix[i][left] = counter
                counter += 1
            left += 1

    return matrix