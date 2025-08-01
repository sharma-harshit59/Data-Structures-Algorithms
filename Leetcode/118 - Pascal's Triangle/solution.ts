function generate(numRows: number): number[][] {
    const pascalTriangle: number[][] = new Array(numRows);
    for (let i = 0; i < numRows; i++) {
        pascalTriangle[i] = new Array(i + 1).fill(1);
        for (let j = 1; j < i; j++) {
            pascalTriangle[i][j] = pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];
        }
    }
    return pascalTriangle;
};