var isValidSudoku = function (board) {
    const numSet = new Set();

    // Check all rows
    for (let i = 0; i < 9; i++) {
        numSet.clear();
        for (let j = 0; j < 9; j++) {
            const val = board[i][j];
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
            const val = board[i][j];
            if (val !== ".") {
                if (numSet.has(val)) return false;
                numSet.add(val);
            }
        }
    }

    // Check all 3x3 boxes
    for (let k = 0; k < 9; k++) {
        const currRow = (3 * k) % 9;
        const currCol = Math.floor(k / 3) * 3;
        numSet.clear();

        for (let i = currRow; i < currRow + 3; i++) {
            for (let j = currCol; j < currCol + 3; j++) {
                const val = board[i][j];
                if (val !== ".") {
                    if (numSet.has(val)) return false;
                    numSet.add(val);
                }
            }
        }
    }

    return true;
};