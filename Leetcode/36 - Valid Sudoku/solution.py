def isValidSudoku(self, board: List[List[str]]) -> bool:
    for i in range(9):
        visited = [False] * 9
        for j in range(9):
            if board[i][j] == '.':
                continue
            num = ord(board[i][j]) - ord('1')
            if visited[num]:
                return False
            visited[num] = True

    for j in range(9):
        visited = [False] * 9
        for i in range(9):
            if board[i][j] == '.':
                continue
            num = ord(board[i][j]) - ord('1')
            if visited[num]:
                return False
            visited[num] = True

    for k in range(9):
        visited = [False] * 9
        currRow = (k // 3) * 3
        currCol = (k % 3) * 3
        for i in range(currRow, currRow + 3):
            for j in range(currCol, currCol + 3):
                if board[i][j] == '.':
                    continue
                num = ord(board[i][j]) - ord('1')
                if visited[num]:
                    return False
                visited[num] = True

    return True