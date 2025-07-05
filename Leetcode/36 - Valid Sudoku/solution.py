def isValidSudoku(self, board: List[List[str]]) -> bool:
    num_set: set[str] = set()

    # Check all rows
    for i in range(9):
        num_set.clear()
        for j in range(9):
            val = board[i][j]
            if val != ".":
                if val in num_set:
                    return False
                num_set.add(val)

    # Check all columns
    for j in range(9):
        num_set.clear()
        for i in range(9):
            val = board[i][j]
            if val != ".":
                if val in num_set:
                    return False
                num_set.add(val)

    # Check all 3×3 boxes
    for k in range(9):
        curr_row = (3 * k) % 9
        curr_col = (k // 3) * 3
        num_set.clear()

        for i in range(curr_row, curr_row + 3):
            for j in range(curr_col, curr_col + 3):
                val = board[i][j]
                if val != ".":
                    if val in num_set:
                        return False
                    num_set.add(val)

    return True