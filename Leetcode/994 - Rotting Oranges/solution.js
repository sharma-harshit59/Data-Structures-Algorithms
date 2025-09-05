var orangesRotting = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const rotten = [];
    let freshCells = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                freshCells++;
            } else if (grid[i][j] === 2) {
                rotten.push([i, j, 0]);
            }
        }
    }

    let timeLapsed = 0, index = 0;
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    while (index < rotten.length) {
        const [i, j, t] = rotten[index];

        for (const [di, dj] of dirs) {
            const ni = i + di;
            const nj = j + dj;
            if ((0 <= ni && ni < m) && (0 <= nj && nj < n) && (grid[ni][nj] === 1)) {
                rotten.push([ni, nj, t + 1]);
                grid[ni][nj] = 2;
                freshCells--;
            }
        }

        timeLapsed = Math.max(timeLapsed, t);
        index++;
    }

    return (freshCells > 0) ? -1 : timeLapsed;
};