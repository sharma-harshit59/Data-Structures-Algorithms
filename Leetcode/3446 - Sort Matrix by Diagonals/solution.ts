function sortMatrix(grid: number[][]): number[][] {
    const n: number = grid.length;

    for (let x: number = 1; x < n; x++) {
        let elements: number[] = [];
        let i: number = 0, j: number = x;
        while (i < n && j < n) {
            elements.push(grid[i][j]);
            i++;
            j++;
        }
        elements.sort((a, b) => a - b);
        i = 0; j = x;
        let k: number = 0;
        while (i < n && j < n) {
            grid[i][j] = elements[k++];
            i++;
            j++;
        }
    }

    for (let x: number = 0; x < n; x++) {
        let elements: number[] = [];
        let i: number = x, j: number = 0;
        while (i < n && j < n) {
            elements.push(grid[i][j]);
            i++;
            j++;
        }
        elements.sort((a, b) => b - a);
        i = x; j = 0;
        let k: number = 0;
        while (i < n && j < n) {
            grid[i][j] = elements[k++];
            i++;
            j++;
        }
    }

    return grid;
};