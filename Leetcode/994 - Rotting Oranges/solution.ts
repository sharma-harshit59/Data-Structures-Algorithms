function orangesRotting(grid: number[][]): number {
    const m: number = grid.length;
    const n: number = grid[0].length;
    const rotten: Array<[number, number, number]> = [];
    let freshCells: number = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                freshCells++;
            } else if (grid[i][j] === 2) {
                rotten.push([i, j, 0]);
            }
        }
    }

    let timeLapsed: number = 0;
    let index: number = 0;
    const dirs: Array<[number, number]> = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    while (index < rotten.length) {
        const [i, j, t] = rotten[index];

        for (const [di, dj] of dirs) {
            const ni: number = i + di;
            const nj: number = j + dj;

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