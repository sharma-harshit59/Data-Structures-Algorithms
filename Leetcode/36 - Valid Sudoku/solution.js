var isValidSudoku = function(board) {
    for (let i = 0; i < 9; i++) {
        let visited = Array(9).fill(false);
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') continue;
            let num = board[i][j].charCodeAt(0) - 49;
            if (visited[num]) return false;
            visited[num] = true;
        }
    }

    for (let j = 0; j < 9; j++) {
        let visited = Array(9).fill(false);
        for (let i = 0; i < 9; i++) {
            if (board[i][j] === '.') continue;
            let num = board[i][j].charCodeAt(0) - 49;
            if (visited[num]) return false;
            visited[num] = true;
        }
    }

    for (let k = 0; k < 9; k++) {
        let visited = Array(9).fill(false);
        let currRow = Math.floor(k / 3) * 3;
        let currCol = (k % 3) * 3;
        for (let i = currRow; i < currRow + 3; i++) {
            for (let j = currCol; j < currCol + 3; j++) {
                if (board[i][j] === '.') continue;
                let num = board[i][j].charCodeAt(0) - 49;
                if (visited[num]) return false;
                visited[num] = true;
            }
        }
    }
    return true;
};