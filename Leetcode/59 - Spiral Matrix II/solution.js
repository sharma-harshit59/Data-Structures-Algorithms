var generateMatrix = function (n) {
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));
    let counter = 1;
    let top = 0, bottom = n - 1;
    let left = 0, right = n - 1;

    while (top <= bottom && left <= right) {
        for (let j = left; j <= right; j++) matrix[top][j] = counter++;
        top++;

        for (let i = top; i <= bottom; i++) matrix[i][right] = counter++;
        right--;

        if (top <= bottom) {
            for (let j = right; j >= left; j--) matrix[bottom][j] = counter++;
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) matrix[i][left] = counter++;
            left++;
        }
    }

    return matrix;
};