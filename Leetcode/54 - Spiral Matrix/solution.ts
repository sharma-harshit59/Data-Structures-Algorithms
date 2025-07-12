function spiralOrder(matrix: number[][]): number[] {
    const res: number[] = [];
    let top: number = 0, bottom: number = matrix.length - 1;
    let left: number = 0, right: number = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        for (let j = left; j <= right; j++) res.push(matrix[top][j]);
        top++;
        for (let i = top; i <= bottom; i++) res.push(matrix[i][right]);
        right--;
        if (top <= bottom) {
            for (let j = right; j >= left; j--) res.push(matrix[bottom][j]);
            bottom--;
        }
        if (left <= right) {
            for (let i = bottom; i >= top; i--) res.push(matrix[i][left]);
            left++;
        }
    }

    return res;
};