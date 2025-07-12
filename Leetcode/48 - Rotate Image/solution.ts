function rotate(matrix: number[][]): void {
    const n: number = matrix.length;
    // Step 1: Reverse rows
    for (let i = 0; i < Math.floor(n / 2); i++) {
        [matrix[i], matrix[n - i - 1]] = [matrix[n - i - 1], matrix[i]];
    }
    // Step 2: Transpose
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
};