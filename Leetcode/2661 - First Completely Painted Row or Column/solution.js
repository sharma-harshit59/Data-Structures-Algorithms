var firstCompleteIndex = function(arr, mat) {
    let index;
    let m = mat.length, n = mat[0].length;

    let rowCount = new Array(m).fill(0);
    let colCount = new Array(n).fill(0);

    let numberMap = {}
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            numberMap[mat[i][j]] = [i, j];
        }
    }
    
    for (let k = 0; k < arr.length; k++) {
        let [R, C] = numberMap[arr[k]];
        if ((++rowCount[R] == n) || (++colCount[C] == m)) {
            index = k;
            break;
        }
    }
    return index;
};