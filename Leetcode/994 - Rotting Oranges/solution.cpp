int orangesRotting(vector<vector<int>>& grid) {
    int m = grid.size(), n = grid[0].size();
    queue<tuple<int, int, int>> rotten;
    int freshCells = 0;

    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                freshCells++;
            } else if (grid[i][j] == 2) {
                rotten.push({i, j, 0});
            }
        }
    }

    int timeLapsed = 0;
    vector<pair<int,int>> dirs = {{1,0}, {-1,0}, {0,1}, {0,-1}};

    while (!rotten.empty()) {
        auto [i, j, t] = rotten.front();
        rotten.pop();

        for (auto [di, dj] : dirs) {
            int ni = i + di, nj = j + dj;
            if ((0 <= ni && ni < m) && (0 <= nj && nj < n) && (grid[ni][nj] == 1)) {
                rotten.push({ni, nj, t + 1});
                grid[ni][nj] = 2;
                freshCells--;
            }
        }

        timeLapsed = max(timeLapsed, t);
    }

    return freshCells ? -1 : timeLapsed;
}