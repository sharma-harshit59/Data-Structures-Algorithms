bool isValidSudoku(vector<vector<char>>& board) {
    for (int i = 0; i < 9; i++) {
        vector<bool> visited(9, false);
        for (int j = 0; j < 9; j++) {
            if (board[i][j] == '.') continue;
            int val = board[i][j] - '1';
            if (visited[val]) {
                return false;
            }
            visited[val] = true;
        }
    }

    for (int j = 0; j < 9; j++) {
        vector<bool> visited(9, false);
        for (int i = 0; i < 9; i++) {
            if (board[i][j] == '.') continue;
            int val = board[i][j] - '1';
            if (visited[val]) {
                return false;
            }
            visited[val] = true;
        }
    }

    for (int k = 0; k < 9; k++) {
        int currRow = (k / 3) * 3;
        int currCol = (k % 3) * 3;
        vector<bool> visited(9, false);
        for (int i = currRow; i < currRow + 3; i++) {
            for (int j = currCol; j < currCol + 3; j++) {
                if (board[i][j] == '.') continue;
                int val = board[i][j] - '1';
                if (visited[val]) {
                    return false;
                }
                visited[val] = true;
            }
        }
    }

    return true;
}