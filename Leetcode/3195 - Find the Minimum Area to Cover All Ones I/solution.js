var minimumArea = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let fr = m - 1, lr = 0, fc = n - 1, lc = 0;

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