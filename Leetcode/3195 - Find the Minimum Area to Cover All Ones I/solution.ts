function minimumArea(grid: number[][]): number {
    const m: number = grid.length;
    const n: number = grid[0].length;
    let fr: number = m - 1, lr: number = 0, fc: number = n - 1, lc: number = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                if (i < fr) fr = i;
                if (i > lr) lr = i;
                if (j < fc) fc = j;
                if (j > lc) lc = j;
            }
        }
    }
    
    return (lr - fr + 1) * (lc - fc + 1);
};