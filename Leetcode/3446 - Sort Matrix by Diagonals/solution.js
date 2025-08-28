var sortMatrix = function(grid) {
    const n = grid.length;

    for (let x = 1; x < n; x++) {
        let elements = [];
        let i = 0, j = x;
        while (i < n && j < n) {
            elements.push(grid[i][j]);
            i++;
            j++;
        }
        elements.sort((a, b) => a - b);
        i = 0; j = x;
        let k = 0;
        while (i < n && j < n) {
            grid[i][j] = elements[k++];
            i++;
            j++;
        }
    }

    for (let x = 0; x < n; x++) {
        let elements = [];
        let i = x, j = 0;
        while (i < n && j < n) {
            elements.push(grid[i][j]);
            i++;
            j++;
        }
        elements.sort((a, b) => b - a);
        i = x; j = 0;
        let k = 0;
        while (i < n && j < n) {
            grid[i][j] = elements[k++];
            i++;
            j++;
        }
    }

    return grid;
};