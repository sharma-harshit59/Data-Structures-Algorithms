var convert = function (s, numRows) {
    if ((numRows === 1) || (s.length <= numRows)) return s;

    let zigZag = Array.from({ length: numRows }, () => "");
    let goingDown = true;
    let row = 0;

    for (let i = 0; i < s.length; i++) {
        zigZag[row] += s[i];
        if (row === (numRows - 1)) {
            goingDown = false;
        } else if (row === 0) {
            goingDown = true;
        }
        row += (goingDown ? 1 : -1);
    }

    return zigZag.join('');
};