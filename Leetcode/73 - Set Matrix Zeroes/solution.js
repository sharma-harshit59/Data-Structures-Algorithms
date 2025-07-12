var setZeroes = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    let setFirstRow = false;
    let setFirstCol = false;

    // Check first row
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            setFirstRow = true;
            break;
        }
    }

    // Check first column
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            setFirstCol = true;
            break;
        }
    }

    // Mark zeros in first row and column
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Apply markers to matrix
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Handle first row
    if (setFirstRow) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }

    // Handle first column
    if (setFirstCol) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
};