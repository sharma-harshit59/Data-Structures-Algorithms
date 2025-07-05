function isValidSudoku(board: string[][]): boolean {
    const numSet: Set<string> = new Set();

    // Check all rows
    for (let i = 0; i < 9; i++) {
        numSet.clear();
        for (let j = 0; j < 9; j++) {
            const val: string = board[i][j];
            if (val !== ".") {
                if (numSet.has(val)) return false;
                numSet.add(val);
            }
        }
    }

    // Check all columns
    for (let j = 0; j < 9; j++) {
        numSet.clear();
        for (let i = 0; i < 9; i++) {
            const val: string = board[i][j];
            if (val !== ".") {
                if (numSet.has(val)) return false;
                numSet.add(val);
            }
        }
    }

    // Check all 3×3 boxes
    for (let k = 0; k < 9; k++) {
        const currRow: number = (3 * k) % 9;
        const currCol: number = Math.floor(k / 3) * 3;
        numSet.clear();

        for (let i = currRow; i < currRow + 3; i++) {
            for (let j = currCol; j < currCol + 3; j++) {
                const val: string = board[i][j];
                if (val !== ".") {
                    if (numSet.has(val)) return false;
                    numSet.add(val);
                }
            }
        }
    }

    return true;
};